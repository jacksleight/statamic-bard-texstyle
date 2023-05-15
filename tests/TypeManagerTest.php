<?php

use JackSleight\StatamicBardTexstyle\TypeManager;

uses(Tests\TestCase::class);

it('fetches type by name', function () {
    $types = new TypeManager();
    expect($types->find('paragraph'))->toMatchArray(['name' => 'paragraph']);
});

it('fetches type by alias', function () {
    $types = new TypeManager();
    expect($types->find('bullet_list'))->toMatchArray(['name' => 'unordered_list']);
    expect($types->find('bulletList'))->toMatchArray(['name' => 'unordered_list']);
});

it('fetches type by item', function () {
    $types = new TypeManager();
    expect($types->findByItem(['type' => 'paragraph']))->toMatchArray(['name' => 'paragraph']);
    expect($types->findByItem(['type' => 'heading', 'attrs' => ['level' => 1]]))->toMatchArray(['name' => 'heading_1']);
});

it('fetches type by extension', function () {
    $types = new TypeManager();
    expect($types->findByExtension('btsDiv')->first())->toMatchArray(['name' => 'div']);
});

it('fetches type by feature', function () {
    $types = new TypeManager();
    expect($types->findByStylesCpBadge()->pluck('name')->all())->toEqual([
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
