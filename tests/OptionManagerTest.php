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

it('normalizes aliased type names in defaults', function () {
    $options = (new OptionManager([
        'defaults' => [
            'standard' => [
                'bulletList' => [
                    'class' => 'custom-list',
                ],
                'orderedList' => [
                    'class' => 'ordered-list',
                ],
            ],
        ],
    ], true))->resolve();

    expect($options['defaults']['standard']['dflts'])->toHaveKey('unordered_list');
    expect($options['defaults']['standard']['dflts'])->toHaveKey('ordered_list');
    expect($options['defaults']['standard']['dflts'])->not->toHaveKey('bulletList');
    expect($options['defaults']['standard']['dflts'])->not->toHaveKey('orderedList');
    expect($options['defaults']['standard']['dflts']['unordered_list']['class'])->toEqual('custom-list');
    expect($options['defaults']['standard']['dflts']['ordered_list']['class'])->toEqual('ordered-list');
});

it('normalizes aliased type names in attributes', function () {
    $options = (new OptionManager([
        'attributes' => [
            'orderedList' => [
                'id' => [
                    'type' => 'text',
                    'display' => 'ID',
                ],
            ],
        ],
    ], true))->resolve();

    expect($options['attributes'])->toHaveKey('ordered_list');
    expect($options['attributes'])->not->toHaveKey('orderedList');
    expect($options['attributes']['ordered_list']['type'])->toEqual('ordered_list');
});

it('expands heading defaults correctly', function () {
    $options = (new OptionManager([
        'defaults' => [
            'heading' => [
                'class' => 'all-headings',
            ],
            'heading_1' => [
                'class' => 'heading-1-override',
            ],
        ],
    ], true))->resolve();

    expect($options['defaults']['standard']['dflts']['heading_1']['class'])
        ->toEqual('heading-1-override');

    expect($options['defaults']['standard']['dflts']['heading_2']['class'])
        ->toEqual('all-headings');

    expect($options['defaults']['standard']['dflts'])
        ->not->toHaveKey('heading');
});

it('handles empty config gracefully', function () {
    $options = (new OptionManager([], false))->resolve();

    expect($options['styles'])->toBeEmpty();
    expect($options['attributes'])->toBeEmpty();
    expect($options['pins'])->toBeEmpty();
    expect($options['defaults'])->toBeEmpty();
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
