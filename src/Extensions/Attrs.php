<?php

namespace JackSleight\StatamicBardTexstyle\Extensions;

use Tiptap\Core\Extension;

class Attrs extends Extension
{
    public static $name = 'btsAttrs';

    public function addOptions()
    {
        return [
            'attributes' => null,
        ];
    }

    public function addGlobalAttributes()
    {
        $attributes = $this->options['attributes'];

        $globals = [];
        foreach ($attributes as $extension => $attrs) {
            $globals[] = [
                'types' => [$extension],
                'attributes' => collect($attrs)
                    ->map(function ($attr, $name) {
                        return [
                            'parseHTML' => function ($DOMNode) {
                            },
                            'renderHTML' => function ($attributes) use ($name) {
                                return [$name => $attributes->{$name}];
                            },
                        ];
                    })
                    ->all(),
            ];
        }

        return $globals;
    }
}
