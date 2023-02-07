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
        $styleExtensions = $this->options['styleExtensions'];
        $classExtensions = $this->options['classExtensions'];

        $globals = [];
        foreach ($classExtensions as $type) {
            $globals[] = [
                'types' => [$type],
                'attributes' => [
                    $attr => [
                        'parseHTML' => function ($DOMNode) use ($store, $styles, $styleExtensions, $type) {
                            if (in_array($type, $styleExtensions)) {
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
                        'renderHTML' => function ($attributes) use ($store, $attr, $styles, $defaults, $styleExtensions, $type) {
                            if (in_array($type, $styleExtensions)) {
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
