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

    protected $typeAliases = [
        'span' => 'btsSpan',
        'div' => 'btsDiv',
        'heading1' => 'heading',
        'heading2' => 'heading',
        'heading3' => 'heading',
        'heading4' => 'heading',
        'heading5' => 'heading',
        'heading6' => 'heading',
    ];

    protected $typeArgs = [
        'heading1' => ['level' => 1],
        'heading2' => ['level' => 2],
        'heading3' => ['level' => 3],
        'heading4' => ['level' => 4],
        'heading5' => ['level' => 5],
        'heading6' => ['level' => 6],
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
        $defaultsTypes = $this->resolveDefaultsTypes($defaults);

        [$styles, $types] = $this->resolveStylesAndTypes();
        $styleTypes = $this->resolveStyleTypes($styles);
        $classTypes = $this->resolveClassTypes($styleTypes, $defaultsTypes);

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
            'defaultsTypes' => $defaultsTypes,
            'styleOptions' => $styleOptions,
        ];
    }

    protected function resolveStylesAndTypes()
    {
        $styles = data_get($this->config, 'styles', []);
        $styles = $this->normalizeStyles($styles);

        $types = collect($this->types)
            ->map(fn ($type, $key) => array_merge($type, ['type' => $key]))
            ->filter(fn ($type) => ! $type['pro'] || $this->pro)
            ->map(fn ($type) => Arr::except($type, 'pro'))
            ->all();

        $usedTypes = [];
        $styles = collect($styles)
            ->map(fn ($style, $key) => array_merge($style, [
                'type' => $this->typeAliases[$style['type']] ?? $style['type'],
                'args' => $this->typeArgs[$style['type']] ?? [],
                'kind' => $style['type'],
                'key' => $key,
            ]))
            ->filter(fn ($style) => isset($types[$style['type']]))
            ->each(function ($style) use (&$usedTypes) {
                $usedTypes[$style['type']] = true;
            })
            ->map(function ($style) {
                if (is_string($style['cp_css'] ?? null)) {
                    $style['cp_css'] = ['&' => $style['cp_css']];
                }

                return $style;
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
        $attributes = $this->expandAttributes($attributes);

        $attributes = collect($attributes)
            ->map(fn ($attrs, $type) => array_merge([
                'attrs' => $attrs,
                'type' => $this->typeAliases[$type] ?? $type,
                'kind' => $type,
            ]))
            ->filter(fn ($group) => array_key_exists($group['type'], $this->attributeTypes))
            ->map(function ($group, $type) use ($classTypes) {
                $group['attrs'] = collect($group['attrs'])->map(function ($attr, $name) use ($type, $classTypes) {
                    return array_merge($attr, [
                        'extra' => ! in_array($name, $this->attributeTypes[$type] ?? []) &&
                            ($name !== 'class' || ! in_array($type, $classTypes)),
                    ]);
                })->all();

                return $group;
            })
            ->all();

        return $attributes;
    }

    protected function resolveDefaults()
    {
        // @deprecated: default_classes
        $defaults = data_get($this->config, 'defaults') ?? data_get($this->config, 'default_classes') ?? [];
        $defaults = $this->normalizeDefaults($defaults);

        $defaults = collect($defaults)
            ->map(function ($groups) {
                return collect($groups)
                    ->map(fn ($group, $type) => array_merge($group, [
                        'type' => $this->typeAliases[$type] ?? $type,
                        'kind' => $type,
                    ]))
                    ->all();
            })
            ->all();

        return $defaults;
    }

    protected function resolveDefaultsTypes($defaults)
    {
        return collect($defaults)
            ->flatMap(fn ($groups) => collect($groups)->pluck('type'))
            ->unique()
            ->values()
            ->all();
    }

    protected function resolveStyleTypes($styles)
    {
        return collect($styles)
            ->pluck('type')
            ->unique()
            ->values()
            ->all();
    }

    protected function resolveClassTypes($styleTypes, $defaultsTypes)
    {
        return collect($styleTypes)
            ->merge($defaultsTypes)
            ->unique()
            ->values()
            ->all();
    }

    protected function resolveAttributeTypes($attributes)
    {
        return collect($attributes)
            ->pluck('type')
            ->unique()
            ->values()
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

    protected function expandAttributes($attributes)
    {
        if (array_key_exists('heading', $attributes)) {
            for ($i = 1; $i <= 6; $i++) {
                $attributes['heading'.$i] = array_merge(
                    $attributes['heading'],
                    $attributes['heading'.$i] ?? []
                );
            }
            unset($attributes['heading']);
        }

        return $attributes;
    }

    /**
     * @deprecated
     */
    protected function normalizeDefaults($defaults)
    {
        if (! array_key_exists('standard', $defaults)) {
            $defaults = [
                'standard' => $defaults,
            ];
        }

        return collect($defaults)
            ->map(function ($groups) {
                if (array_key_exists('heading', $groups)) {
                    foreach ($groups['heading'] as $level => $class) {
                        $groups['heading'.$level] = $class;
                    }
                    unset($groups['heading']);
                }

                return $groups;
            })
            ->map(function ($groups) {
                return collect($groups)
                    ->map(function ($group) {
                        if (is_string($group)) {
                            $group = ['class' => $group];
                        }

                        return $group;
                    })
                    ->all();
            })
            ->all();
    }

    /**
     * @deprecated
     */
    protected function normalizeStyles($styles)
    {
        if (! Arr::isAssoc($styles)) {
            $styles = $this->normalizeParagraphStyleStyles($styles);
        }

        return collect($styles)
            ->map(function ($style) {
                if ($style['type'] === 'heading') {
                    $style['type'] = 'heading'.$style['level'];
                    unset($style['level']);
                }

                return $style;
            })
            ->all();

        return $styles;
    }

    /**
     * @deprecated
     */
    protected function normalizeParagraphStyleStyles($styles)
    {
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
