<?php

namespace JackSleight\StatamicBardTexstyle;

use Illuminate\Support\Arr;
use JackSleight\StatamicBardTexstyle\Extensions\Attrs;
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
    protected $scripts = [
        __DIR__.'/../dist/js/addon.js',
    ];

    protected $aliases = [
        'span' => 'btsSpan',
        'div' => 'btsDiv',
    ];

    protected $types = [
        'heading' => [
            'extension' => 'heading',
            'pro' => false,
        ],
        'paragraph' => [
            'extension' => 'paragraph',
            'pro' => false,
        ],
        'btsSpan' => [
            'extension' => 'btsSpan',
            'pro' => false,
        ],
        'link' => [
            'extension' => 'link',
            'pro' => false,
        ],
        'bulletList' => [
            'extension' => 'bulletList',
            'pro' => false,
        ],
        'orderedList' => [
            'extension' => 'orderedList',
            'pro' => false,
        ],
        'btsDiv' => [
            'extension' => 'btsDiv',
            'pro' => true,
        ],
    ];

    protected $attributeTypes = [
        'blockquote' => [],
        'bulletList' => [],
        'codeBlock' => [
            'language',
        ],
        'heading' => [
            'level',
        ],
        'horizontalRule' => [],
        'image' => [
            'src',
            'alt',
            'title',
        ],
        'listItem' => [],
        'orderedList' => [
            // 'order/start',
        ],
        'paragraph' => [],
        'table' => [],
        'tableCell' => [
            'rowspan',
            'colspan',
            'colwidth',
        ],
        'tableHeader' => [
            'rowspan',
            'colspan',
            'colwidth',
        ],
        'tableRow' => [],
    ];

    protected $menuTypes = [
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
        $options = $this->resolveOptions();
        $this
            ->bootConfig()
            ->bootExtensions($options)
            ->bootProvideToScripts($options)
            ->bootDefaultClassesField($options)
            ->bootMenuField($options);

        return $this;
    }

    protected function resolveOptions()
    {
        $pro = Addon::get('jacksleight/statamic-bard-texstyle')->edition() === 'pro';
        $pro = config('app.url') === 'http://sandbox-bard.test';

        $store = config('statamic.bard_texstyle.store', 'class');
        $attr = $store === 'class' ? 'class' : 'bts_key';

        $defaultClasses = $this->resolveDefaultClasses();
        [$styles, $types] = $this->resolveStylesAndTypes($pro);
        $styleTypes = $this->resolveStyleTypes($styles, $types);
        $classTypes = $this->resolveClassTypes($styleTypes, $defaultClasses);

        $attributes = $this->resolveAttributes($pro, $classTypes);
        $attributesTypes = $this->resolveAttributesTypes($attributes);

        $menuOptions = $this->resolveMenuOptions($pro, $styles);

        return [
            'pro' => $pro,
            'store' => $store,
            'attr' => $attr,
            'styles' => $styles,
            'types' => $types,
            'attributes' => $attributes,
            'styleTypes' => $styleTypes,
            'classTypes' => $classTypes,
            'attributesTypes' => $attributesTypes,
            'defaultClasses' => $defaultClasses,
            'menuOptions' => $menuOptions,
        ];
    }

    protected function resolveStylesAndTypes($pro)
    {
        $styles = config('statamic.bard_texstyle.styles', []);
        $styles = $this->normalizeStyles($styles);

        $types = collect($this->types)
            ->map(fn ($type, $key) => array_merge($type, ['key' => $key]))
            ->filter(fn ($type) => ! $type['pro'] || $pro)
            ->all();

        $usedTypes = [];
        $styles = collect($styles)
            ->map(fn ($style, $key) => array_merge($style, ['key' => $key]))
            ->map(fn ($style) => array_merge($style, ['type' => $this->aliases[$style['type']] ?? $style['type']]))
            ->filter(fn ($style) => isset($types[$style['type']]))
            ->each(function ($style) use (&$usedTypes) {
                $usedTypes[$style['type']] = true;
            })
            ->all();

        $types = collect($types)
            ->filter(fn ($type, $key) => isset($usedTypes[$key]))
            ->all();

        return [$styles, $types];
    }

    protected function resolveAttributes($pro, $classTypes)
    {
        if (! $pro) {
            return [];
        }

        $attributes = config('statamic.bard_texstyle.attributes', []);

        $attributes = collect($attributes)
            ->mapWithKeys(fn ($attrs, $type) => [($this->aliases[$type] ?? $type) => $attrs])
            ->filter(fn ($attrs, $type) => array_key_exists($type, $this->attributeTypes))
            ->map(function ($attrs, $type) use ($classTypes) {
                return collect($attrs)->map(function ($attr, $name) use ($type, $classTypes) {
                    return array_merge($attr, [
                        'extra' => ! in_array($name, $this->attributeTypes[$type] ?? []) &&
                            ($name !== 'class' || ! in_array($type, $classTypes)),
                    ]);
                })->all();
            })
            ->all();

        return $attributes;
    }

    protected function resolveDefaultClasses()
    {
        $defaultClasses = config('statamic.bard_texstyle.default_classes', []);
        $defaultClasses = $this->normalizeDefaults($defaultClasses);

        return $defaultClasses;
    }

    protected function resolveStyleTypes($styles, $types)
    {
        return collect($styles)
            ->pluck('type')
            ->map(fn ($type) => $types[$type]['extension'])
            ->unique()
            ->values()
            ->all();
    }

    protected function resolveClassTypes($styleTypes, $defaultClasses)
    {
        return collect($styleTypes)
            ->merge(collect($defaultClasses)->flatMap(fn ($value) => $value)->keys())
            ->unique()
            ->values()
            ->all();
    }

    protected function resolveAttributesTypes($attributes)
    {
        return collect($attributes)
            ->keys()
            ->all();
    }

    protected function resolveMenuOptions($pro, $styles)
    {
        if (! $pro) {
            return [];
        }

        return collect($styles)
            ->filter(fn ($style) => in_array($style['type'], $this->menuTypes))
            ->mapWithKeys(fn ($style, $key) => [$key => $style['name']])
            ->merge([
                'h1' => 'Heading 1',
                'h2' => 'Heading 2',
                'h3' => 'Heading 3',
                'h4' => 'Heading 4',
                'h5' => 'Heading 5',
                'h6' => 'Heading 6',
                'unorderedlist' => 'Unordered List',
                'orderedlist' => 'Ordered List',
            ])
            ->sort();
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
        Augmentor::addExtension('btsAttrs', new Attrs($options));
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

        Bard::appendConfigField('bts_menu', [
            'display' => __('Style Menu'),
            'instructions' => __('Which style options should be moved to the style menu'),
            'type' => 'select',
            'default' => [],
            'multiple' => true,
            'options' => $options['menuOptions'],
        ]);

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
