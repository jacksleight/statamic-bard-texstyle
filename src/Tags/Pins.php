<?php

namespace JackSleight\StatamicBardTexstyle\Tags;

use Statamic\Fields\Value;
use Statamic\Fieldtypes\Bard;
use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Tags\Tags;

class Pins extends Tags
{
    public function wildcard(string $from)
    {
        $this->params->put('from', $from);

        return $this->index();
    }

    public function index()
    {
        $from = $this->params->get('from');
        $type = $this->params->get('type');

        if (! is_array($from)) {
            $from = explode('|', $from);
        }

        $pins = collect($from)
            ->flatMap(function ($from) use ($type) {
                if (is_string($from)) {
                    $from = $this->context->get($from);
                }
                if (is_array($from) && isset($from['value'])) {
                    $from = $from['value'];
                }
                if (! $from instanceof Value || ! $from->fieldtype() instanceof Bard) {
                    throw new \Exception('From parameter must be the name of a Bard field or array of Bard values');
                }

                $augmentor = new Augmentor($from->fieldtype());
                $extensions = $augmentor->extensions();

                if (! isset($extensions['btsPin'])) {
                    throw new \Exception('Pins require the Pro edition of Bard Texstyle');
                }

                return $extensions['btsPin']->augmentTag($from->raw(), $type);
            })
            ->all();

        if (! count($pins)) {
            return;
        }

        return $pins;
    }
}
