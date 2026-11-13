<?php

use JackSleight\StatamicBardTexstyle\Nodes\Pin;
use Statamic\Fields\Field;
use Statamic\Fieldtypes\Bard;
use Statamic\Fieldtypes\Bard\Augmentor;
use Tests\TestCase;

uses(TestCase::class);

it('renders a pin without the trailing newline of its view', function () {
    view()->addLocation(__DIR__.'/__fixtures__/views');

    $bard = (new Bard)->setField(new Field('content', ['type' => 'bard']));

    Augmentor::addExtension('btsPin', new Pin([
        'bard' => $bard,
        'pinsPath' => 'pins',
        'pins' => [
            'note' => [
                'fields' => [
                    ['handle' => 'text', 'field' => ['type' => 'text']],
                ],
            ],
        ],
    ]));

    $html = (new Augmentor($bard))->renderProsemirrorToHtml(['type' => 'doc', 'content' => [
        ['type' => 'paragraph', 'content' => [
            ['type' => 'text', 'text' => 'Before'],
            ['type' => 'btsPin', 'attrs' => ['id' => 'abc', 'values' => ['type' => 'note', 'text' => '1']]],
            ['type' => 'text', 'text' => '.'],
        ]],
    ]]);

    expect($html)->toBe('<p>Before<sup>1</sup>.</p>');
});
