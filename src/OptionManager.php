<?php

namespace JackSleight\StatamicBardTexstyle;

use Statamic\Fieldtypes\Sets;

class OptionManager
{
    protected $config;

    protected $types;

    protected $pro;

    public function __construct($config, $pro)
    {
        $this->config = $config;
        $this->pro = $pro;
    }

    public function resolve()
    {
        $this->types = new TypeManager($this->pro);

        $store = data_get($this->config, 'store', 'class');
        $attr = $store === 'class' ? 'class' : 'bts_key'; // @deprecated: Should be btsKey in next major version

        $styles = $this->resolveStyles();
        $stylesExts = $this->resolveStylesExts($styles);
        $stylesMenuOptions = $this->resolveStylesMenuOptions($styles);

        $attributes = $this->resolveAttributes();
        $attributesExts = $this->resolveAttributesExts($attributes);

        $spots = $this->resolveSpots();
        $spotsMenuOptions = $this->resolveSpotsMenuOptions($spots);

        $defaults = $this->resolveDefaults();
        [$defaultsClassExts, $defaultsCpExts] = $this->resolveDefaultsExts($defaults);

        $classExts = $this->resolveClassExts($stylesExts, $defaultsClassExts);

        return [
            'types' => $this->types,
            'pro' => $this->pro,
            'store' => $store,
            'attr' => $attr,
            'styles' => $styles,
            'stylesExts' => $stylesExts,
            'stylesMenuOptions' => $stylesMenuOptions,
            'attributes' => $attributes,
            'attributesExts' => $attributesExts,
            'spots' => $spots,
            'spotsMenuOptions' => $spotsMenuOptions,
            'defaults' => $defaults,
            'defaultsClassExts' => $defaultsClassExts,
            'defaultsCpExts' => $defaultsCpExts,
            'classExts' => $classExts,
        ];
    }

    protected function resolveStyles()
    {
        $styles = data_get($this->config, 'styles', []);
        $styles = $this->normalizeStyles($styles);

        $styles = collect($styles)
            ->map(fn ($style, $key) => $this->types->validateStyle(array_merge($style, [
                'ext' => $this->types->get($style['type'])['extension'],
                'key' => $key,
            ])))
            ->filter()
            ->all();

        return $styles;
    }

    protected function resolveStylesExts($styles)
    {
        return collect($styles)
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
            ->map(fn ($style) => $this->types->validateStylesMenuOption($style))
            ->filter()
            ->map(fn ($style) => $style['name'])
            ->merge($this->types->all()
                ->where('button')
                ->mapWithKeys(fn ($type) => [$type['button'] => $type['display']]))
            ->sort()
            ->all();
    }

    protected function resolveAttributes()
    {
        if (! $this->pro) {
            return [];
        }

        $attributes = data_get($this->config, 'attributes', []);
        $attributes = $this->normalizeAttributes($attributes);

        if (array_key_exists('heading', $attributes)) {
            for ($i = 1; $i <= 6; $i++) {
                $attributes['heading_'.$i] = array_merge(
                    $attributes['heading'],
                    $attributes['heading_'.$i] ?? []
                );
            }
            unset($attributes['heading']);
        }

        $attributes = collect($attributes)
            ->map(fn ($attrs, $type) => [
                'type' => $type,
                'ext' => $this->types->get($type)['extension'],
                'attrs' => collect($attrs)
                    ->map(function ($attr, $handle) use ($type) {
                        return $this->types->validateAttribute(array_merge($attr, [
                            'type' => $type,
                            'handle' => $handle,
                            'field' => $attr['type'],
                        ]));
                    })
                    ->filter()
                    ->all(),
            ])
            ->where(fn ($group) => count($group['attrs']))
            ->all();

        return $attributes;
    }

    protected function resolveSpots()
    {
        if (! $this->pro) {
            return [];
        }

        $spots = data_get($this->config, 'spots', []);

        $spots = collect($spots)
            ->map(fn ($spot, $handle) => $this->types->validateSpot(array_merge($spot, [
                'handle' => $handle,
                'fields' => collect($spot['fields'])
                    ->map(fn ($field, $handle) => [
                        'handle' => $handle,
                        'field' => $field,
                    ])
                    ->all(),
            ])))
            ->filter()
            ->all();

        $spots = collect((new Sets())->preProcessConfig($spots)[0]['sets'])
            ->mapWithKeys(fn ($spot) => [$spot['handle'] => array_merge($spot, [
                'fields' => collect($spot['fields'])
                    ->mapWithKeys(fn ($field) => [$field['handle'] => [
                        'handle' => $field['handle'],
                        'field' => $field,
                    ]])
                    ->all(),
            ])])
            ->all();

        return $spots;
    }

    protected function resolveSpotsMenuOptions($spots)
    {
        if (! $this->pro) {
            return [];
        }

        return collect($spots)
            ->filter()
            ->map(fn ($style) => $style['display'])
            ->sort()
            ->all();
    }

    protected function resolveAttributesExts($attributes)
    {
        return collect($attributes)
            ->pluck('ext')
            ->unique()
            ->values()
            ->all();
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
            ->map(fn ($dflts, $key) => [
                'key' => $key,
                'dflts' => collect($dflts)
                    ->map(fn ($dflt, $type) => $this->types->validateDefault(array_merge($dflt, [
                        'key' => $key,
                        'type' => $type,
                        'ext' => $this->types->get($type)['extension'],
                    ])))
                    ->filter()
                    ->all(),
            ])
            ->where(fn ($group) => count($group['dflts']))
            ->all();

        return $defaults;
    }

    protected function resolveDefaultsExts($defaults)
    {
        $classExts = collect($defaults)
            ->map(function ($group) {
                return collect($group['dflts'])
                    ->filter(fn ($dflt) => $dflt['class'] ?? null)
                    ->pluck('ext')
                    ->unique()
                    ->values()
                    ->all();
            })
            ->all();

        $cpExts = collect($defaults)
            ->map(function ($group) {
                return collect($group['dflts'])
                    ->filter(fn ($dflt) => ($dflt['cp_css'] ?? null) || ($dflt['cp_badge'] ?? false))
                    ->pluck('ext')
                    ->unique()
                    ->values()
                    ->all();
            })
            ->all();

        return [$classExts, $cpExts];
    }

    protected function resolveClassExts($stylesExts, $defaultExts)
    {
        return collect($stylesExts)
            ->merge(collect($defaultExts)
                ->flatten()
                ->unique()
                ->all())
            ->unique()
            ->values()
            ->all();
    }

    /**
     * @deprecated
     */
    protected function normalizeDefaults($defaults)
    {
        return collect($defaults)
            ->map(function ($groups) {
                return collect($groups)
                    ->mapWithKeys(fn ($group, $type) => [
                        $this->types->name($type) => $group, // @todo move to main when removing deprecated
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
                'type' => $this->types->name($style['type'] ?? 'paragraph'),
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
            ->mapWithKeys(fn ($group, $type) => [
                $this->types->name($type) => $group,  // @todo move to main when removing deprecated
            ])
            ->all();
    }
}
