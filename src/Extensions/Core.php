<?php

namespace JackSleight\StatamicBardTexstyle\Extensions;

use Tiptap\Core\Extension;

class Core extends Extension
{
    public static $name = 'bts_core';

    public function addOptions()
    {
        return [
            'attr'  => null,
            'types' => [],
        ];
    }

    public function addGlobalAttributes()
    {
        $attr  = $this->options['attr'];
        $types = $this->options['types'];
        return [
            [
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
            ],
        ];
    }
}
