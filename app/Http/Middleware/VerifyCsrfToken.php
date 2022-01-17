<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        '/api/login',
        '/api/lobby/join',
        '/api/lobby/users/{id}',
        '/api/register',
        // all api routes
        'api/*'
        
    ];
}
