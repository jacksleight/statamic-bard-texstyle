<?php

use JackSleight\StatamicBardTexstyle\OptionManager;

uses(Tests\TestCase::class);

it('resolves full options', function () {
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
                    'cp_badge' => true,
                ],
                'paragraph' => [
                    'class' => 'paragraph',
                    'cp_css' => 'color: red',
                ],
            ],
            'article' => [
                'heading_1' => [
                    'class' => 'heading-1',
                ],
            ],
        ],
        'store' => 'class',
    ], true))->resolve();

    expect($options['types'])->toBeObject();
    expect($options['pro'])->toBeTrue();
    expect($options['store'])->toEqual('class');
    expect($options['attr'])->toEqual('class');
    expect($options['styles'])->toEqual([
        'title' => [
            'ext' => 'heading',
            'name' => 'Title',
            'ident' => 'T',
            'icon' => null,
            'class' => 'title',
            'cp_css' => 'font-size: 1.5em',
            'cp_badge' => false,
            'args' => ['level' => 1],
            'type' => 'heading_1',
            'key' => 'title',
        ],
        'twocolumns' => [
            'ext' => 'btsDiv',
            'name' => 'Two Columns',
            'ident' => '❙ ❙',
            'icon' => null,
            'class' => 'two-columns',
            'cp_css' => 'column-count: 2; column-gap: 16px',
            'cp_badge' => true,
            'args' => [],
            'type' => 'div',
            'key' => 'twocolumns',
        ],
    ]);
    expect($options['exts'])->toEqual([
        'heading' => [
            'name' => 'heading',
        ],
        'btsDiv' => [
            'name' => 'btsDiv',
        ],
    ]);
    expect($options['attributes'])->toEqual([
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
            'ext' => 'heading',
            'type' => 'heading_1',
        ],
    ]);
    expect($options['defaults'])->toEqual([
        'standard' => [
            'heading_1' => [
                'class' => 'heading-1',
                'cp_badge' => true,
                'ext' => 'heading',
                'type' => 'heading_1',
            ],
            'paragraph' => [
                'class' => 'paragraph',
                'cp_css' => 'color: red',
                'ext' => 'paragraph',
                'type' => 'paragraph',
            ],
        ],
        'article' => [
            'heading_1' => [
                'class' => 'heading-1',
                'ext' => 'heading',
                'type' => 'heading_1',
            ],
        ],
    ]);
    expect($options['styleExts'])->toEqual([
        'heading',
        'btsDiv',
    ]);
    expect($options['classExts'])->toEqual([
        'heading',
        'btsDiv',
        'paragraph',
    ]);
    expect($options['attributeExts'])->toEqual([
        'heading',
    ]);
    expect($options['defaultClassExts'])->toEqual([
        'standard' => [
            'heading',
            'paragraph',
        ],
        'article' => [
            'heading',
        ],
    ]);
    expect($options['defaultCpExts'])->toEqual([
        'standard' => [
            'heading',
            'paragraph',
        ],
        'article' => [],
    ]);
    expect($options['stylesMenuOptions'])->toEqual([
        'h1' => 'Heading 1',
        'h2' => 'Heading 2',
        'h3' => 'Heading 3',
        'h4' => 'Heading 4',
        'h5' => 'Heading 5',
        'h6' => 'Heading 6',
        'orderedlist' => 'Ordered List',
        'title' => 'Title',
        'unorderedlist' => 'Unordered List',
    ]);
});

it('resolves free options', function () {
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
    expect($options['attributeExts'])->toBeEmpty();
});

it('resolves unsupported options', function () {
    $options = (new OptionManager([
        'styles' => [
            'button' => [
                'type' => 'link',
                'name' => 'Button',
                'cp_badge' => true,
            ],
            'other' => [
                'type' => 'table',
            ],
        ],
        'attributes' => [
            'span' => [
                'id' => [
                    'type' => 'text',
                    'display' => 'ID',
                ],
            ],
        ],
        'defaults' => [
            'list_item' => [
                'cp_badge' => true,
            ],
            'bold' => [
                'cp_css' => 'color: red',
            ],
        ],
    ], true))->resolve();

    expect($options['styles']['button']['cp_badge'] ?? null)->toBeFalse();
    expect($options['styles']['other'] ?? null)->toBeNull();
    expect($options['attributes']['span'] ?? null)->toBeNull();
    expect($options['defaults']['standard']['list_item']['cp_badge'] ?? null)->toBeFalse();
    expect($options['defaults']['standard']['bold']['cp_css'] ?? null)->toBeNull();
});

it('normalizes legacy style options', function () {
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
            'ext' => 'heading',
            'name' => 'Title',
            'ident' => 'T',
            'class' => 'title',
            'args' => ['level' => 1],
            'type' => 'heading_1',
            'key' => 'title',
        ],
        'square_list' => [
            'ext' => 'bulletList',
            'name' => 'Square List',
            'ident' => 'S',
            'class' => 'square-list',
            'args' => [],
            'type' => 'unordered_list',
            'key' => 'square_list',
        ],
    ]);
});

it('normalizes legacy defaults options', function () {
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
                'ext' => 'heading',
                'type' => 'heading_1',
            ],
            'heading_2' => [
                'class' => 'heading-2',
                'ext' => 'heading',
                'type' => 'heading_2',
            ],
            'paragraph' => [
                'class' => 'paragraph',
                'ext' => 'paragraph',
                'type' => 'paragraph',
            ],
            'table_cell' => [
                'class' => 'cell',
                'ext' => 'tableCell',
                'type' => 'table_cell',
            ],
        ],
    ]);
});

it('normalizes legacy attributes options', function () {
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
            'ext' => 'tableCell',
            'type' => 'table_cell',
        ],
    ]);
});

it('expands header attributes options', function () {
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
            'ext' => 'heading',
            'type' => 'heading_1',
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
            'ext' => 'heading',
            'type' => 'heading_2',
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
            'ext' => 'heading',
            'type' => 'heading_3',
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
            'ext' => 'heading',
            'type' => 'heading_4',
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
            'ext' => 'heading',
            'type' => 'heading_5',
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
            'ext' => 'heading',
            'type' => 'heading_6',
        ],
    ]);
});
