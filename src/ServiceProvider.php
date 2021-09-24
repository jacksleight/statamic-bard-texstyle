<?php
namespace JackSleight\BardParagraphStyle;

use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;
use Statamic\Fieldtypes\Bard\Augmentor;
use Composer\InstalledVersions;
use JackSleight\BardMutator\Facades\Mutator;

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

        Statamic::provideToScript([
            'bard-paragraph-style' => config('bard-paragraph-style'),
        ]);

        if (InstalledVersions::isInstalled('jacksleight/bard-mutator')) {
            $this->bootBardMutator();         
        } else {
            $this->bootStandalone();
        }
    }

    protected function bootBardMutator()
    {
        Mutator::node('paragraph', function ($tag, $node) {
            $tag[0]['attrs']['class'] = $node->attrs->class ?? null;
            return $tag;
        });     
    }
    
    protected function bootStandalone()
    {
        Augmentor::replaceNode(\ProseMirrorToHtml\Nodes\Paragraph::class, \JackSleight\BardParagraphStyle\Nodes\Paragraph::class);
    }
}
