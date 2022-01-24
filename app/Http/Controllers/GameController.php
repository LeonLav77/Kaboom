<?php

namespace App\Http\Controllers;

use App\Events\Move;
use App\Events\MakeDeck;
use App\Events\DealCards;
use App\CustomClasses\Deck;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;
use Illuminate\Broadcasting\BroadcastEvent;

class GameController extends Controller
{
    public function makeMove(Request $request){
        broadcast(new Move($request->game_id));
    }
    public function dealCards(Request $request){
        $user_id = Auth::user()->id;
        broadcast(new DealCards($request->game_id,$user_id));
    }
    public function revealCard(Request $request){
        $user_id = Auth::user()->id;
        $game_id = $request->game_id;
        $card_id = $request->card_id;
        $player_id = $request->player_id;
        $deck = Deck::getDeck($game_id);
        $card = $deck->revealCard($user_id,$card_id,$player_id);
        $deck->save();
        return json_encode($card);
    }
    public function getTurn(Request $request){
        $game_id = $request->game_id;
        $deck = Deck::getDeck($game_id);
        $turn = $deck->getTurn();
        return json_encode($turn);
    }
    public function draw(request $request){
        $user_id = Auth::user()->id;
        $deck = Deck::getDeck($request->game_id);
        if($deck->checkTurn($user_id)){
            $card = $deck->drawN(1,$user_id);
            $deck->save();
            return json_encode($card);
        }else{
            return json_encode("Not your turn");
        }
    }
}
