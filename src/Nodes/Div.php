<?php

namespace JackSleight\StatamicBardTexstyle\Nodes;

use Tiptap\Core\Node;

class Div extends Node
{
    public static $name = 'btsDiv';

    public function parseHTML()
    {
        return [
            [
                'tag' => 'div',
            ],
        ];
    }

    public function renderHTML($node, $HTMLAttributes = [])
    {
        return ['div', $HTMLAttributes, 0];
    }
}
