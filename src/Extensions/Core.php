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
        $store    = $this->options['store'];
        $attr     = $this->options['attr'];
        $styles   = $this->options['styles'];
        $types    = $this->options['types'];
        $defaults = $this->options['defaults'];

        $attrs = [[
            'types' => $types,
            'attributes' => [
                $attr => [
                    'parseHTML' => fn ($DOMNode) => $DOMNode->getAttribute('class'),
                    'renderHTML' => function ($attributes) use ($store, $attr, $styles) {
                        $class = $attributes->{$attr} ?? null;
                        if ($store === 'key') {
                            $class = $styles[$class]['class'] ?? null;
                        }
                        return $class ? ['class' => $class] : [];
                    },
                ],
            ],
        ]];
        
        foreach ($defaults as $type => $class) {
            $attrs[] = [
                'types' => [$type],
                'attributes' => [
                    'default-class' => [
                        'renderHTML' => function ($attributes) use ($type, $class) {
                            if ($type === 'heading') {
                                $class = $class[$attributes->level] ?? null;
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
