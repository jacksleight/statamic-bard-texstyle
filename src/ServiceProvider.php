<?php
namespace JackSleight\StatamicBardTextstyle;

use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;
use Statamic\Fieldtypes\Bard\Augmentor;
use Composer\InstalledVersions;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__ . '/../dist/js/cp.js',
    ];

    public function boot()
    {
        parent::boot();

        $this->publishes([
            __DIR__ . '/../config/statamic/bard_textstyle.php' => config_path('statamic/bard_textstyle.php'),
        ], 'statamic-bard-textstyle-config');

        Statamic::provideToScript([
            'statamic-bard-textstyle' => config('statamic-bard-textstyle'),
        ]);

        // if (InstalledVersions::isInstalled('jacksleight/statamic-bard-mutator')) {
        //     $this->bootStatamicBardMutator();
        // } else if (InstalledVersions::isInstalled('jacksleight/bard-mutator')) {
        //     $this->bootBardMutator();
        // } else {
        $this->bootStandalone();
        // }
    }

    // protected function bootStatamicBardMutator()
    // {
    //     \JackSleight\StatamicBardMutator\Facades\Mutator::node('paragraph', function ($tag, $node) {
    //         if (isset($node->attrs->class)) {
    //             $tag[0]['attrs']['class'] = $node->attrs->class;
    //         }
    //         return $tag;
    //     });
    // }

    // protected function bootBardMutator()
    // {
    //     \JackSleight\BardMutator\Facades\Mutator::node('paragraph', function ($tag, $node) {
    //         if (isset($node->attrs->class)) {
    //             $tag[0]['attrs']['class'] = $node->attrs->class;
    //         }
    //         return $tag;
    //     });
    // }
    
    protected function bootStandalone()
    {
        Augmentor::replaceNode(\ProseMirrorToHtml\Nodes\Paragraph::class, \JackSleight\StatamicBardTextstyle\Nodes\Paragraph::class);
    }
}
