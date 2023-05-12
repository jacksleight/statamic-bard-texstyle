<?php

namespace JackSleight\StatamicBardTexstyle;

use Statamic\Support\Arr;
use Statamic\Support\Str;

class OptionManager
{
    protected $exts = [
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

    protected $attributeExts = [
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

    protected $stylesMenuExts = [
        'btsSpan',
        'bulletList',
        'heading',
        'link',
        'orderedList',
        'paragraph',
    ];

    protected $defaultClassExts = [
        'blockquote',
        'bold',
        'bulletList',
        'code',
        'codeBlock',
        'heading',
        'horizontalRule',
        'image',
        'italic',
        'link',
        'listItem',
        'orderedList',
        'paragraph',
        'strike',
        'subscript',
        'superscript',
        'table',
        'tableCell',
        'tableHeader',
        'tableRow',
        'underline',
    ];

    protected $defaultCpExts = [
        'bulletList',
        'heading',
        'orderedList',
        'paragraph',
    ];

    // @deprecated
    protected $extTypes = [
        'bulletList' => 'unordered_list',
    ];

    protected $typeExts = [
        'span' => 'btsSpan',
        'div' => 'btsDiv',
        'unordered_list' => 'bulletList',
        'heading_1' => 'heading',
        'heading_2' => 'heading',
        'heading_3' => 'heading',
        'heading_4' => 'heading',
        'heading_5' => 'heading',
        'heading_6' => 'heading',
    ];

    protected $typeArgs = [
        'heading_1' => ['level' => 1],
        'heading_2' => ['level' => 2],
        'heading_3' => ['level' => 3],
        'heading_4' => ['level' => 4],
        'heading_5' => ['level' => 5],
        'heading_6' => ['level' => 6],
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
        $attr = $store === 'class' ? 'class' : 'bts_key'; // @deprecated: Should be btsKey in next major version

        $defaults = $this->resolveDefaults();
        [$defaultClassExts, $defaultCpExts] = $this->resolveDefaultExts($defaults);

        [$styles, $exts] = $this->resolveStylesAndExts();
        $styleExts = $this->resolveStyleExts($styles);
        $classExts = $this->resolveClassExts($styleExts, collect($defaultClassExts)->flatten()->unique()->all());

        $attributes = $this->resolveAttributes($classExts);
        $attributeExts = $this->resolveAttributeExts($attributes);

        $stylesMenuOptions = $this->resolveStylesMenuOptions($styles);

        return [
            'pro' => $this->pro,
            'store' => $store,
            'attr' => $attr,
            'styles' => $styles,
            'exts' => $exts,
            'attributes' => $attributes,
            'defaults' => $defaults,
            'styleExts' => $styleExts,
            'classExts' => $classExts,
            'attributeExts' => $attributeExts,
            'defaultClassExts' => $defaultClassExts,
            'defaultCpExts' => $defaultCpExts,
            'stylesMenuOptions' => $stylesMenuOptions,
        ];
    }

    protected function resolveStylesAndExts()
    {
        $styles = data_get($this->config, 'styles', []);
        $styles = $this->normalizeStyles($styles);

        $exts = collect($this->exts)
            ->map(fn ($ext, $name) => array_merge($ext, ['name' => $name]))
            ->filter(fn ($ext) => ! $ext['pro'] || $this->pro)
            ->map(fn ($ext) => Arr::except($ext, 'pro'))
            ->all();

        $usedExts = [];
        $styles = collect($styles)
            ->map(fn ($style, $key) => array_merge($style, [
                'ext' => $this->typeExts[$style['type']] ?? Str::camel($style['type']),
                'args' => $this->typeArgs[$style['type']] ?? [],
                'key' => $key,
            ]))
            ->filter(fn ($style) => isset($exts[$style['ext']]))
            ->each(function ($style) use (&$usedExts) {
                $usedExts[$style['ext']] = true;
            })
            ->all();

        $exts = collect($exts)
            ->filter(fn ($ext, $key) => isset($usedExts[$key]))
            ->all();

        return [$styles, $exts];
    }

    protected function resolveAttributes($classExts)
    {
        if (! $this->pro) {
            return [];
        }

        $attributes = data_get($this->config, 'attributes', []);
        $attributes = $this->normalizeAttributes($attributes);
        $attributes = $this->expandAttributes($attributes);

        $attributes = collect($attributes)
            ->map(fn ($attrs, $type) => array_merge([
                'attrs' => $attrs,
                'type' => $type,
                'ext' => $this->typeExts[$type] ?? Str::camel($type),
            ]))
            ->filter(fn ($group) => array_key_exists($group['ext'], $this->attributeExts))
            ->map(function ($group, $type) use ($classExts) {
                $group['attrs'] = collect($group['attrs'])->map(function ($attr, $name) use ($type, $classExts) {
                    return array_merge($attr, [
                        'extra' => ! in_array($name, $this->attributeExts[$type] ?? []) &&
                            ($name !== 'class' || ! in_array($type, $classExts)),
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

        if (! array_key_exists('standard', $defaults)) {
            $defaults = [
                'standard' => $defaults,
            ];
        }

        $defaults = $this->normalizeDefaults($defaults);

        $defaults = collect($defaults)
            ->map(function ($group) {
                // @todo This should expand out to include the key in the root array
                return collect($group)
                    ->map(fn ($dflt, $type) => array_merge($dflt, [
                        'type' => $type,
                        'ext' => $this->typeExts[$type] ?? Str::camel($type),
                    ]))
                    ->all();
            })
            ->all();

        return $defaults;
    }

    protected function resolveDefaultExts($defaults)
    {
        $classExts = collect($defaults)
            ->map(function ($group) {
                return collect($group)
                    ->filter(fn ($dflt) => in_array($dflt['ext'], $this->defaultClassExts))
                    ->filter(fn ($dflt) => $dflt['class'] ?? null)
                    ->pluck('ext')
                    ->unique()
                    ->values()
                    ->all();
            })
            ->all();

        $cpExts = collect($defaults)
            ->map(function ($group) {
                return collect($group)
                    ->filter(fn ($dflt) => in_array($dflt['ext'], $this->defaultCpExts))
                    ->filter(fn ($dflt) => ($dflt['cp_css'] ?? null) || ($dflt['cp_badge'] ?? false))
                    ->pluck('ext')
                    ->unique()
                    ->values()
                    ->all();
            })
            ->all();

        return [$classExts, $cpExts];
    }

    protected function resolveStyleExts($styles)
    {
        return collect($styles)
            ->pluck('ext')
            ->unique()
            ->values()
            ->all();
    }

    protected function resolveClassExts($styleExts, $defaultExts)
    {
        return collect($styleExts)
            ->merge($defaultExts)
            ->unique()
            ->values()
            ->all();
    }

    protected function resolveAttributeExts($attributes)
    {
        return collect($attributes)
            ->pluck('ext')
            ->unique()
            ->values()
            ->all();
    }

    protected function resolveStylesMenuOptions($styles)
    {
        if (! $this->pro) {
            return [];
        }

        return collect($styles)
            ->filter(fn ($style) => in_array($style['ext'], $this->stylesMenuExts))
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
                $attributes['heading_'.$i] = array_merge(
                    $attributes['heading'],
                    $attributes['heading_'.$i] ?? []
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
        return collect($defaults)
            ->map(function ($groups) {
                return collect($groups)
                    ->mapWithKeys(fn ($group, $ext) => [
                        $this->extTypes[$ext] ?? Str::snake($ext) => $group,
                    ])
                    ->all();
            })
            ->map(function ($groups) {
                if (array_key_exists('heading', $groups)) {
                    foreach ($groups['heading'] as $level => $class) {
                        $groups['heading_'.$level] = $class;
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
        return collect($styles)
            ->map(fn ($style, $key) => array_merge($style, [
                'type' => $this->extTypes[$style['type']] ?? Str::snake($style['type']),
            ]))
            ->map(function ($style) {
                if ($style['type'] === 'heading') {
                    $style['type'] = 'heading_'.$style['level'];
                    unset($style['level']);
                }

                return $style;
            })
            ->all();
    }

    /**
     * @deprecated
     */
    protected function normalizeAttributes($attributes)
    {
        return collect($attributes)
            ->mapWithKeys(fn ($group, $ext) => [
                $this->extTypes[$ext] ?? Str::snake($ext) => $group,
            ])
            ->all();
    }
}
