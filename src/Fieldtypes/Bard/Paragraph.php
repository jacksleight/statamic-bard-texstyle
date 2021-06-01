<?php
namespace JackSleight\BardParagraphStyle\Fieldtypes\Bard;

use ProseMirrorToHtml\Nodes\Paragraph as DefaultParagraph;

class Paragraph extends DefaultParagraph
{
    protected $nodeType = 'paragraph';

    public function tag()
    {
        return [
            [
                'tag'   => $this->tagName,
                'attrs' => $this->node->attrs ?? [],
            ],
        ];
    }
}
