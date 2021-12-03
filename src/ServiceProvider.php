<?php

namespace JackSleight\StatamicBardTexstyle;

use Illuminate\Support\Arr;
use JackSleight\StatamicBardMutator\Facades\Mutator;
use JackSleight\StatamicBardTexstyle\Marks\Span;
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
            __DIR__.'/../config/statamic/bard_texstyle.php' => config_path('statamic/bard_texstyle.php'),
        ], 'statamic-bard-texstyle-config');

        $styles = config('statamic.bard_texstyle.styles', []);
        $styles = $this->normalizeStyles($styles);

        Statamic::provideToScript([
            'statamic-bard-texstyle' => [
                'styles' => $styles,
            ],
        ]);

        Augmentor::addMark(Span::class);

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
            Mutator::node('bts_span', $tagMutator);
        }

        return $this;
    }

    /**
     * Converts Bard Paragraph Style config to Bard Texstyle config.
     */
    protected function normalizeStyles($styles)
    {
        if (Arr::isAssoc($styles)) {
            return $styles;
        }

        $normal = [];

        foreach ($styles as $style) {
            $key = isset($style['button'])
                ? $style['button']
                : ('bts_'.preg_replace('/[^\w-]/i', '_', $style['class']));
            $style['type'] = 'paragraph';
            $normal[$key] = $style;
        }

        return $normal;
    }
}
