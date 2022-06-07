<?php

namespace JackSleight\StatamicBardTexstyle;

use Illuminate\Support\Arr;
use JackSleight\StatamicBardMutator\Facades\Mutator;
use JackSleight\StatamicBardTexstyle\Marks\Span;
use JackSleight\StatamicBardTexstyle\Nodes\Div;
use JackSleight\StatamicBardTexstyle\Extensions\Core;
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

        $defaults = config('statamic.bard_texstyle.default_classes', []);

        $store = config('statamic.bard_texstyle.store', 'class');
        $attr  = $store === 'class' ? 'class' : 'bts_key';

        $styles = config('statamic.bard_texstyle.styles', []);
        $styles = $this->normalizeStyles($styles);
        array_walk($styles, function (&$style, $key) {
            $style['key'] = $key;
        });

        $coreTypes = collect($styles)
            ->pluck('type')
            ->map(fn ($v) => [
                'span' => 'bts_span',
                'div'  => 'bts_div',
            ][$v] ?? $v)
            ->unique();

        Statamic::provideToScript([
            'statamic-bard-texstyle' => [
                'store'     => $store,
                'attr'      => $attr,
                'styles'    => $styles,
                'coreTypes' => $coreTypes,
            ],
        ]);

        Augmentor::addExtension('bts_span', new Span());
        Augmentor::addExtension('bts_div', new Div());
        Augmentor::addExtension('bts_core', new Core([
            'store'    => $store,
            'attr'     => $attr,
            'styles'   => $styles,
            'types'    => $coreTypes,
            'defaults' => $defaults,
        ]));

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
