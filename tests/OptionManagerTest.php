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
            'type' => 'div',
            'key' => 'twocolumns',
        ],
    ]);
    expect($options['attributes'])->toEqual([
        'heading_1' => [
            'ext' => 'heading',
            'type' => 'heading_1',
            'attrs' => [
                'id' => [
                    'type' => 'heading_1',
                    'handle' => 'id',
                    'field' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                    'styles' => [],
                ],
            ],
        ],
    ]);
    expect($options['defaults'])->toEqual([
        'standard' => [
            'key' => 'standard',
            'dflts' => [
                'heading_1' => [
                    'class' => 'heading-1',
                    'cp_css' => null,
                    'cp_badge' => true,
                    'ext' => 'heading',
                    'type' => 'heading_1',
                    'key' => 'standard',
                ],
                'paragraph' => [
                    'class' => 'paragraph',
                    'cp_css' => 'color: red',
                    'cp_badge' => false,
                    'ext' => 'paragraph',
                    'type' => 'paragraph',
                    'key' => 'standard',
                ],
            ],
        ],
        'article' => [
            'key' => 'article',
            'dflts' => [
                'heading_1' => [
                    'class' => 'heading-1',
                    'cp_css' => null,
                    'cp_badge' => false,
                    'ext' => 'heading',
                    'type' => 'heading_1',
                    'key' => 'article',
                ],
            ],
        ],
    ]);
    expect($options['stylesExts'])->toEqual([
        'heading',
        'btsDiv',
    ]);
    expect($options['classExts'])->toEqual([
        'heading',
        'btsDiv',
        'paragraph',
    ]);
    expect($options['attributesExts'])->toEqual([
        'heading',
    ]);
    expect($options['defaultsClassExts'])->toEqual([
        'standard' => [
            'heading',
            'paragraph',
        ],
        'article' => [
            'heading',
        ],
    ]);
    expect($options['defaultsCpExts'])->toEqual([
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
        'bts_paragraph' => 'Paragraph',
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
        'store' => 'class',
    ], false))->resolve();

    expect($options['pro'])->toEqual(false);
    expect($options['styles'])->toHaveCount(2)->toHaveKeys(['title']);
    expect($options['attributes'])->toBeEmpty();
    expect($options['attributesExts'])->toBeEmpty();
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
    expect($options['defaults']['standard']['dflts']['list_item']['cp_badge'] ?? null)->toBeFalse();
    expect($options['defaults']['standard']['dflts']['image']['cp_css'] ?? null)->toBeNull();
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
            'icon' => null,
            'class' => 'title',
            'cp_css' => null,
            'cp_badge' => false,
            'type' => 'heading_1',
            'key' => 'title',
        ],
        'square_list' => [
            'ext' => 'bulletList',
            'name' => 'Square List',
            'ident' => 'S',
            'icon' => null,
            'class' => 'square-list',
            'cp_css' => null,
            'cp_badge' => false,
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
            'key' => 'standard',
            'dflts' => [
                'heading_1' => [
                    'class' => 'heading-1',
                    'cp_css' => null,
                    'cp_badge' => false,
                    'ext' => 'heading',
                    'type' => 'heading_1',
                    'key' => 'standard',
                ],
                'heading_2' => [
                    'class' => 'heading-2',
                    'cp_css' => null,
                    'cp_badge' => false,
                    'ext' => 'heading',
                    'type' => 'heading_2',
                    'key' => 'standard',
                ],
                'paragraph' => [
                    'class' => 'paragraph',
                    'cp_css' => null,
                    'cp_badge' => false,
                    'ext' => 'paragraph',
                    'type' => 'paragraph',
                    'key' => 'standard',
                ],
                'table_cell' => [
                    'class' => 'cell',
                    'cp_css' => null,
                    'cp_badge' => false,
                    'ext' => 'tableCell',
                    'type' => 'table_cell',
                    'key' => 'standard',
                ],
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
            'ext' => 'tableCell',
            'type' => 'table_cell',
            'attrs' => [
                'rowspan' => [
                    'type' => 'table_cell',
                    'handle' => 'rowspan',
                    'field' => 'text',
                    'display' => 'Rowspan',
                    'default' => null,
                    'rendered' => true,
                    'extra' => false,
                    'styles' => [],
                    'cp_css' => false,
                ],
            ],
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
            'ext' => 'heading',
            'type' => 'heading_1',
            'attrs' => [
                'id' => [
                    'type' => 'heading_1',
                    'handle' => 'id',
                    'field' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                    'styles' => [],
                ],
            ],
        ],
        'heading_2' => [
            'ext' => 'heading',
            'type' => 'heading_2',
            'attrs' => [
                'id' => [
                    'type' => 'heading_2',
                    'handle' => 'id',
                    'field' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                    'styles' => [],
                ],
            ],
        ],
        'heading_3' => [
            'ext' => 'heading',
            'type' => 'heading_3',
            'attrs' => [
                'id' => [
                    'type' => 'heading_3',
                    'handle' => 'id',
                    'field' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                    'styles' => [],
                ],
            ],
        ],
        'heading_4' => [
            'ext' => 'heading',
            'type' => 'heading_4',
            'attrs' => [
                'id' => [
                    'type' => 'heading_4',
                    'handle' => 'id',
                    'field' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                    'styles' => [],
                ],
            ],
        ],
        'heading_5' => [
            'ext' => 'heading',
            'type' => 'heading_5',
            'attrs' => [
                'id' => [
                    'type' => 'heading_5',
                    'handle' => 'id',
                    'field' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                    'styles' => [],
                ],
            ],
        ],
        'heading_6' => [
            'ext' => 'heading',
            'type' => 'heading_6',
            'attrs' => [
                'id' => [
                    'type' => 'heading_6',
                    'handle' => 'id',
                    'field' => 'text',
                    'display' => 'ID',
                    'default' => null,
                    'rendered' => true,
                    'extra' => true,
                    'styles' => [],
                ],
            ],
        ],
    ]);
});
