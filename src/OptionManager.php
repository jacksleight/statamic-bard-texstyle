<?php

namespace JackSleight\StatamicBardTexstyle;

use Statamic\Fields\Fields;

class OptionManager
{
    protected $config;

    protected $types;

    protected $pro;

    public function __construct(array $config, bool $pro)
    {
        $this->config = $config;
        $this->pro = $pro;
    }

    public function resolve(): array
    {
        $this->types = new TypeManager($this->pro);

        $store = data_get($this->config, 'store', 'class');
        $attr = $store === 'class' ? 'class' : 'bts_key'; // @deprecated: Should be btsKey one day, maybe

        $styles = $this->resolveStyles();
        $stylesExts = $this->resolveStylesExts($styles);
        $stylesMenuOptions = $this->resolveStylesMenuOptions($styles);

        $attributes = $this->resolveAttributes();
        $attributesExts = $this->resolveAttributesExts($attributes);

        $pins = $this->resolvePins();
        $pinsPath = data_get($this->config, 'pins_path', 'partials/pins');
        $pinsMenuOptions = $this->resolvePinsMenuOptions($pins);

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
            'pins' => $pins,
            'pinsPath' => $pinsPath,
            'pinsMenuOptions' => $pinsMenuOptions,
            'defaults' => $defaults,
            'defaultsClassExts' => $defaultsClassExts,
            'defaultsCpExts' => $defaultsCpExts,
            'classExts' => $classExts,
        ];
    }

    protected function resolveStyles(): array
    {
        $styles = data_get($this->config, 'styles', []);

        $styles = collect($styles)
            ->map(fn ($style, $key) => array_merge($style, [
                'type' => $this->types->name($style['type'] ?? 'paragraph'),
            ]))
            ->map(fn ($style, $key) => $this->types->validateStyle(array_merge($style, [
                'ext' => $this->types->get($style['type'])['extension'],
                'key' => $key,
            ])))
            ->filter()
            ->all();

        return $styles;
    }

    protected function resolveStylesExts(array $styles): array
    {
        return collect($styles)
            ->pluck('ext')
            ->unique()
            ->values()
            ->all();
    }

    protected function resolveStylesMenuOptions(array $styles): array
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

    protected function resolveAttributes(): array
    {
        if (! $this->pro) {
            return [];
        }

        $attributes = data_get($this->config, 'attributes', []);
        $attributes = $this->expandHeadings($attributes);

        $attributes = collect($attributes)
            ->mapWithKeys(fn ($attrs, $type) => [
                $this->types->name($type) => $attrs,
            ])
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

    protected function resolvePins(): array
    {
        if (! $this->pro) {
            return [];
        }

        $pins = data_get($this->config, 'pins', []);

        $pins = collect($pins)
            ->map(fn ($pin, $handle) => $this->types->validatePin(array_merge($pin, [
                'handle' => $handle,
                'fields' => $fields = collect($pin['fields'])
                    ->map(fn ($field, $handle) => [
                        'handle' => $handle,
                        'field' => [
                            ...$field,
                            'preview' => $field['preview'] ?? false,
                        ],
                    ])
                    ->values()
                    ->all(),
                'publishFields' => (new Fields($fields))->toPublishArray(),
            ])))
            ->filter()
            ->all();

        return $pins;
    }

    protected function resolvePinsMenuOptions(array $pins): array
    {
        if (! $this->pro) {
            return [];
        }

        return collect($pins)
            ->filter()
            ->map(fn ($style) => $style['display'])
            ->sort()
            ->all();
    }

    protected function resolveAttributesExts(array $attributes): array
    {
        return collect($attributes)
            ->pluck('ext')
            ->unique()
            ->values()
            ->all();
    }

    protected function resolveDefaults(): array
    {
        $defaults = data_get($this->config, 'defaults') ?? [];

        if (! array_key_exists('standard', $defaults)) {
            $defaults = [
                'standard' => $defaults,
            ];
        }

        $defaults = collect($defaults)
            ->map(function ($dflts) {
                return collect($dflts)
                    ->mapWithKeys(fn ($dflt, $type) => [
                        $this->types->name($type) => $dflt,
                    ])
                    ->all();
            })
            ->map(fn ($dflts) => $this->expandHeadings($dflts))
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

    protected function resolveDefaultsExts(array $defaults): array
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

    protected function resolveClassExts(array $stylesExts, array $defaultExts): array
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

    protected function expandHeadings(array $items): array
    {
        if (array_key_exists('heading', $items)) {
            for ($i = 1; $i <= 6; $i++) {
                $items['heading_'.$i] = array_merge(
                    $items['heading'],
                    $items['heading_'.$i] ?? []
                );
            }
            unset($items['heading']);
        }

        return $items;
    }
}
