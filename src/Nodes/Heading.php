<?php

namespace JackSleight\StatamicBardTextstyle\Nodes;

class Heading extends \ProseMirrorToHtml\Nodes\Node
{
    protected $nodeType = 'bts_heading';
    protected $tagName = 'h';

    public function tag()
    {
        $attrs = [];

        if (isset($this->node->attrs->class)) {
            $attrs['class'] = $this->node->attrs->class;
        }

        return [
            [
                'tag'   => "{$this->tagnName}{$this->node->attrs->level}",
                'attrs' => $attrs,
            ],
        ];
    }
}
