<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\LobbiesUsers;
use App\Models\Lobby;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GameController extends Controller
{
    public function joinLobby($id){
        $lobby = Lobby::find($id);
        $lobby->players()->attach(Auth::user()->id);
        return response()->json(['success' => true]);
    }
    public function createLobby(request $request){
        // $lobby = new Lobby();
        // $lobby->number_of_players = $request->number_of_players ?? 2;
        $lobby = Lobby::create([
            'number_of_players' => $request->number_of_players ?? 2,
        ]);
        LobbiesUsers::create([
            'user_id' => Auth::user()->id,
            'lobby_id' => $lobby->id,
        ]);
        $lobby->save(); 
        return response()->json(['success' => LobbiesUsers::first()->user]);
    }
    public function players(){
        $players = [
            'player1' => [
                'name' => 'John',
                'photo' => 'https://picsum.photos/150/150?random=2'
            ],
            'player2' => [
                'name' => 'Jane',
                'photo' => 'https://picsum.photos/150/150?random=3'
            ],
            'player3' => [
                'name' => 'Jack',
                'photo' => 'https://picsum.photos/150/150?random=4'
            ],
            'player4' => [
                'name' => 'Jill',
                'photo' => 'https://picsum.photos/150/150?random=5'
            ],

        ];
        return response()->json($players);
    }
    // game logic:
    // game starts with x number of players
    // a game is created when all the users are ready
    // a game is created with a deck of poker cards
    // each player gets a hand of 4 cards
}
