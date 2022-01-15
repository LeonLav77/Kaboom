<?php

use App\Events\Hello;
use App\Events\UserJoinedLobby;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/b', function () {
    broadcast(new Hello());
});

Route::get('/u', function () {
    broadcast(new UserJoinedLobby(69));
});
Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', '.*')->name('login');