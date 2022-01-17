<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GameController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\LobbyController;

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

route::get('game/players',[LobbyController::class,'players']);

Route::post('/lobby/join',[LobbyController::class,'joinLobby']);

Route::get('/lobby/users/{id}',[LobbyController::class,'getLobbyUsers']);

Route::post('/lobbyInfo/{id}',[LobbyController::class,'getLobbyInfo']);

Route::post('/userInfo',[LobbyController::class,'userInfo']);

Route::post('/startCountdown',[LobbyController::class,'startCountdown']);

Route::post('/startGame',[LobbyController::class,'startGame']);

Route::get('/makeDeck',[GameController::class,'test']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

require __DIR__ . '/auth.php';
