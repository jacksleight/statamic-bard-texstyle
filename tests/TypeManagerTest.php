<?php

use JackSleight\StatamicBardTexstyle\TypeManager;

uses(Tests\TestCase::class);

it('fetches name by alias', function () {
    $types = new TypeManager(false);
    expect($types->name('bullet_list'))
        ->toEqual('unordered_list');
    expect($types->name('bulletList'))
        ->toEqual('unordered_list');
});

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

it('fetches type by item', function () {
    $types = new TypeManager(false);
    expect($types->findByItem(['type' => 'paragraph']))
        ->toMatchArray(['name' => 'paragraph']);
    expect($types->findByItem(['type' => 'heading', 'attrs' => ['level' => 1]]))
        ->toMatchArray(['name' => 'heading_1']);
});

it('fetches values', function () {
    $types = new TypeManager(false);
    expect($types->get('span', 'extension'))
        ->toEqual('btsSpan');
    expect($types->get('heading_1', 'display'))
        ->toEqual('Heading 1');
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
    expect(fn () => $types->validateStyle(['type' => 'div']))
        ->toThrow(Exception::class, "Unknown type 'div'");
    expect($typesPro->validateStyle(['type' => 'div']))
        ->toBeArray();
});

it('validates attributes', function () {
    $types = new TypeManager(false);
    expect($types->validateAttribute('heading_1', []))
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
    expect($types->validateAttribute('span', []))
        ->toBeNull();
});

it('validates defaults', function () {
    $types = new TypeManager(false);
    expect($types->validateDefault('heading_1', []))
        ->toBeArray()
        ->toHaveKeys([
            'class',
            'cp_css',
            'cp_badge',
        ]);
    expect($types->validateDefault('list_item', []))
        ->toBeArray();
    expect($types->validateDefault('span', []))
        ->toBeNull();
    expect($types->validateDefault('link', ['cp_css' => 'color: red']))
        ->toMatchArray(['cp_css' => null]);
    expect($types->validateDefault('link', ['cp_badge' => true]))
        ->toMatchArray(['cp_badge' => false]);
});
