<?php

namespace JackSleight\StatamicBardTexstyle\Nodes;

use Statamic\Support\Arr;
use Tiptap\Core\Node;

class Spot extends Node
{
    public static $name = 'btsSpot';

    public function renderHTML($node, $HTMLAttributes = [])
    {
        $view = "spots.{$node->attrs->values->type}";
        $params = Arr::except((array) $node->attrs->values, 'type');

        return ['content' => view($view, $params)->render()];
    }
}
