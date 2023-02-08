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
        foreach ($attributes as $type => $attrs) {
            $globals[] = [
                'types' => [$type],
                'attributes' => collect($attrs)
                    ->filter(fn ($attr) => $attr['extra'])
                    ->map(function ($attr) {
                        return [
                            'default' => $attr['default'] ?? null,
                            'rendered' => $attr['rendered'] ?? true,
                        ];
                    })
                    ->all(),
            ];
        }

        return $globals;
    }
}
