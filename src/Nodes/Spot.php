<?php

namespace JackSleight\StatamicBardTexstyle\Nodes;

use Closure;
use Statamic\Facades\Cascade;
use Statamic\Fields\Fields;
use Statamic\Support\Arr;
use Tiptap\Core\Node;

class Spot extends Node
{
    public static $name = 'btsSpot';

    public function addOptions()
    {
        return [
            'bard' => null,
            'spots' => null,
        ];
    }

    public function renderHTML($node, $HTMLAttributes = [])
    {
        $spots = $this->options['spots'];

        $values = (array) $node->attrs->values;
        $type = $values['type'];
        $id = $node->attrs->id;
        $config = $spots[$type];

        if (! $config['rendered']) {
            return null;
        }

        $data = array_merge($values, ['id' => $id], $this->fields($values['type'])
            ->addValues($values)
            ->augment()
            ->values()
            ->all());

        return ['content' => view($config['view'], array_merge(
            Cascade::toArray(),
            $data
        ))->render()];
    }

    public function process($value)
    {
        return $this->traverse($value, function ($node) {
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
        return $this->traverse($value, function ($node) {
            $values = $node['attrs']['values'];
            $node['attrs']['values'] = array_merge($values, $this->fields($values['type'])
                ->addValues($values)
                ->preProcess()
                ->values()
                ->all());

            return $node;
        });
    }

    // public function preProcessValidatable($value)
    // {
    //     return $this->traverse($value, function ($node) {
    //         $values = $node['attrs']['values'];
    //         $node['attrs']['values'] = array_merge($values, $this->fields($values['type'])
    //             ->addValues($values)
    //             ->preProcessValidatables()
    //             ->values()
    //             ->all());

    //         return $node;
    //     });
    // }

    // public function extraRules($rules, $value)
    // {
    //     return $this->traverse($value, function ($node) use ($rules) {
    //         $values = $node['attrs']['values'];
    //         $rules = $this->fields($values['type'])
    //             ->addValues($values)
    //             ->validator()
    //             // ->withContext([
    //             //     'prefix' => $this->field->validationContext('prefix').$this->setRuleFieldPrefix($index).'.',
    //             // ])
    //             ->rules();

    //         // dd($rules);

    //         $rules[] = [];
    //     });

    //     return $rules;
    // }

    public function preload($data, $value)
    {
        $bard = $this->options['bard'];
        $spots = $this->options['spots'];

        $new = collect($spots)->map(function ($set, $handle) use ($defaults) {
            return (new Fields($set['fields']))->addValues($defaults[$handle])->meta()->put('_', '_');
        })->toArray();

        $defaults = collect($spots)->map(function ($set) {
            return (new Fields($set['fields']))->all()->map(function ($field) {
                return $field->fieldtype()->preProcess($field->defaultValue());
            })->all();
        })->all();

        $existing = [];
        $this->traverse($value, function ($node) use (&$existing, $spots) {
            $values = $node['attrs']['values'];
            $config = Arr::get($spots, "{$values['type']}.fields", []);
            $existing[$node['attrs']['id']] = (new Fields($config))->addValues($values)->meta()->put('_', '_');
        });

        $data['btsSpots'] = [
            'new' => $new,
            'defaults' => $defaults,
            'existing' => $existing,
        ];

        return $data;
    }

    protected function fields($type)
    {
        $bard = $this->options['bard'];
        $spots = $this->options['spots'];

        return new Fields(
            $spots[$type]['fields'],
            $bard->field()->parent(),
            $bard->field()
        );
    }

    protected function traverse($nodes, Closure $callback)
    {
        foreach ($nodes as $i => $node) {
            if ($node['type'] === 'btsSpot') {
                $nodes[$i] = $callback($node);
            }
            if ($node['content'] ?? null) {
                $nodes[$i]['content'] = $this->traverse($node['content'], $callback);
            }
        }

        return $nodes;
    }
}
