<?php

namespace Tests;

use JackSleight\StatamicBardTexstyle\ServiceProvider;
use Statamic\Testing\AddonTestCase;

class TestCase extends AddonTestCase
{
    protected string $addonServiceProvider = ServiceProvider::class;
}
