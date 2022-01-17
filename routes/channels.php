<?php

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
// Broadcast::channel('lobby.{lobby_id}', function ($user, $lobby_id) {
//     return $user;
// });
// Broadcast::channel('leavingLobby.{lobby_id}', function ($user, $lobby_id) {
//     return LobbiesUsers::where('user_id',$user->id)->where('lobby_id',$lobby_id)->exists();
// });
// Broadcast::channel('countdown.{lobby_id}', function ($user, $lobby_id) {
//     return LobbiesUsers::where('user_id',$user->id)->where('lobby_id',$lobby_id)->exists();
// });
Broadcast::channel('lobby.{lobby_id}', function ($user, $lobby_id) {
    if(LobbiesUsers::where('user_id',$user->id)->where('lobby_id',$lobby_id)->exists()){
        return $user;
    }
    return false;
});