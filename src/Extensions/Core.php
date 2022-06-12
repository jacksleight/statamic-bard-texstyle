<?php

namespace JackSleight\StatamicBardTexstyle\Extensions;

use Tiptap\Core\Extension;

class Core extends Extension
{
    public static $name = 'bts_core';

    public function addOptions()
    {
        return [
            'store'    => null,
            'attr'     => null,
            'styles'   => [],
            'types'    => [],
            'defaults' => [],
        ];
    }

    public function addGlobalAttributes()
    {
        $store     = $this->options['store'];
        $attr      = $this->options['attr'];
        $styles    = $this->options['styles'];
        $defaults  = $this->options['defaults'];
        $coreTypes = $this->options['coreTypes'];
        $allTypes  = $this->options['allTypes'];

        $attrs = [];
        foreach ($allTypes as $type) {
            $attrs[] = [
                'types' => [$type],
                'attributes' => [
                    $attr => [
                        'renderHTML' => function ($attributes) use ($store, $attr, $styles, $defaults, $coreTypes, $type) {
                            if ($coreTypes->contains($type)) {
                                $class = $attributes->{$attr} ?? null;
                                if ($store === 'key') {
                                    $class = $styles[$class]['class'] ?? null;
                                }
                            } else {
                                $class = null;
                            }
                            if (!$class) {
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

        return $attrs;
    }
}
