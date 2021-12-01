<?php

namespace JackSleight\StatamicBardTexstyle\Marks;

use JackSleight\StatamicBardMutator\Support\Traits\MutatesMark;
use ProseMirrorToHtml\Marks\Mark;

class Span extends Mark
{
    use MutatesMark;

    protected $markType = 'bts_span';
    protected $tagName = 'span';
}
