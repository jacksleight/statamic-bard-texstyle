<?php

use JackSleight\StatamicBardTexstyle\OptionManager;

uses(Tests\TestCase::class);

it('resolves full config', function () {
    $options = (new OptionManager([
        'styles' => [
            'title' => [
                'type' => 'heading_1',
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
        'attributes' => [
            'heading_1' => [
                'id' => [
                    'type' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                ],
            ],
        ],
        'defaults' => [
            'standard' => [
                'heading_1' => [
                    'class' => 'heading-1',
                ],
                'paragraph' => [
                    'class' => 'paragraph',
                ],
            ],
        ],
        'store' => 'class',
    ], true))->resolve();

    expect($options)->toEqual([
        'pro' => true,
        'store' => 'class',
        'attr' => 'class',
        'styles' => [
            'title' => [
                'type' => 'heading',
                'name' => 'Title',
                'ident' => 'T',
                'icon' => null,
                'class' => 'title',
                'cp_css' => 'font-size: 1.5em',
                'cp_badge' => false,
                'args' => ['level' => 1],
                'kind' => 'heading_1',
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
                'args' => [],
                'kind' => 'div',
                'key' => 'twocolumns',
            ],
        ],
        'types' => [
            'heading' => [
                'type' => 'heading',
            ],
            'btsDiv' => [
                'type' => 'btsDiv',
            ],
        ],
        'attributes' => [
            'heading_1' => [
                'attrs' => [
                    'id' => [
                        'type' => 'text',
                        'display' => 'ID',
                        'default' => null,
                        'rendered' => true,
                        'extra' => true,
                    ],
                ],
                'type' => 'heading',
                'kind' => 'heading_1',
            ],
        ],
        'defaults' => [
            'standard' => [
                'heading_1' => [
                    'class' => 'heading-1',
                    'type' => 'heading',
                    'kind' => 'heading_1',
                ],
                'paragraph' => [
                    'class' => 'paragraph',
                    'type' => 'paragraph',
                    'kind' => 'paragraph',
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
        'defaultsTypes' => [
            'heading',
            'paragraph',
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

it('resolves free config', function () {
    $options = (new OptionManager([
        'styles' => [
            'title' => [
                'type' => 'heading_1',
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
        'defaults' => [
            'standard' => [
                'heading_1' => [
                    'class' => 'heading-1',
                ],
                'paragraph' => [
                    'class' => 'paragraph',
                ],
            ],
        ],
        'store' => 'class',
    ], false))->resolve();

    expect($options['pro'])->toEqual(false);
    expect($options['styles'])->toHaveCount(1)->toHaveKeys(['title']);
    expect($options['attributes'])->toBeEmpty();
    expect($options['attributeTypes'])->toBeEmpty();
});

it('normalizes legacy style config', function () {
    $options = (new OptionManager([
        'styles' => [
            'title' => [
                'type' => 'heading',
                'level' => 1,
                'name' => 'Title',
                'ident' => 'T',
                'class' => 'title',
            ],
            'square_list' => [
                'type' => 'bulletList',
                'name' => 'Square List',
                'ident' => 'S',
                'class' => 'square-list',
            ],
        ],
    ], false))->resolve();

    expect($options['styles'] ?? null)->toEqual([
        'title' => [
            'type' => 'heading',
            'name' => 'Title',
            'ident' => 'T',
            'class' => 'title',
            'args' => ['level' => 1],
            'kind' => 'heading_1',
            'key' => 'title',
        ],
        'square_list' => [
            'type' => 'bulletList',
            'name' => 'Square List',
            'ident' => 'S',
            'class' => 'square-list',
            'args' => [],
            'kind' => 'unordered_list',
            'key' => 'square_list',
        ],
    ]);
});

it('normalizes legacy defaults config', function () {
    $options = (new OptionManager([
        'default_classes' => [
            'heading' => [
                1 => 'heading-1',
                2 => 'heading-2',
            ],
            'paragraph' => 'paragraph',
            'tableCell' => 'cell',
        ],
    ], false))->resolve();

    expect($options['defaults'] ?? null)->toEqual([
        'standard' => [
            'heading_1' => [
                'class' => 'heading-1',
                'type' => 'heading',
                'kind' => 'heading_1',
            ],
            'heading_2' => [
                'class' => 'heading-2',
                'type' => 'heading',
                'kind' => 'heading_2',
            ],
            'paragraph' => [
                'class' => 'paragraph',
                'type' => 'paragraph',
                'kind' => 'paragraph',
            ],
            'table_cell' => [
                'class' => 'cell',
                'type' => 'tableCell',
                'kind' => 'table_cell',
            ],
        ],
    ]);
});

it('normalizes legacy attributes config', function () {
    $options = (new OptionManager([
        'attributes' => [
            'tableCell' => [
                'rowspan' => [
                    'type' => 'text',
                    'display' => 'Rowspan',
                    'default' => null,
                    'rendered' => true,
                ],
            ],
        ],
    ], true))->resolve();

    expect($options['attributes'] ?? null)->toEqual([
        'table_cell' => [
            'attrs' => [
                'rowspan' => [
                    'type' => 'text',
                    'display' => 'Rowspan',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                ],
            ],
            'type' => 'tableCell',
            'kind' => 'table_cell',
        ],
    ]);
});

it('expands header attributes config', function () {
    $options = (new OptionManager([
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
    ], true))->resolve();

    expect($options['attributes'] ?? null)->toEqual([
        'heading_1' => [
            'attrs' => [
                'id' => [
                    'type' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                ],
            ],
            'type' => 'heading',
            'kind' => 'heading_1',
        ],
        'heading_2' => [
            'attrs' => [
                'id' => [
                    'type' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                ],
            ],
            'type' => 'heading',
            'kind' => 'heading_2',
        ],
        'heading_3' => [
            'attrs' => [
                'id' => [
                    'type' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                ],
            ],
            'type' => 'heading',
            'kind' => 'heading_3',
        ],
        'heading_4' => [
            'attrs' => [
                'id' => [
                    'type' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                ],
            ],
            'type' => 'heading',
            'kind' => 'heading_4',
        ],
        'heading_5' => [
            'attrs' => [
                'id' => [
                    'type' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                ],
            ],
            'type' => 'heading',
            'kind' => 'heading_5',
        ],
        'heading_6' => [
            'attrs' => [
                'id' => [
                    'type' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                ],
            ],
            'type' => 'heading',
            'kind' => 'heading_6',
        ],
    ]);
});
