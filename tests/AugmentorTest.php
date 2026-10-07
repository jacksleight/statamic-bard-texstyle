<?php

use JackSleight\StatamicBardTexstyle\Extensions\Attributes;
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

function prosemirrorToHtml(array $config, array $content, ?string $defaultsKey): string
{
    $options = (new OptionManager($config, true))->resolve();

    Augmentor::addExtension('btsCore', new Core($options + ['defaultsKey' => $defaultsKey]));
    Augmentor::addExtension('btsAttributes', new Attributes($options));

    return (new Augmentor((new Bard)->setField(new Field('content', ['type' => 'bard']))))
        ->renderProsemirrorToHtml(['type' => 'doc', 'content' => $content]);
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

it('renders unstyled content without null array offsets', function ($defaultsKey) {
    $this->withoutDeprecationHandling();

    $html = prosemirrorToHtml([
        'store' => 'key',
        'styles' => [
            'lead' => [
                'type' => 'paragraph',
                'name' => 'Lead',
                'class' => 'lead',
            ],
        ],
        'attributes' => [
            'paragraph' => [
                'size' => [
                    'type' => 'select',
                    'rendered' => 'class',
                    'classes' => ['large' => 'text-lg'],
                ],
            ],
        ],
        'defaults' => [
            'paragraph' => ['class' => 'prose-p'],
            'heading_1' => ['class' => 'prose-h1'],
        ],
    ], [
        ['type' => 'paragraph', 'content' => [['type' => 'text', 'text' => 'Hi']]],
        ['type' => 'heading', 'attrs' => ['level' => 7], 'content' => [['type' => 'text', 'text' => 'Hi']]],
    ], $defaultsKey);

    expect($html)->toContain('<p')->toContain('>Hi</');
})->with(['standard', null]);
