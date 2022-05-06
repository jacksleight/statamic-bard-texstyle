<?php

namespace JackSleight\StatamicBardTexstyle;

use Illuminate\Support\Arr;
use JackSleight\StatamicBardMutator\Facades\Mutator;
use JackSleight\StatamicBardTexstyle\Marks\Span;
use Statamic\Fieldtypes\Bard;
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

        $store = config('statamic.bard_texstyle.store', 'class');

        $defaults = config('statamic.bard_texstyle.default_classes', []);

        $styles = config('statamic.bard_texstyle.styles', []);
        $styles = $this->normalizeStyles($styles);
        array_walk($styles, function (&$style, $key) {
            $style['key'] = $key;
        });

        Statamic::provideToScript([
            'statamic-bard-texstyle' => [
                'styles' => $styles,
                'store'  => $store,
            ],
        ]);

        Augmentor::addMark(Span::class);

        $coreTypes = collect($styles)
            ->pluck('type')
            ->map(fn ($v) => $v === 'span' ? 'bts_span' : $v)
            ->unique();
        $allTypes = $coreTypes
            ->merge(collect($defaults)->keys())
            ->unique();

        $tagMutator = function ($tag, $node) use ($store, $styles, $defaults, $coreTypes) {
            if (! isset($tag[0])) {
                return $tag;
            }
            $default = $node->type === 'heading'
                ? ($defaults[$node->type][$node->attrs->level] ?? null)
                : ($defaults[$node->type] ?? null);
            if ($coreTypes->contains($node->type)) {
                if ($store === 'class') {
                    $class = isset($node->attrs->class)
                        ? $node->attrs->class
                        : $default;
                } else {
                    $class = isset($node->attrs->bts_key)
                        ? ($styles[$node->attrs->bts_key]['class'] ?? null)
                        : $default;
                }
            } else {
                $class = $default;
            }
            if (isset($class)) {
                $tag[0]['attrs']['class'] = $class;
            }

            return $tag;
        };

        foreach ($allTypes as $type) {
            Mutator::tag($type, $tagMutator);
        }

        Bard::appendConfigField('bts_menu', [
            'display' => __('Style Menu'),
            'instructions' => __('Choose which buttons to show in the style menu'),
            'type' => 'bard_buttons_setting',
            'default' => [],
        ]);

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
