<?php

namespace JackSleight\StatamicBardTexstyle;

use Statamic\Statamic;
use Statamic\Support\Arr;
use Statamic\Support\Str;

class OptionManager
{
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

    protected $config;

    protected $pro;

    public function __construct($config, $pro)
    {
        $this->config = $config;
        $this->pro = $pro;
    }

    public function resolve()
    {
        $store = data_get($this->config, 'store', 'class');
        $attr = $store === 'class' ? 'class' : 'bts_key'; // @deprecated: Should this be btsKey in next major version?

        $defaults = $this->resolveDefaults();
        [$styles, $types] = $this->resolveStylesAndTypes();
        $styleTypes = $this->resolveStyleTypes($styles, $types);
        $classTypes = $this->resolveClassTypes($styleTypes, $defaults);

        $attributes = $this->resolveAttributes($classTypes);
        $attributeTypes = $this->resolveAttributeTypes($attributes);

        $styleOptions = $this->resolveStyleOptions($styles);

        $version = Statamic::version();
        $major = $version !== 'dev-master'
            ? (int) Str::before($version, '.')
            : 100;

        return [
            'major' => $major,
            'pro' => $this->pro,
            'store' => $store,
            'attr' => $attr,
            'styles' => $styles,
            'types' => $types,
            'attributes' => $attributes,
            'defaults' => $defaults,
            'styleTypes' => $styleTypes,
            'classTypes' => $classTypes,
            'attributeTypes' => $attributeTypes,
            'styleOptions' => $styleOptions,
        ];
    }

    protected function resolveStylesAndTypes()
    {
        $styles = data_get($this->config, 'styles', []);
        $styles = $this->normalizeStyles($styles);

        $types = collect($this->types)
            ->map(fn ($type, $key) => array_merge($type, ['key' => $key]))
            ->filter(fn ($type) => ! $type['pro'] || $this->pro)
            ->map(fn ($type) => Arr::except($type, 'pro'))
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

    protected function resolveAttributes($classTypes)
    {
        if (! $this->pro) {
            return [];
        }

        $attributes = data_get($this->config, 'attributes', []);

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

    protected function resolveDefaults()
    {
        // @deprecated: default_classes
        $defaults = data_get($this->config, 'defaults') ?? data_get($this->config, 'default_classes') ?? [];
        $defaults = $this->normalizeDefaults($defaults);

        return $defaults;
    }

    protected function resolveStyleTypes($styles, $types)
    {
        return collect($styles)
            ->pluck('type')
            ->unique()
            ->values()
            ->all();
    }

    protected function resolveClassTypes($styleTypes, $defaults)
    {
        return collect($styleTypes)
            ->merge(collect($defaults)->flatMap(fn ($value) => $value)->keys())
            ->unique()
            ->values()
            ->all();
    }

    protected function resolveAttributeTypes($attributes)
    {
        return collect($attributes)
            ->keys()
            ->all();
    }

    protected function resolveStyleOptions($styles)
    {
        if (! $this->pro) {
            return [];
        }

        return collect($styles)
            ->filter(fn ($style) => in_array($style['type'], $this->styleTypes))
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
            ->sort()
            ->all();
    }

    /**
     * @deprecated
     */
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
