<?php

namespace JackSleight\StatamicBardTexstyle\Extensions;

use Tiptap\Core\Extension;

class Attributes extends Extension
{
    public static $name = 'btsAttributes';

    public function addOptions()
    {
        return [
            'attributes' => null,
        ];
    }

    public function addGlobalAttributes()
    {
        $attributes = $this->options['attributes'];

        return collect($attributes)
            ->map(function ($group) {
                return [
                    'types' => [$group['type']],
                    'attributes' => collect($group['attrs'])
                        ->filter(fn ($attr) => $attr['extra'])
                        ->map(function ($attr) {
                            return [
                                'default' => $attr['default'] ?? null,
                                'rendered' => $attr['rendered'] ?? true,
                            ];
                        })
                        ->all(),
                ];
            })
            ->all();
    }
}
