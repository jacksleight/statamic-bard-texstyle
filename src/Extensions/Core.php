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
        $styleExts = $this->options['styleExts'];
        $classExts = $this->options['classExts'];

        $defaults = $defaults[$defaultsKey] ?? null;

        return collect($classExts)
            ->map(function ($ext) use ($store, $attr, $styles, $styleExts, $defaults) {
                return [
                    'types' => [$ext],
                    'attributes' => [
                        $attr => [
                            'parseHTML' => function ($DOMNode) use ($store, $styles, $styleExts, $ext) {
                                if (in_array($ext, $styleExts)) {
                                    $value = $DOMNode->getAttribute('class');
                                    if ($store === 'key') {
                                        $style = Arr::first($styles, fn ($style) => $style['type'] === $ext && $style['class'] === $value);
                                        $value = $style ? $style['key'] : null;
                                    }
                                } else {
                                    $value = null;
                                }

                                return $value;
                            },
                            'renderHTML' => function ($attributes) use ($store, $attr, $styles, $defaults, $styleExts, $ext) {
                                if (in_array($ext, $styleExts)) {
                                    $class = $attributes->{$attr} ?? null;
                                    if ($store === 'key') {
                                        $class = $styles[$class]['class'] ?? null;
                                    }
                                } else {
                                    $class = null;
                                }
                                if (! $class) {
                                    $class = $ext === 'heading'
                                        ? ($defaults[$ext.$attributes->level]['class'] ?? null)
                                        : ($defaults[$ext]['class'] ?? null);
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
