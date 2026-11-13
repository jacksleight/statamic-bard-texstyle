<?php

namespace JackSleight\StatamicBardTexstyle;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
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

        $stylesConfig = $this->normalizeGroups(data_get($this->config, 'styles') ?? [], 'styles');
        $styles = $this->resolveStyles($stylesConfig);
        $stylesExts = $this->resolveStylesExts($styles);
        $stylesMenuOptions = $this->resolveStylesMenuOptions($styles);
        $stylesGroups = $this->resolveStylesGroups($stylesConfig, $styles);

        $attributes = $this->resolveAttributes();
        $attributesExts = $this->resolveAttributesExts($attributes);

        $pinsConfig = $this->normalizeGroups(data_get($this->config, 'pins') ?? [], 'pins');
        $pins = $this->resolvePins($pinsConfig);
        $pinsPath = data_get($this->config, 'pins_path', 'partials/pins');
        $pinsMenuOptions = $this->resolvePinsMenuOptions($pins);
        $pinsGroups = $this->resolvePinsGroups($pinsConfig, $pins);

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
            'stylesGroups' => $stylesGroups,
            'attributes' => $attributes,
            'attributesExts' => $attributesExts,
            'pins' => $pins,
            'pinsPath' => $pinsPath,
            'pinsMenuOptions' => $pinsMenuOptions,
            'pinsGroups' => $pinsGroups,
            'defaults' => $defaults,
            'defaultsClassExts' => $defaultsClassExts,
            'defaultsCpExts' => $defaultsCpExts,
            'classExts' => $classExts,
        ];
    }

    protected function normalizeGroups(array $items, string $key): array
    {
        $first = Arr::first($items);

        if (! is_array($first) || ! array_key_exists($key, $first)) {
            $items = [
                'main' => [
                    $key => $items,
                ],
            ];
        }

        return $items;
    }

    protected function flattenGroups(array $groups, string $key): Collection
    {
        return collect($groups)
            ->map(fn ($group, $handle) => collect($group[$key] ?? [])
                ->filter(fn ($item) => is_array($item))
                ->map(fn ($item) => [...$item, 'group' => $handle])
                ->all())
            ->collapse();
    }

    protected function resolveStyles(array $groups): array
    {
        // @todo Throw an error for array styles keyed with a standard button name (h1, unorderedlist etc.) in the next major version
        $styles = $this->flattenGroups($groups, 'styles')
            ->map(fn ($style) => [
                ...Arr::except($style, 'name'),
                'display' => $style['display'] ?? $style['name'] ?? null,
            ])
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
            ->map(fn ($style) => $style['display'])
            ->merge($this->types->all()
                ->where('button')
                ->mapWithKeys(fn ($type) => [$type['button'] => $type['display']]))
            ->sort()
            ->all();
    }

    protected function resolveStylesGroups(array $groups, array $styles): array
    {
        if (! $this->pro) {
            return [];
        }

        $buttons = $this->types->all()
            ->where('button')
            ->pluck('button');

        $groups = collect($groups)
            ->map(fn ($group, $handle) => [
                'handle' => $handle,
                'display' => $group['display'] ?? null,
                'items' => collect($group['styles'] ?? [])
                    ->reject(fn ($style) => is_array($style))
                    ->keys()
                    ->intersect($buttons)
                    ->merge(collect($styles)->where('group', $handle)->keys())
                    ->values()
                    ->all(),
            ])
            ->values();

        $standard = $buttons
            ->diff($groups->pluck('items')->flatten())
            ->values()
            ->all();

        if ($groups->count() === 1) {
            return [
                [
                    ...$groups->first(),
                    'items' => [...$standard, ...$groups->first()['items']],
                ],
            ];
        }

        return $groups
            ->when($standard, fn ($groups) => $groups->prepend([
                'handle' => 'standard',
                'display' => 'Standard',
                'items' => $standard,
            ]))
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

    protected function resolvePins(array $groups): array
    {
        if (! $this->pro) {
            return [];
        }

        $pins = $this->flattenGroups($groups, 'pins')
            ->map(fn ($pin, $handle) => $this->types->validatePin(array_merge($pin, [
                'handle' => $handle,
                'fields' => $fields = collect($pin['fields'])
                    ->map(fn ($field, $handle) => $this->resolvePinField($field, $handle))
                    ->values()
                    ->all(),
                'publishFields' => (new Fields($fields))->toPublishArray(),
            ])))
            ->filter()
            ->all();

        return $pins;
    }

    protected function resolvePinField($field, $handle): array
    {
        if (is_int($handle)) {
            return $field;
        }

        if (isset($field['field'])) {
            return [
                'handle' => $handle,
                'field' => $field['field'],
                'config' => Arr::except($field, 'field'),
            ];
        }

        return [
            'handle' => $handle,
            'field' => [
                ...$field,
                'preview' => $field['preview'] ?? false,
            ],
        ];
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

    protected function resolvePinsGroups(array $groups, array $pins): array
    {
        if (! $this->pro) {
            return [];
        }

        return collect($groups)
            ->map(fn ($group, $handle) => [
                'handle' => $handle,
                'display' => $group['display'] ?? null,
                'instructions' => $group['instructions'] ?? null,
                'icon' => $group['icon'] ?? 'folder',
                'items' => collect($pins)
                    ->where('group', $handle)
                    ->keys()
                    ->all(),
            ])
            ->values()
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
