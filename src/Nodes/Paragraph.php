<?php

namespace JackSleight\StatamicBardTextstyle\Nodes;

class Paragraph extends \ProseMirrorToHtml\Nodes\Node
{
    protected $nodeType = 'bts_paragraph';
    protected $tagName = 'p';

    public function tag()
    {
        $attrs = [];

        if (isset($this->node->attrs->class)) {
            $attrs['class'] = $this->node->attrs->class;
        }

        return [
            [
                'tag'   => $this->tagName,
                'attrs' => $attrs,
            ],
        ];
    }
}
