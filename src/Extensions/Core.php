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
        ];
    }

    public function addGlobalAttributes()
    {
        $store = $this->options['store'];
        $attr = $this->options['attr'];
        $styles = $this->options['styles'];
        $defaults = $this->options['defaults'];
        $styleTypes = $this->options['styleTypes'];
        $classTypes = $this->options['classTypes'];

        $globals = [];
        foreach ($classTypes as $type) {
            $globals[] = [
                'types' => [$type],
                'attributes' => [
                    $attr => [
                        'parseHTML' => function ($DOMNode) use ($store, $styles, $styleTypes, $type) {
                            if (in_array($type, $styleTypes)) {
                                $value = $DOMNode->getAttribute('class');
                                if ($store === 'key') {
                                    $style = Arr::first($styles, fn ($style) => $style['type'] === ([
                                        'btsSpan' => 'span',
                                        'btsDiv' => 'div',
                                    ][$type] ?? $type) &&
                                        $style['class'] === $value
                                    );
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
                                    ? ($defaults[$type][$attributes->level] ?? null)
                                    : ($defaults[$type] ?? null);
                            }

                            return $class ? ['class' => $class] : [];
                        },
                    ],
                ],
            ];
        }

        return $globals;
    }
}
