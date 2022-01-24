<?php

use App\Models\GameUsers;
use App\Models\LobbiesUsers;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
Broadcast::channel('lobby.{lobby_id}', function ($user, $lobby_id) {
    if(LobbiesUsers::where('user_id',$user->id)->where('lobby_id',$lobby_id)->exists()){
        return $user;
    }
    return false;
});
Broadcast::channel('game.{game_id}', function ($user, $game_id) {
    if(GameUsers::where('user_id',$user->id)->where('game_id',$game_id)->exists()){
        return $user;
    }
    return false;
});
Broadcast::channel('game.{game_id}_user.{user_id}', function ($game_id) {
    return "true";
});
Broadcast::channel('moves.{game_id}', function () {
    return true;
});