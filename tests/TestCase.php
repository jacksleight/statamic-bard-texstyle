<?php

namespace Tests;

use Facades\Statamic\Version;
use Statamic\Console\Processes\Composer;
use Statamic\Statamic;
use Statamic\Support\Str;

class TestCase extends \Orchestra\Testbench\TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        Version::shouldReceive('get')->andReturn(Composer::create(__DIR__.'/../')->installedVersion(Statamic::PACKAGE));
    }

    protected function getStatamicMajor()
    {
        $version = Statamic::version();

        return $version !== 'dev-master'
            ? (int) Str::before($version, '.')
            : 100;
    }
}
