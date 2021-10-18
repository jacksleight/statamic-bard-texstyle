<?php
namespace JackSleight\BardParagraphStyle\Nodes;

class Paragraph extends \ProseMirrorToHtml\Nodes\Paragraph
{
    public function tag()
    {
        $tag = [
            [
                'tag'   => parent::tag(),
                'attrs' => [],
            ],
        ];
        if (isset($this->node->attrs->class)) {
            $tag[0]['attrs']['class'] = $this->node->attrs->class;
        }
        return $tag;
    }
}
