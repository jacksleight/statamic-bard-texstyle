<?php

namespace JackSleight\StatamicBardTexstyle\Extensions;

use Tiptap\Core\Extension;

class Core extends Extension
{
    public static $name = 'bts_core';

    public function addOptions()
    {
        return [
            'attr'     => null,
            'types'    => [],
            'defaults' => [],
        ];
    }

    public function addGlobalAttributes()
    {
        $attr     = $this->options['attr'];
        $types    = $this->options['types'];
        $defaults = $this->options['defaults'];

        $attrs = [[
            'types' => $types,
            'attributes' => [
                $attr => [
                    'parseHTML' => fn ($DOMNode) => $DOMNode->getAttribute('class'),
                    'renderHTML' => function ($attributes) use ($attr) {
                        return ($attributes->{$attr} ?? null) ? [
                            'class' => $attributes->{$attr}
                        ] : [];
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
                            return $class ? [
                                'class' => $class
                            ] : [];
                        },
                    ],
                ],
            ];
        }

        return $attrs;
    }
}
