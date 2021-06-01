<?php
namespace JackSleight\BardParagraphStyle;

use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;
use Statamic\Fieldtypes\Bard\Augmentor;
use ProseMirrorToHtml\Nodes\Paragraph as DefaultParagraph;
use JackSleight\BardParagraphStyle\Fieldtypes\Bard\Paragraph as Paragraph;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__ . '/../dist/js/cp.js',
    ];

    public function boot()
    {
        parent::boot();

        $this->publishes([
            __DIR__ . '/../config/bard-paragraph-style.php' => config_path('bard-paragraph-style.php'),
        ], 'bard-paragraph-style-config');

        Augmentor::replaceNode(DefaultParagraph::class, Paragraph::class);

        Statamic::provideToScript([
            'bard-paragraph-style' => config('bard-paragraph-style'),
        ]);
    }
}
