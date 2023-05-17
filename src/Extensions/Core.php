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
        $types = $this->options['types'];
        $store = $this->options['store'];
        $attr = $this->options['attr'];
        $styles = $this->options['styles'];
        $defaults = $this->options['defaults'];
        $defaultsKey = $this->options['defaultsKey'];
        $stylesExts = $this->options['stylesExts'];
        $classExts = $this->options['classExts'];

        $insDefaults = $defaults[$defaultsKey] ?? null;

        return collect($classExts)
            ->map(function ($ext) use ($types, $store, $attr, $styles, $stylesExts, $insDefaults) {
                return [
                    'types' => [$ext],
                    'attributes' => [
                        $attr => [
                            'parseHTML' => function ($DOMNode) use ($store, $styles, $stylesExts, $ext) {
                                if (in_array($ext, $stylesExts)) {
                                    $value = $DOMNode->getAttribute('class');
                                    if ($value === '') {
                                        $value = null;
                                    }
                                    if ($store === 'key') {
                                        $style = Arr::first($styles, fn ($style) => $style['type'] === $ext && $style['class'] === $value);
                                        $value = $style ? $style['key'] : null;
                                    }
                                } else {
                                    $value = null;
                                }

                                return $value;
                            },
                            'renderHTML' => function ($attributes) use ($types, $store, $attr, $styles, $insDefaults, $stylesExts, $ext) {
                                if (in_array($ext, $stylesExts)) {
                                    $class = $attributes->{$attr} ?? null;
                                    if ($store === 'key') {
                                        $class = $styles[$class]['class'] ?? null;
                                    }
                                } else {
                                    $class = null;
                                }
                                if (! $class) {
                                    $class = $insDefaults['dflts'][$types->getByItem([
                                        'type' => $ext,
                                        'attrs' => $attributes,
                                    ])['name'] ?? null]['class'] ?? null;
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
