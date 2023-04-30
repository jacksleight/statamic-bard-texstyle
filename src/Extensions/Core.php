<?php

namespace JackSleight\StatamicBardTexstyle\Extensions;

use Statamic\Support\Arr;
use Tiptap\Core\Extension;

class Core extends Extension
{
    public static $name = 'btsCore';

    public function addOptions()
    {
        return [
            'store' => null,
            'attr' => null,
            'styles' => [],
            'types' => [],
            'defaults' => [],
            'defaultsKey' => null,
        ];
    }

    public function addGlobalAttributes()
    {
        $store = $this->options['store'];
        $attr = $this->options['attr'];
        $styles = $this->options['styles'];
        $defaults = $this->options['defaults'];
        $defaultsKey = $this->options['defaultsKey'];
        $styleTypes = $this->options['styleTypes'];
        $classTypes = $this->options['classTypes'];

        $defaults = $defaults[$defaultsKey] ?? null;

        return collect($classTypes)
            ->map(function ($type) use ($store, $attr, $styles, $styleTypes, $defaults) {
                return [
                    'types' => [$type],
                    'attributes' => [
                        $attr => [
                            'parseHTML' => function ($DOMNode) use ($store, $styles, $styleTypes, $type) {
                                if (in_array($type, $styleTypes)) {
                                    $value = $DOMNode->getAttribute('class');
                                    if ($store === 'key') {
                                        $style = Arr::first($styles, fn ($style) => $style['type'] === $type && $style['class'] === $value);
                                        $value = $style ? $style['key'] : null;
                                    }
                                } else {
                                    $value = null;
                                }

                                return $value;
                            },
                            'renderHTML' => function ($attributes) use ($store, $attr, $styles, $defaults, $styleTypes, $type) {
                                if (in_array($type, $styleTypes)) {
                                    $class = $attributes->{$attr} ?? null;
                                    if ($store === 'key') {
                                        $class = $styles[$class]['class'] ?? null;
                                    }
                                } else {
                                    $class = null;
                                }
                                if (! $class) {
                                    $class = $type === 'heading'
                                        ? ($defaults[$type.$attributes->level]['class'] ?? null)
                                        : ($defaults[$type]['class'] ?? null);
                                }

                                return $class ? ['class' => $class] : [];
                            },
                        ],
                    ],
                ];
            })
            ->all();
    }
}
