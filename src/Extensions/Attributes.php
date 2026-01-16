<?php

namespace JackSleight\StatamicBardTexstyle\Extensions;

use Tiptap\Core\Extension;
use Tiptap\Utils\InlineStyle;

class Attributes extends Extension
{
    public static $name = 'btsAttributes';

    public function addOptions()
    {
        return [
            'attributes' => null,
        ];
    }

    public function addGlobalAttributes()
    {
        $attributes = $this->options['attributes'];

        $renders = [
            'true' => function ($name, $attr) {
                return [
                    'rendered' => true,
                ];
            },
            'false' => function ($name, $attr) {
                return [
                    'rendered' => false,
                ];
            },
            'class' => function ($name, $attr) {
                return [
                    'renderHTML' => fn ($attributes) => isset($attributes->{$name})
                        ? ['class' => $attributes->{$name}]
                        : null,
                ];
            },
            'style' => function ($name, $attr) {
                return [
                    'parseHTML' => fn ($DOMNode) => InlineStyle::getAttribute($DOMNode, (string) str($name)->replace('_', '-')->kebab()),
                    'renderHTML' => fn ($attributes) => isset($attributes->{$name})
                        ? ['style' => str($name)->replace('_', '-')->kebab().": {$attributes->{$name}}"]
                        : null,
                ];
            },
        ];

        $merged = collect($attributes)
            ->groupBy('ext')
            ->map(fn ($group) => $group->flatMap(fn ($item) => $item['attrs'])->all())
            ->all();

        return collect($merged)
            ->map(function ($attrs, $ext) use ($renders) {
                return [
                    'types' => [$ext],
                    'attributes' => collect($attrs)
                        ->filter(fn ($attr) => $attr['extra'])
                        ->map(function ($attr, $name) use ($renders) {
                            $key = is_bool($attr['rendered'])
                                ? ($attr['rendered'] ? 'true' : 'false')
                                : $attr['rendered'];

                            return array_merge([
                                'default' => $attr['default'] ?? null,
                            ], $renders[$key]($name, $attr) ?? $renders['true']($name, $attr));
                        })
                        ->all(),
                ];
            })
            ->all();
    }
}
