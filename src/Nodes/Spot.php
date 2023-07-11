<?php

namespace JackSleight\StatamicBardTexstyle\Nodes;

use Closure;
use Statamic\Facades\Cascade;
use Statamic\Fields\Fields;
use Tiptap\Core\Node;

class Spot extends Node
{
    public static $name = 'btsSpot';

    public function addOptions()
    {
        return [
            'bard' => null,
        ];
    }

    public function renderHTML($node, $HTMLAttributes = [])
    {
        $view = "spots.{$node->attrs->values->type}";
        $id = $node->attrs->id;
        $values = (array) $node->attrs->values;

        $data = array_merge($values, ['id' => $id], $this->fields($values['type'])
            ->addValues($values)
            ->augment()
            ->values()
            ->all());

        return ['content' => view($view, array_merge(
            Cascade::instance()->toArray(),
            $data
        ))];
    }

    public function process($value)
    {
        return $this->traverse($value, function ($node) {
            $values = $node['attrs']['values'];
            $node['attrs']['values'] = array_merge($values, $this->fields($values['type'])
                ->addValues($values)
                ->process()
                ->values()
                ->filter()
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

    protected function fields($set)
    {
        $bard = $this->options['bard'];

        return new Fields(
            $this->spotConfigs()[$set]['fields'],
            $bard->field()->parent(),
            $bard->field()
        );
    }

    protected function spotConfigs()
    {
        $bard = $this->options['bard'];

        return collect($bard->config('bts_spots'))->flatMap(function ($section) {
            return $section['sets'];
        });
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
