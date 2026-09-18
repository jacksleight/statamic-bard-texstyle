<?php

use JackSleight\StatamicBardTexstyle\Extensions\Core;
use JackSleight\StatamicBardTexstyle\Marks\Span;
use JackSleight\StatamicBardTexstyle\Nodes\Div;
use JackSleight\StatamicBardTexstyle\OptionManager;
use Statamic\Fields\Field;
use Statamic\Fieldtypes\Bard;
use Statamic\Fieldtypes\Bard\Augmentor;

uses(Tests\TestCase::class);

function htmlToProsemirror(array $config, string $html): array
{
    $options = (new OptionManager($config, true))->resolve();

    Augmentor::addExtension('btsCore', new Core($options + ['defaultsKey' => 'standard']));
    Augmentor::addExtension('btsSpan', new Span);
    Augmentor::addExtension('btsDiv', new Div);

    return (new Augmentor((new Bard)->setField(new Field('content', ['type' => 'bard']))))
        ->renderHtmlToProsemirror($html);
}

it('parses a heading style back into a key', function () {
    $doc = htmlToProsemirror([
        'store' => 'key',
        'styles' => [
            'statement' => [
                'type' => 'heading_3',
                'name' => 'Statement',
                'class' => 'prose-statement',
            ],
        ],
    ], '<h3 class="prose-statement">Hi</h3>');

    expect($doc['content'][0]['attrs']['bts_key'])->toBe('statement');
});

it('parses a list style back into a key', function () {
    $doc = htmlToProsemirror([
        'store' => 'key',
        'styles' => [
            'ticks' => [
                'type' => 'unordered_list',
                'name' => 'Ticks',
                'class' => 'prose-ticks',
            ],
        ],
    ], '<ul class="prose-ticks"><li>Hi</li></ul>');

    expect($doc['content'][0]['attrs']['bts_key'])->toBe('ticks');
});
