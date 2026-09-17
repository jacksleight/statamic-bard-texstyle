<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Statamic\Facades\User;

Route::get('/!/skip/{handle}', function (Request $request, string $handle) {
    abort_unless(is_local_host($request->getHost()), 404);

    $user = User::findByEmail("{$handle}@example.test");

    abort_if(! $user, 404);

    Auth::login($user);

    return redirect('/');
})->middleware('web');

function is_local_host(string $host): bool
{
    return in_array($host, ['localhost', '127.0.0.1', '::1'])
        || Str::endsWith($host, ['.test', '.localhost', '.ts.net']);
}
