<?php

use JackSleight\StatamicBardTexstyle\TypeManager;

uses(Tests\TestCase::class);

it('fetches type by name', function () {
    $types = new TypeManager(false);
    expect($types->find('paragraph'))
        ->toMatchArray(['name' => 'paragraph'])
        ->toHaveKeys([
            'name',
            'display',
            'selectors',
            'extension',
            'command',
            'arguments',
            'attributes',
            'aliases',
            'pro',
            'styles_class',
            'styles_cp_css',
            'styles_cp_badge',
            'styles_menu',
            'attributes_panel',
            'defaults_class',
            'defaults_cp_css',
            'defaults_cp_badge',
        ]);
});

it('fetches type by alias', function () {
    $types = new TypeManager(false);
    expect($types->find('bullet_list'))
        ->toMatchArray(['name' => 'unordered_list']);
    expect($types->find('bulletList'))
        ->toMatchArray(['name' => 'unordered_list']);
});

it('fetches type by config', function () {
    $types = new TypeManager(false);
    expect($types->findByConfig(['type' => 'bullet_list']))
        ->toMatchArray(['name' => 'unordered_list']);
});

it('fetches type by item', function () {
    $types = new TypeManager(false);
    expect($types->findByItem(['type' => 'paragraph']))
        ->toMatchArray(['name' => 'paragraph']);
    expect($types->findByItem(['type' => 'heading', 'attrs' => ['level' => 1]]))
        ->toMatchArray(['name' => 'heading_1']);
});

it('fetches type by extension', function () {
    $types = new TypeManager(false);
    expect($types->findByExtension('btsDiv')->first())
        ->toMatchArray(['name' => 'div']);
});

it('fetches type by feature', function () {
    $types = new TypeManager(false);
    expect($types->findByStylesCpBadge()->pluck('name')->all())
        ->toEqual([
            'div',
            'heading_1',
            'heading_2',
            'heading_3',
            'heading_4',
            'heading_5',
            'heading_6',
            'ordered_list',
            'paragraph',
            'unordered_list',
        ]);
});

it('validates styles', function () {
    $types = new TypeManager(false);
    $typesPro = new TypeManager(true);
    expect($types->validateStyle(['type' => 'heading_1']))
        ->toBeArray()
        ->toHaveKeys([
            'type',
            'class',
            'name',
            'ident',
            'icon',
            'cp_css',
            'cp_badge',
        ]);
    expect($types->validateStyle(['type' => 'table']))
        ->toBeNull();
    expect($types->validateStyle(['type' => 'link', 'cp_badge' => true]))
        ->toMatchArray(['cp_badge' => false]);
    expect($types->validateStyle(['type' => 'div']))
        ->toBeNull();
    expect($typesPro->validateStyle(['type' => 'div']))
        ->toBeArray();
});

it('validates attributes', function () {
    $types = new TypeManager(false);
    expect($types->validateAttribute(['type' => 'heading_1']))
        ->toBeArray()
        ->toHaveKeys([
            'type',
            'display',
            'default',
            'rendered',
            'values',
            'options',
            'clearable',
        ]);
    expect($types->validateAttribute(['type' => 'div']))
        ->toBeNull();
});

it('validates defaults', function () {
    $types = new TypeManager(false);
    expect($types->validateDefault(['type' => 'heading_1']))
        ->toBeArray()
        ->toHaveKeys([
            'class',
            'cp_css',
            'cp_badge',
        ]);
    expect($types->validateDefault(['type' => 'list_item']))
        ->toBeArray();
    expect($types->validateDefault(['type' => 'div']))
        ->toBeNull();
    expect($types->validateDefault(['type' => 'link', 'cp_css' => 'color: red']))
        ->toMatchArray(['cp_css' => null]);
    expect($types->validateDefault(['type' => 'link', 'cp_badge' => true]))
        ->toMatchArray(['cp_badge' => false]);
});
