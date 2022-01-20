<?php
namespace App\CustomClasses;

use Illuminate\Support\Facades\Redis;
use App\CustomClasses\CardTypes\Basic;
use App\CustomClasses\CardTypes\Joker;
use App\CustomClasses\CardTypes\NineTen;
use App\CustomClasses\CardTypes\RedKing;
use App\CustomClasses\CardTypes\BoyQueen;
use App\CustomClasses\CardTypes\BlackKing;
use App\CustomClasses\CardTypes\SevenEight;

class DeckTu {
    public $deck = [];
    public $game_id = null;
    public function __construct($game_id){
        $this->game_id = $game_id;
        $deck = [];
        $suits = ['Heart','Diamond','Spade','Club'];
        foreach($suits as $suit){
            for($i=1;$i<=14;$i++){
                if($i % 2 == 0){
                    $color = "Red";
                }else{
                    $color = "Black";
                }
                if ($i == 7 || $i == 8) {
                    $deck[] = new SevenEight($i, $suit, $i, $color);
                }
                elseif ($i == 9 || $i == 10) {
                    $deck[] = new NineTen($i, $suit, $i, $color);
                }
                elseif ($i == 11 || $i == 12) {
                    $deck[] = new BoyQueen($i, $suit, $i, $color);
                }
                elseif ($i == 14) {
                    $deck[] = new Joker(0, "Joker", $i, $color);
                }
                elseif ($i == 13 && $color == "Black") {
                    $deck[] = new BlackKing($i, $suit, $i, $color);
                }
                elseif ($i == 13 && $color == "Red") {
                    $deck[] = new RedKing($i, $suit, $i, $color);
                }
                else{
                    $deck[] = new Basic($i, $suit, $i, $color);
                }
            }
        }
        $this->deck = $deck;
        return $this->deck;
    }
    public function shuffle(){
        shuffle($this->deck);
        return $this->deck;
    }
    public function save(){
        Redis::set('deck_'.$this->game_id, serialize($this));
    }
    public function get(){
        $cachedDeck = Redis::get('deck_'.$this->game_id);
        if(isset($cachedDeck)) {
            $this->deck = json_decode($cachedDeck);
            return $this->deck;
        }
        return $this->deck;
    }
    // static function
    public static function getDeck($game_id){
        $cachedDeck = Redis::get('deck_'.$game_id);
        if(isset($cachedDeck)) {
            $deck = unserialize($cachedDeck);
            return $deck;
        }
        return null;
    }
    public function draw(){
        return "yea";
    }

}
?>