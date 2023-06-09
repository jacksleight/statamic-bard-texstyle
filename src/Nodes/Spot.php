<?php

namespace JackSleight\StatamicBardTexstyle\Nodes;

use Tiptap\Core\Node;

class Spot extends Node
{
    public static $name = 'btsSpot';

    public function renderHTML($node, $HTMLAttributes = [])
    {
        $view = "spots.{$node->attrs->type}";
        $params = (array) $node->attrs->values;

        return ['content' => view($view, $params)->render()];
    }
}
