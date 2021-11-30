<?php

namespace JackSleight\StatamicBardTextstyle;

use JackSleight\StatamicBardMutator\Facades\Mutator;
use JackSleight\StatamicBardTextstyle\Marks\Span;
use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/addon.js',
    ];

    public function boot()
    {
        parent::boot();

        $this
            ->bootConfig()
            ->bootMutators();
    }

    protected function bootConfig()
    {
        $this->publishes([
            __DIR__.'/../config/statamic/bard_textstyle.php' => config_path('statamic/bard_textstyle.php'),
        ], 'statamic-bard-textstyle-config');

        Statamic::provideToScript([
            'statamic-bard-textstyle' => config('statamic.bard_textstyle'),
        ]);

        return $this;
    }

    protected function bootMutators()
    {
        Augmentor::addMark(Span::class);

        $styles = config('statamic.bard_textstyle.styles');
        $mutatingTypes = collect($styles)->pluck('type')->unique();

        if ($mutatingTypes->contains('heading')) {
            Mutator::node('heading', function ($tag, $node) {
                if (isset($node->attrs->class)) {
                    $tag[0]['attrs']['class'] = $node->attrs->class;
                }

                return $tag;
            });
        }

        if ($mutatingTypes->contains('paragraph')) {
            Mutator::node('paragraph', function ($tag, $node) {
                if (isset($node->attrs->class)) {
                    $tag[0]['attrs']['class'] = $node->attrs->class;
                }

                return $tag;
            });
        }

        if ($mutatingTypes->contains('span')) {
            Mutator::node('span', function ($tag, $node) {
                if (isset($node->attrs->class)) {
                    $tag[0]['attrs']['class'] = $node->attrs->class;
                }

                return $tag;
            });
        }

        return $this;
    }
}
