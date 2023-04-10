<?php

namespace Tests;

use Facades\Statamic\Version;
use Statamic\Console\Processes\Composer;
use Statamic\Statamic;

class TestCase extends \Orchestra\Testbench\TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        Version::shouldReceive('get')->andReturn(Composer::create(__DIR__.'/../')->installedVersion(Statamic::PACKAGE));
    }
}
