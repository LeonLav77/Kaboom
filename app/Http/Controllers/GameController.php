<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\Lobby;
use App\Models\LobbiesUsers;
use Illuminate\Http\Request;
use App\Events\UserJoinedLobby;
use Illuminate\Support\Facades\Auth;

class GameController extends Controller
{
    public function joinLobby(request $request){
        // if there is a empty lobby, join that one
        // if there is no empty lobby create a new one
        $lobby = Lobby::where('status', 'waiting')->first();
        if(!$lobby){
            $lobby = new Lobby();
            $lobby->number_of_players = $request->number_of_players ?? 2;
            $lobby->status = 'waiting';
            $lobby->save();
        }
        LobbiesUsers::where('user_id',Auth::user()->id)->delete();
        LobbiesUsers::addUser($lobby->id,Auth::user()->id);
        broadcast(new UserJoinedLobby($lobby->id))->toOthers();
        if($lobby->number_of_players == $lobby->players()->count()){
            $lobby->status = 'full';
            $lobby->save();
        }
        return response()->json($lobby);
    }
    public function getLobbyUsers($id){
        $lobby = Lobby::find($id);
        $users = LobbiesUsers::getUsers($lobby->id)->load('user');
        return response()->json($users);
    }
    // game logic:
    // game starts with x number of players
    // a game is created when all the users are ready
    // a game is created with a deck of poker cards
    // each player gets a hand of 4 cards
}
