<?php

namespace JackSleight\StatamicBardTexstyle\Nodes;

use Closure;
use Illuminate\Support\Arr;
use Statamic\Facades\Cascade;
use Statamic\Fields\Fields;
use Statamic\Fieldtypes\Bard;
use Tiptap\Core\Node;

class Pin extends Node
{
    public static $name = 'btsPin';

    protected static $instances = [];

    public function addOptions()
    {
        return [
            'bard' => null,
            'pins' => null,
        ];
    }

    public function renderHTML($node, $HTMLAttributes = [])
    {
        $values = (array) $node->attrs->values;
        $id = $node->attrs->id;
        $data = array_merge($values, ['id' => $id], $this->fields($values['type'])
            ->addValues($values)
            ->augment()
            ->values()
            ->all());

        $view = "pins._{$values['type']}";
        if (! view()->exists($view)) {
            return;
        }

        return ['content' => view($view, array_merge(
            Cascade::toArray(),
            $data
        ))->render()];
    }

    public function augmentTag($value, $type = null)
    {
        $items = [];

        $this->walk($value, function ($node) use ($type, &$items) {
            $values = $node['attrs']['values'];
            $id = $node['attrs']['id'];
            if ($type && $values['type'] !== $type) {
                return;
            }
            $items[] = array_merge($values, ['id' => $id], $this->fields($values['type'])
                ->addValues($values)
                ->augment()
                ->values()
                ->all());
        });

        return $items;
    }

    public function process($value)
    {
        return $this->walk($value, function ($node) {
            $values = $node['attrs']['values'];
            $node['attrs']['values'] = array_merge($values, $this->fields($values['type'])
                ->addValues($values)
                ->process()
                ->values()
                ->all());

            return $node;
        });
    }

    public function preProcess($value)
    {
        return $this->walk($value, function ($node) {
            $values = $node['attrs']['values'];
            $node['attrs']['values'] = array_merge($values, $this->fields($values['type'])
                ->addValues($values)
                ->preProcess()
                ->values()
                ->all());

            return $node;
        });
    }

    public function preProcessValidatable($value)
    {
        return $this->walk($value, function ($node) {
            $values = $node['attrs']['values'];
            $node['attrs']['values'] = array_merge($values, $this->fields($values['type'])
                ->addValues($values)
                ->preProcessValidatables()
                ->values()
                ->all());

            return $node;
        });
    }

    public function extraRules($rules, $value)
    {
        $bard = $this->options['bard'];
        $field = $bard->field();

        $extras = [];
        $this->walk($value, function ($node, $index, $path) use (&$extras, $field) {
            $prefix = $field->handle().'.'.$path;
            $values = $node['attrs']['values'];
            $rules = $this->fields($values['type'])
                ->addValues($values)
                ->validator()
                ->withContext([
                    'prefix' => $field->validationContext('prefix').$prefix.'.',
                ])
                ->rules();
            $extras[] = collect($rules)
                ->mapWithKeys(function ($rules, $handle) use ($prefix) {
                    return [$prefix.'.'.$handle => $rules];
                })->all();
        });

        return collect($rules)
            ->merge(collect($extras)->reduce(function ($carry, $rules) {
                return $carry->merge($rules);
            }, collect()))
            ->all();
    }

    public function extraValidationAttributes($attributes, $value)
    {
        $bard = $this->options['bard'];
        $field = $bard->field();

        $extras = [];
        $this->walk($value, function ($node, $index, $path) use (&$extras, $field) {
            $prefix = $field->handle().'.'.$path;
            $values = $node['attrs']['values'];
            $attributes = $this->fields($values['type'])
                ->addValues($values)
                ->validator()
                ->attributes();
            $extras[] = collect($attributes)
                ->mapWithKeys(function ($rules, $handle) use ($prefix) {
                    return [$prefix.'.'.$handle => $rules];
                })->all();
        });

        return collect($attributes)
            ->merge(collect($extras)->reduce(function ($carry, $rules) {
                return $carry->merge($rules);
            }, collect()))
            ->all();
    }

    public function preload($data, $value)
    {
        $pins = $this->options['pins'];
        $bard = $this->options['bard'];

        $pins = Arr::only($pins, $bard->config('bts_pins', []));

        $defaults = collect($pins)
            ->map(function ($pin, $handle) {
                return $this->fields($handle)
                    ->all()
                    ->map(function ($field) {
                        return $field->fieldtype()->preProcess($field->defaultValue());
                    })
                    ->all();
            })
            ->all();

        $new = collect($pins)
            ->map(function ($pin, $handle) use ($defaults) {
                return $this->fields($handle)
                    ->addValues($defaults[$handle])
                    ->meta()
                    ->put('_', '_');
            })
            ->all();

        $existing = [];
        $this->walk($value, function ($node) use (&$existing) {
            $values = $node['attrs']['values'];
            $existing[$node['attrs']['id']] = $this->fields($values['type'])
                ->addValues($values)
                ->meta()
                ->put('_', '_');
        });

        $data['btsPins'] = [
            'new' => $new,
            'defaults' => $defaults,
            'existing' => $existing,
        ];

        return $data;
    }

    protected function fields($type)
    {
        $bard = $this->options['bard'];
        $pins = $this->options['pins'];

        return new Fields(
            $pins[$type]['fields'] ?? [],
            $bard->field()->parent(),
            $bard->field()
        );
    }

    protected function walk($nodes, Closure $callback, $parents = [])
    {
        if (! $nodes) {
            return $nodes;
        }

        foreach ($nodes as $i => $node) {
            $index = array_merge($parents, [$i]);
            $last = count($index) - 1;
            $path = collect($index)->map(function ($key, $i) use ($last) {
                return $i === $last ? "{$key}.attrs.values" : "{$key}.content";
            })->join('.');
            if ($node['type'] === 'btsPin') {
                $nodes[$i] = $callback($node, $index, $path);
            }
            if ($node['content'] ?? null) {
                $nodes[$i]['content'] = $this->walk($node['content'], $callback, $index);
            }
        }

        return $nodes;
    }

    public static function make($options, $bard)
    {
        $id = spl_object_id($bard);

        if (! isset(static::$instances[$id])) {
            static::$instances[$id] = new self([...$options, 'bard' => $bard]);
        }

        return static::$instances[$id];
    }

    public static function registerHooks($options)
    {
        Bard::hook('process', function ($value, $next) use ($options) {
            return $next(Pin::make($options, $this)->process($value));
        });
        Bard::hook('pre-process', function ($value, $next) use ($options) {
            return $next(Pin::make($options, $this)->preProcess($value));
        });
        Bard::hook('pre-process-validatable', function ($value, $next) use ($options) {
            return $next(Pin::make($options, $this)->preProcessValidatable($value));
        });
        Bard::hook('extra-rules', function ($rules, $next) use ($options) {
            return $next(Pin::make($options, $this)->extraRules($rules, $this->field->value()));
        });
        Bard::hook('extra-validation-attributes', function ($attributes, $next) use ($options) {
            return $next(Pin::make($options, $this)->extraValidationAttributes($attributes, $this->field->value()));
        });
        Bard::hook('preload', function ($data, $next) use ($options) {
            return $next(Pin::make($options, $this)->preload($data, json_decode($this->field->value(), true)));
        });
    }
}
