<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Statamic\Facades\User;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('skip:users', function () {
    if (! app()->environment('local')) {
        $this->error('Refusing to run: not a local environment.');

        return 1;
    }

    $user = User::findByEmail('admin@example.test') ?? User::make()->email('admin@example.test');

    $user->makeSuper()->password('password')->save();

    $this->info('Skip user admin@example.test is ready.');
})->purpose('Create the local skip login users');
