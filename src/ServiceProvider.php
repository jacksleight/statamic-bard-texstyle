<?php

namespace JackSleight\StatamicBardTexstyle;

use JackSleight\StatamicBardTexstyle\Extensions\Attributes;
use JackSleight\StatamicBardTexstyle\Extensions\Core;
use JackSleight\StatamicBardTexstyle\Marks\Span;
use JackSleight\StatamicBardTexstyle\Nodes\Div;
use Statamic\Facades\Addon;
use Statamic\Fieldtypes\Bard;
use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{
    protected $vite = [
        'hotFile' => __DIR__.'/../vite.hot',
        'publicDirectory' => 'dist',
        'input' => [
            'resources/js/addon.js',
        ],
    ];

    public function bootAddon()
    {
        $config = config('statamic.bard_texstyle', []);
        $pro = Addon::get('jacksleight/statamic-bard-texstyle')->edition() === 'pro';

        $options = (new OptionManager($config, $pro))->resolve();

        $this
            ->bootConfig()
            ->bootExtensions($options)
            ->bootProvideToScripts($options)
            ->bootDefaultClassesField($options)
            ->bootMenuField($options);

        return $this;
    }

    protected function bootConfig()
    {
        $this->publishes([
            __DIR__.'/../config/statamic/bard_texstyle.php' => config_path('statamic/bard_texstyle.php'),
        ], 'statamic-bard-texstyle-config');

        return $this;
    }

    protected function bootExtensions($options)
    {
        Augmentor::addExtension('btsCore', function ($bard) use ($options) {
            $defaultsKey = $bard->config('bts_defaults', 'standard');

            return new Core($options + [
                'defaultsKey' => $defaultsKey,
            ]);
        });
        Augmentor::addExtension('btsAttributes', new Attributes($options));
        Augmentor::addExtension('btsSpan', new Span());
        if ($options['pro']) {
            Augmentor::addExtension('btsDiv', new Div());
        }

        return $this;
    }

    protected function bootProvideToScripts($options)
    {
        Statamic::provideToScript([
            'bard-texstyle' => $options,
        ]);

        return $this;
    }

    protected function bootDefaultClassesField($options)
    {
        $options = collect($options['defaults'])
            ->map(fn ($v, $k) => $k)
            ->except('standard')
            ->all();

        Bard::appendConfigField('bts_defaults', [
            'display' => __('Texstyle Defaults'),
            'instructions' => 'Which set of defaults to use, the standard set will be used by default.',
            'type' => 'select',
            'clearable' => true,
            'options' => $options,
            'width' => 50,
        ]);

        return $this;
    }

    protected function bootMenuField($options)
    {
        if (! $options['pro']) {
            return $this;
        }

        Bard::appendConfigFields([
            'bts_styles' => [
                'display' => __('Texstyle Style Menu Options'),
                'instructions' => __('Which style options should be moved into the style menu.'),
                'type' => 'select',
                'multiple' => true,
                'options' => $options['styleOptions'],
                'width' => 66,
            ],
            'bts_styles_button' => [
                'display' => __('Texstyle Style Menu Button'),
                'instructions' => __('Whether to display an icon or text with name of the current style.'),
                'type' => 'select',
                'default' => 'icon',
                'options' => [
                    'icon' => 'Icon',
                    'text' => 'Text',
                ],
                'width' => 33,
            ],
        ]);

        return $this;
    }
}
