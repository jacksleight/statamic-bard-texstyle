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
                    'renderHTML' => fn ($attributes) => ['class' => $attributes->{$name}],
                ];
            },
            'style' => function ($name, $attr) {
                return [
                    'parseHTML' => fn ($DOMNode) => InlineStyle::getAttribute($DOMNode, $name),
                    'renderHTML' => fn ($attributes) => ['style' => str($name)->replace('_', '-')->kebab().": {$attributes->{$name}}"],
                ];
            },
        ];

        return collect($attributes)
            ->map(function ($attrs, $type) use ($renders) {
                return [
                    'types' => [$type],
                    'attributes' => collect($attrs)
                        ->filter(fn ($attr) => $attr['extra'])
                        ->map(function ($attr, $name) use ($renders) {
                            $key = is_bool($attr['rendered'])
                                ? ($attr['rendered'] ? 'true' : 'false')
                                : $attr['rendered'];

                            return array_merge([
                                'default' => $attr['default'] ?? null,
                            ], $renders[$key]($name, $attr) ?? $attr['rendered']['true']($name, $attr));
                        })
                        ->all(),
                ];
            })
            ->all();
    }
}
