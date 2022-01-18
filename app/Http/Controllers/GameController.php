<?php

namespace App\Http\Controllers;

use App\Events\Move;
use App\Events\MakeDeck;
use App\Events\DealCards;
use App\CustomClasses\Deck;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Illuminate\Broadcasting\BroadcastEvent;

class GameController extends Controller
{
    public function test(){
        // $deck = new Deck(2);
        // $deck->shuffle();
        // Redis::del('deck_2');
        // $deck->save();
        // return $deck->get();
        $deck = Deck::getDeck(2);
        return $deck;
    }
    public function makeMove(Request $request){
        broadcast(new Move($request->game_id));
    }
    public function getCards(Request $request){
        broadcast(new DealCards($request->game_id));
    }
}
