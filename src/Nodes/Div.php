<?php

namespace JackSleight\StatamicBardTexstyle\Nodes;

use JackSleight\StatamicBardMutator\Support\Traits\MutatesNode;
use ProseMirrorToHtml\Nodes\Node;

class Div extends Node
{
    use MutatesNode;

    protected $nodeType = 'bts_div';
    protected $tagName = 'div';
}
