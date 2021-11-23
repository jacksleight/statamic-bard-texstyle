<?php

namespace JackSleight\StatamicBardTextstyle\Nodes;

class Span extends \ProseMirrorToHtml\Marks\Mark
{
    protected $nodeType = 'bts_span';
    protected $tagName = 'span';

    public function tag()
    {
        $attrs = [];

        if (isset($this->mark->attrs->class)) {
            $attrs['class'] = $this->mark->attrs->class;
        }

        return [
            [
                'tag'   => $this->tagName,
                'attrs' => $attrs,
            ],
        ];
    }
}
