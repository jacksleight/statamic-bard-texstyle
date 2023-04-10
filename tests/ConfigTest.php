<?php

use JackSleight\StatamicBardTexstyle\OptionManager;

uses(Tests\TestCase::class);

it('resolves free edition config', function () {
    $options = (new OptionManager([
        'styles' => [
            'title' => [
                'type' => 'heading',
                'level' => 1,
                'name' => 'Title',
                'ident' => 'T',
                'icon' => null,
                'class' => 'title',
                'cp_css' => 'font-size: 1.5em',
                'cp_badge' => false,
            ],
            'twocolumns' => [
                'type' => 'div',
                'name' => 'Two Columns',
                'ident' => '❙ ❙',
                'icon' => null,
                'class' => 'two-columns',
                'cp_css' => 'column-count: 2; column-gap: 16px',
                'cp_badge' => true,
            ],
        ],
        'default_classes' => [
            'standard' => [
                'heading' => [
                    1 => 'heading-1',
                ],
                'paragraph' => 'paragraph',
            ],
        ],
        'attributes' => [
            'heading' => [
                'id' => [
                    'type' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                ],
            ],
        ],
        'store' => 'class',
    ], false))->resolve();

    expect($options)->toEqual([
        'major' => 3,
        'pro' => false,
        'store' => 'class',
        'attr' => 'class',
        'styles' => [
            'title' => [
                'type' => 'heading',
                'level' => 1,
                'name' => 'Title',
                'ident' => 'T',
                'icon' => null,
                'class' => 'title',
                'cp_css' => 'font-size: 1.5em',
                'cp_badge' => false,
                'key' => 'title',
            ],
        ],
        'types' => [
            'heading' => [
                'key' => 'heading',
            ],
        ],
        'attributes' => [],
        'styleTypes' => [
            'heading',
        ],
        'classTypes' => [
            'heading',
            'paragraph',
        ],
        'attributeTypes' => [],
        'defaultClasses' => [
            'standard' => [
                'heading' => [
                    1 => 'heading-1',
                ],
                'paragraph' => 'paragraph',
            ],
        ],
        'styleOptions' => [],
    ]);
});

it('resolves pro edition config', function () {
    $options = (new OptionManager([
        'styles' => [
            'title' => [
                'type' => 'heading',
                'level' => 1,
                'name' => 'Title',
                'ident' => 'T',
                'icon' => null,
                'class' => 'title',
                'cp_css' => 'font-size: 1.5em',
                'cp_badge' => false,
            ],
            'twocolumns' => [
                'type' => 'div',
                'name' => 'Two Columns',
                'ident' => '❙ ❙',
                'icon' => null,
                'class' => 'two-columns',
                'cp_css' => 'column-count: 2; column-gap: 16px',
                'cp_badge' => true,
            ],
        ],
        'default_classes' => [
            'standard' => [
                'heading' => [
                    1 => 'heading-1',
                ],
                'paragraph' => 'paragraph',
            ],
        ],
        'attributes' => [
            'heading' => [
                'id' => [
                    'type' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                ],
            ],
        ],
        'store' => 'class',
    ], true))->resolve();

    expect($options)->toEqual([
        'major' => 3,
        'pro' => true,
        'store' => 'class',
        'attr' => 'class',
        'styles' => [
            'title' => [
                'type' => 'heading',
                'level' => 1,
                'name' => 'Title',
                'ident' => 'T',
                'icon' => null,
                'class' => 'title',
                'cp_css' => 'font-size: 1.5em',
                'cp_badge' => false,
                'key' => 'title',
            ],
            'twocolumns' => [
                'type' => 'btsDiv',
                'name' => 'Two Columns',
                'ident' => '❙ ❙',
                'icon' => null,
                'class' => 'two-columns',
                'cp_css' => 'column-count: 2; column-gap: 16px',
                'cp_badge' => true,
                'key' => 'twocolumns',
            ],
        ],
        'types' => [
            'heading' => [
                'key' => 'heading',
            ],
            'btsDiv' => [
                'key' => 'btsDiv',
            ],
        ],
        'attributes' => [
            'heading' => [
                'id' => [
                    'type' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                ],
            ],
        ],
        'styleTypes' => [
            'heading',
            'btsDiv',
        ],
        'classTypes' => [
            'heading',
            'btsDiv',
            'paragraph',
        ],
        'attributeTypes' => [
            'heading',
        ],
        'defaultClasses' => [
            'standard' => [
                'heading' => [
                    1 => 'heading-1',
                ],
                'paragraph' => 'paragraph',
            ],
        ],
        'styleOptions' => [
            'h1' => 'Heading 1',
            'h2' => 'Heading 2',
            'h3' => 'Heading 3',
            'h4' => 'Heading 4',
            'h5' => 'Heading 5',
            'h6' => 'Heading 6',
            'orderedlist' => 'Ordered List',
            'title' => 'Title',
            'unorderedlist' => 'Unordered List',
        ],
    ]);
});

it('resolves legacy paragraph style config', function () {
    $options = (new OptionManager([
        'styles' => [
            [
                'name' => 'Introduction',
                'ident' => 'I',
                'class' => 'intro',
                'button' => 'introduction',
                'cp_css' => 'font-size: 1.25em',
            ],
        ],
    ], false))->resolve();

    expect($options['styles'])->toEqual([
        'introduction' => [
            'name' => 'Introduction',
            'ident' => 'I',
            'class' => 'intro',
            'button' => 'introduction',
            'cp_css' => 'font-size: 1.25em',
            'type' => 'paragraph',
            'key' => 'introduction',
        ],
    ]);
});

it('resolves legacy default_classes config', function () {
    $options = (new OptionManager([
        'default_classes' => [
            'heading' => [
                1 => 'heading-1',
            ],
            'paragraph' => 'paragraph',
        ],
    ], false))->resolve();

    expect($options['defaultClasses'])->toEqual([
        'standard' => [
            'heading' => [
                1 => 'heading-1',
            ],
            'paragraph' => 'paragraph',
        ],
    ]);
});
