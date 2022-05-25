<?php

namespace JackSleight\StatamicBardTexstyle\Marks;

use Tiptap\Core\Mark;

class Span extends Mark
{
    public static $name = 'bts_span';

    // @todo
    // public function parseHTML()
    // {}

    public function renderHTML($mark, $HTMLAttributes = [])
    {
        return ['span', $HTMLAttributes, 0];
    }
}
