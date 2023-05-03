<?php

namespace JackSleight\StatamicBardTexstyle\Support;

use Statamic\Support\Str;

class Helpers
{
    public static function itemToType($item)
    {
        $typeMap = [
            'btsSpan' => 'span',
            'btsDiv' => 'div',
            'bulletList' => 'unordered_list',
        ];

        return $item['type'] === 'heading'
            ? $item['type'].'_'.$item['attrs']->level
            : $typeMap[$item['type']] ?? Str::snake($item['type']);
    }
}
