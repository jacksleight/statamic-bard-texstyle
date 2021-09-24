<?php
namespace JackSleight\BardParagraphStyle\Nodes;

class Paragraph extends \ProseMirrorToHtml\Nodes\Paragraph
{
    public function tag()
    {
        return [
            [
                'tag'   => parent::tag(),
                'attrs' => [
                    'class' => $this->node->attrs->class ?? null,
                ],
            ],
        ];
    }
}
