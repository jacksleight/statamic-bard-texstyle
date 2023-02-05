<?php

namespace JackSleight\StatamicBardTexstyle;

use Illuminate\Support\Arr;
use JackSleight\StatamicBardTexstyle\Extensions\Core;
use JackSleight\StatamicBardTexstyle\Marks\Span;
use Statamic\Fieldtypes\Bard;
use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/addon.js',
    ];

    public function bootAddon()
    {
        $this->publishes([
            __DIR__.'/../config/statamic/bard_texstyle.php' => config_path('statamic/bard_texstyle.php'),
        ], 'statamic-bard-texstyle-config');

        $defaults = config('statamic.bard_texstyle.default_classes', []);
        $defaults = $this->normalizeDefaults($defaults);

        $store = config('statamic.bard_texstyle.store', 'class');
        $attr = $store === 'class' ? 'class' : 'bts_key';

        $styles = config('statamic.bard_texstyle.styles', []);
        $styles = $this->normalizeStyles($styles);
        array_walk($styles, function (&$style, $key) {
            $style['key'] = $key;
        });

        $styleTypes = collect($styles)
            ->pluck('type')
            ->map(fn ($v) => [
                'span' => 'btsSpan',
            ][$v] ?? $v)
            ->unique()
            ->values()
            ->all();
        $allTypes = collect($styleTypes)
            ->merge(collect($defaults)->keys())
            ->unique()
            ->values()
            ->all();

        Statamic::provideToScript([
            'bard-texstyle' => [
                'store' => $store,
                'attr' => $attr,
                'styles' => $styles,
                'styleTypes' => $styleTypes,
            ],
        ]);

        $options = [
            'store' => $store,
            'attr' => $attr,
            'styles' => $styles,
            'styleTypes' => $styleTypes,
            'allTypes' => $allTypes,
        ];
        Augmentor::addExtension('btsCore', function ($bard) use ($options, $defaults) {
            return new Core($options + [
                'defaults' => $defaults[$bard->config('bts_default_classes', 'standard')] ?? null,
            ]);
        });
        Augmentor::addExtension('btsSpan', new Span());

        $defaultSets = collect($defaults)
            ->map(fn ($v, $k) => $k)
            ->except('standard')
            ->all();
        if (count($defaultSets)) {
            Bard::appendConfigField('bts_default_classes', [
                'display' => __('Default Classes'),
                'instructions' => 'The set of default classes to use. The standard set will be used by default.',
                'type' => 'select',
                'clearable' => true,
                'options' => $defaultSets,
                'width' => 50,
            ]);
        }

        // $buttons = collect($styles)
        //     ->mapWithKeys(fn ($style, $key) => [$key => $style['name']])
        //     ->merge([
        //         'h1' => 'Heading 1',
        //         'h2' => 'Heading 2',
        //         'h3' => 'Heading 3',
        //         'h4' => 'Heading 4',
        //         'h5' => 'Heading 5',
        //         'h6' => 'Heading 6',
        //         'unorderedlist' => 'Unordered List',
        //         'orderedlist' => 'Ordered List',
        //     ]);
        // Bard::appendConfigField('bts_menu', [
        //     'display' => __('Style Menu'),
        //     'instructions' => __('Which style options should be moved to the style menu'),
        //     'type' => 'checkboxes',
        //     'default' => [],
        //     'multiple' => true,
        //     'options' => $buttons,
        // ]);

        return $this;
    }

    protected function normalizeDefaults($defaults)
    {
        if (array_key_exists('standard', $defaults)) {
            return $defaults;
        }

        return [
            'standard' => $defaults,
        ];
    }

    /**
     * @deprecated
     */
    protected function normalizeStyles($styles)
    {
        if (Arr::isAssoc($styles)) {
            return $styles;
        }

        $normal = [];

        foreach ($styles as $style) {
            $key = isset($style['button'])
                ? $style['button']
                : ('bts_'.preg_replace('/[^\w-]/i', '_', $style['class']));
            $style['type'] = 'paragraph';
            $normal[$key] = $style;
        }

        return $normal;
    }
}
