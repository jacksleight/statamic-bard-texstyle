<?php

namespace JackSleight\StatamicBardTexstyle\Marks;

use Tiptap\Core\Mark;

class Span extends Mark
{
    public static $name = 'btsSpan';

    public function parseHTML()
    {
        return [
            [
                'tag' => 'span',
            ],
        ];
    }

    public function renderHTML($mark, $HTMLAttributes = [])
    {
        return ['span', $HTMLAttributes, 0];
    }
}
