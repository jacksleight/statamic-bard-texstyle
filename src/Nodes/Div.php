<?php

namespace JackSleight\StatamicBardTexstyle\Nodes;

use Tiptap\Core\Node;

class Div extends Node
{
    public static $name = 'bts_div';

    public function renderHTML($node, $HTMLAttributes = [])
    {
        return ['div', $HTMLAttributes, 0];
    }
}
