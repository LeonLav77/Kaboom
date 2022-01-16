<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GameController;
use App\Http\Controllers\TestController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/new-entry',[TestController::class,'store']);

Route::get('/users',[TestController::class,'index']);

route::get('game/players',[GameController::class,'players']);

Route::post('/lobby/join',[GameController::class,'joinLobby']);

Route::get('/lobby/users/{id}',[GameController::class,'getLobbyUsers']);

Route::post('/lobbyInfo/{id}',[GameController::class,'getLobbyInfo']);

Route::post('/userInfo',[GameController::class,'userInfo']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

require __DIR__ . '/auth.php';
