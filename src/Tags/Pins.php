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
        $this->prepare();

        $from = $this->params->get('from');
        $type = $this->params->get('type');

        if (! $from instanceof Value) {
            throw new \Exception('From paramter must be the name of a Bard field');
        }

        $fieldtype = $from->fieldtype();
        if (! $fieldtype instanceof Bard) {
            throw new \Exception('From paramter must be the name of a Bard field');
        }

        $augmentor = new Augmentor($fieldtype);
        $extension = $augmentor->extensions()['btsPin'];

        $pins = $extension->augmentTag($from->raw(), $type);
        if (! count($pins)) {
            return;
        }

        return $pins;
    }

    protected function prepare()
    {
        $from = $this->params->get('from');
        if (is_string($from)) {
            $this->params->put('from', $this->context->get($from));
        }
    }
}
