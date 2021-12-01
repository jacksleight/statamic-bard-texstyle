<?php

namespace JackSleight\StatamicBardTextstyle;

use Illuminate\Support\Arr;
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

    public function bootAddon()
    {
        $this->publishes([
            __DIR__.'/../config/statamic/bard_textstyle.php' => config_path('statamic/bard_textstyle.php'),
        ], 'statamic-bard-textstyle-config');

        $config = config('statamic.bard_textstyle');
        $config = $this->normalizeConfig($config);

        Statamic::provideToScript([
            'statamic-bard-textstyle' => $config,
        ]);

        Augmentor::addMark(Span::class);

        $styles = $config['styles'];
        $activeTypes = collect($styles)->pluck('type')->unique();

        $tagMutator = function ($tag, $node) {
            if (isset($node->attrs->class)) {
                $tag[0]['attrs']['class'] = $node->attrs->class;
            }

            return $tag;
        };

        if ($activeTypes->contains('heading')) {
            Mutator::node('heading', $tagMutator);
        }
        if ($activeTypes->contains('paragraph')) {
            Mutator::node('paragraph', $tagMutator);
        }
        if ($activeTypes->contains('span')) {
            Mutator::node('span', $tagMutator);
        }

        return $this;
    }

    /**
     * Converts Bard Paragraph Style config to Bard Textstyle config.
     */
    protected function normalizeConfig($config)
    {
        if (Arr::isAssoc($config['styles'])) {
            return $config;
        }

        $styles = [];

        foreach ($config['styles'] as $style) {
            if (! isset($style['type'])) {
                $style['type'] = 'paragraph';
            }
            if (! isset($style['button'])) {
                $style['global'] = true;
            }

            $key = preg_replace('/[^\w-]/i', '_', $style['class']);

            $styles[$key] = $style;
        }

        $config['styles'] = $styles;

        return $config;
    }
}
