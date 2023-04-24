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
            '1' => function ($name, $attr) {
                return [
                    'rendered' => true,
                ];
            },
            '' => function ($name, $attr) {
                return [
                    'rendered' => false,
                ];
            },
            'class' => function ($name, $attr) {
                return [
                    // 'parseHTML' => fn ($DOMNode) => InlineStyle::getAttribute($DOMNode, $name),
                    'renderHTML' => fn ($attributes) => ['class' => $attributes->{$name}],
                ];
            },
            'style' => function ($name, $attr) {
                return [
                    'parseHTML' => fn ($DOMNode) => InlineStyle::getAttribute($DOMNode, $name),
                    'renderHTML' => fn ($attributes) => ['style' => "{$name}: {$attributes->{$name}}"],
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
                            return array_merge([
                                'default' => $attr['default'] ?? null,
                            ], $renders[(string) $attr['rendered']]($name, $attr) ?? $attr['rendered']['1']($name, $attr));
                        })
                        ->all(),
                ];
            })
            ->all();
    }
}
