<?php

use JackSleight\StatamicBardTexstyle\OptionManager;

uses(Tests\TestCase::class);

it('resolves full config', function () {
    $options = (new OptionManager([
        'styles' => [
            'title' => [
                'type' => 'heading1',
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
            'heading1' => [
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
                'heading1' => [
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
                'cp_css' => ['&' => 'font-size: 1.5em'],
                'cp_badge' => false,
                'args' => ['level' => 1],
                'kind' => 'heading1',
                'key' => 'title',
            ],
            'twocolumns' => [
                'type' => 'btsDiv',
                'name' => 'Two Columns',
                'ident' => '❙ ❙',
                'icon' => null,
                'class' => 'two-columns',
                'cp_css' => ['&' => 'column-count: 2; column-gap: 16px'],
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
            'heading1' => [
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
                'kind' => 'heading1',
            ],
        ],
        'defaults' => [
            'standard' => [
                'heading1' => [
                    'class' => 'heading-1',
                    'type' => 'heading',
                    'kind' => 'heading1',
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
                'type' => 'heading1',
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
                'heading1' => [
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
        ],
    ], false))->resolve();

    expect($options['styles'] ?? null)->toEqual([
        'title' => [
            'type' => 'heading',
            'name' => 'Title',
            'ident' => 'T',
            'class' => 'title',
            'args' => ['level' => 1],
            'kind' => 'heading1',
            'key' => 'title',
        ],
    ]);
});

it('normalizes legacy default_classes config', function () {
    $options = (new OptionManager([
        'default_classes' => [
            'heading' => [
                1 => 'heading-1',
                2 => 'heading-2',
            ],
            'paragraph' => 'paragraph',
        ],
    ], false))->resolve();

    expect($options['defaults'] ?? null)->toEqual([
        'standard' => [
            'heading1' => [
                'class' => 'heading-1',
                'type' => 'heading',
                'kind' => 'heading1',
            ],
            'heading2' => [
                'class' => 'heading-2',
                'type' => 'heading',
                'kind' => 'heading2',
            ],
            'paragraph' => [
                'class' => 'paragraph',
                'type' => 'paragraph',
                'kind' => 'paragraph',
            ],
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
        'heading1' => [
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
            'kind' => 'heading1',
        ],
        'heading2' => [
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
            'kind' => 'heading2',
        ],
        'heading3' => [
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
            'kind' => 'heading3',
        ],
        'heading4' => [
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
            'kind' => 'heading4',
        ],
        'heading5' => [
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
            'kind' => 'heading5',
        ],
        'heading6' => [
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
            'kind' => 'heading6',
        ],
    ]);
});
