<?php

namespace App\Http\Controllers;

use App\CustomClasses\Deck;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

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
}
