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

    protected $types = [
        'heading' => [
            'pro' => false,
        ],
        'paragraph' => [
            'pro' => false,
        ],
        'btsSpan' => [
            'pro' => false,
        ],
        'link' => [
            'pro' => false,
        ],
        'bulletList' => [
            'pro' => false,
        ],
        'orderedList' => [
            'pro' => false,
        ],
        'btsDiv' => [
            'pro' => true,
        ],
    ];

    protected $attributeTypes = [
        'blockquote' => [],
        'bold' => [],
        'bulletList' => [],
        'code' => [],
        'codeBlock' => ['language'],
        'heading' => ['level'],
        'horizontalRule' => [],
        'image' => ['src', 'alt', 'title'],
        'italic' => [],
        'link' => ['href', 'rel', 'target', 'title'],
        'listItem' => [],
        'orderedList' => [/*'start'*/],
        'paragraph' => [],
        'strike' => [],
        'subscript' => [],
        'superscript' => [],
        'table' => [],
        'tableCell' => ['rowspan', 'colspan', 'colwidth'],
        'tableHeader' => ['rowspan', 'colspan', 'colwidth'],
        'tableRow' => [],
        'underline' => [],
    ];

    protected $styleTypes = [
        'btsSpan',
        'bulletList',
        'heading',
        'link',
        'orderedList',
        'paragraph',
    ];

    protected $aliases = [
        'span' => 'btsSpan',
        'div' => 'btsDiv',
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
            $defaultSet = $bard->config('bts_default_classes', 'standard');

            return new Core($options + [
                'defaults' => $options['defaultClasses'][$defaultSet] ?? null,
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
        $options = collect($options['defaultClasses'])
            ->map(fn ($v, $k) => $k)
            ->except('standard')
            ->all();
        if (! count($options)) {
            return $this;
        }

        Bard::appendConfigField('bts_default_classes', [
            'display' => __('Default Classes'),
            'instructions' => 'The set of default classes to use. The standard set will be used by default.',
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

        Bard::appendConfigField('bts_styles', [
            'display' => __('Style Menu'),
            'instructions' => __('Which style options should be moved into the style menu'),
            'type' => 'select',
            'multiple' => true,
            'options' => $options['styleOptions'],
        ]);

        return $this;
    }
}
