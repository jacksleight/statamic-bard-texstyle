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
    expect($types->get('paragraph'))
        ->toMatchArray(['name' => 'paragraph'])
        ->toHaveKeys([
            'name',
            'display',
            'selector',
            'button',
            'extension',
            'command',
            'parameters',
            'attributes',
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

it('fetches type by item', function () {
    $types = new TypeManager(false);
    expect($types->getByItem(['type' => 'paragraph', 'attrs' => []]))
        ->toMatchArray(['name' => 'paragraph']);
    expect($types->getByItem(['type' => 'heading', 'attrs' => ['level' => 3]]))
        ->toMatchArray(['name' => 'heading_3']);
    expect($types->getByItem(['type' => 'orderedList', 'attrs' => []]))
        ->toMatchArray(['name' => 'ordered_list']);
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
        ->toBeArray();
    expect($typesPro->validateStyle(['type' => 'div']))
        ->toBeArray();
});

it('validates attributes', function () {
    $types = new TypeManager(true);
    expect($types->validateAttribute(['type' => 'heading_1']))
        ->toBeArray()
        ->toHaveKeys([
            'type',
            'handle',
            'field',
            'display',
            'default',
            'rendered',
            'extra',
        ]);
    expect($types->validateAttribute(['type' => 'span']))
        ->toBeNull();
    expect($types->validateAttribute(['type' => 'heading_1', 'handle' => 'id']))
        ->toMatchArray(['extra' => true]);
    expect($types->validateAttribute(['type' => 'table_cell', 'handle' => 'rowspan']))
        ->toMatchArray(['extra' => false]);
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
    expect($types->validateDefault(['type' => 'span']))
        ->toBeNull();
    expect($types->validateDefault(['type' => 'image', 'cp_css' => 'color: red']))
        ->toMatchArray(['cp_css' => null]);
    expect($types->validateDefault(['type' => 'image', 'cp_badge' => true]))
        ->toMatchArray(['cp_badge' => false]);
});

it('returns null for unsupported style types', function () {
    $types = new TypeManager(true);

    expect($types->validateStyle(['type' => 'table']))
        ->toBeNull();

    expect($types->validateStyle(['type' => 'bold']))
        ->toBeNull();
});

it('returns null for pins in free edition', function () {
    $types = new TypeManager(false);

    expect($types->validatePin(['display' => 'Test Pin']))
        ->toBeNull();
});

it('returns null for attributes on unsupported types', function () {
    $types = new TypeManager(true);

    expect($types->validateAttribute(['type' => 'span', 'handle' => 'id']))
        ->toBeNull();
});

it('returns null for styles menu option on unsupported types', function () {
    $types = new TypeManager(true);

    expect($types->validateStylesMenuOption(['type' => 'bold', 'name' => 'Test']))
        ->toBeNull();

    expect($types->validateStylesMenuOption(['type' => 'paragraph', 'name' => 'Test']))
        ->toBeArray();
});
