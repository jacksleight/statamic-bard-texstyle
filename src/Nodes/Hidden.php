<?php

namespace JackSleight\StatamicBardTexstyle\Nodes;

use Tiptap\Core\Node;

class Hidden extends Node
{
    public static $name = 'btsHidden';

    public function renderHTML($node, $HTMLAttributes = [])
    {
        return ['content' => ''];
    }
}
