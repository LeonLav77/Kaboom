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

class Deck {
    public $deck = [];
    public $game_id = null;
    public $hands = [];
    public $revealedInHand = [];
    public $first_turn = null;
    public $turn = null;
    public $currentCard = null;
    public function __construct($game_id,$first_turn){
        $this->game_id = $game_id;
        $this->first_turn = $first_turn;
        $deck = $this->makeDeck();
        $this->deck = $deck;
        return $this->deck;
    }
    public function makeDeck(){
        $deck = [];
        $suits = ['heart','diamond','spade','club'];
        foreach($suits as $suit){
            for($i=1;$i<=14;$i++){
                $name = "/storage/Cards/".$i. "_of_".$suit."s.png";
                if($i % 2 == 0){
                    $color = "red";
                }else{
                    $color = "black";
                }
                if ($i == 7 || $i == 8) {
                    $deck[] = new SevenEight($i, $suit, $i, $color, $name);
                }
                elseif ($i == 9 || $i == 10) {
                    $deck[] = new NineTen($i, $suit, $i, $color, $name);
                }
                elseif ($i == 11 || $i == 12) {
                    $deck[] = new BoyQueen($i, $suit, $i, $color, $name);
                }
                elseif ($i == 14) {
                    $name = "/storage/Cards/".$color."_joker.png";
                    $deck[] = new Joker(0, "Joker", $i, $color, $name);
                }
                elseif ($i == 13 && $color == "black") {
                    $name = "/storage/Cards/".$color."_king.png";
                    $deck[] = new BlackKing($i, $suit, $i, $color, $name);
                }
                elseif ($i == 13 && $color == "red") {
                    $name = "/storage/Cards/".$color."_king.png";
                    $deck[] = new RedKing($i, $suit, $i, $color, $name);
                }
                else{
                    $deck[] = new Basic($i, $suit, $i, $color, $name);
                }
            }

        }
        return $deck;
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
    public function drawN($n,$user_id,$addToHand = false){
        $cards = [];
        for($i=0;$i<$n;$i++){
            $cards[] = array_pop($this->deck);
        }
        if($addToHand){
            $this->addToHand($cards,$user_id);
        }
        else{
            $this->currentCard = $cards[0];
        }
        return $cards;
    }
    public function addToHand($cards,$user_id){
        $this->hands[$user_id] = $cards;
    }
    public function revealCard($user_id,$card_id,$player_id){
        // if user has more than 2 revealed cards, return false
        if($user_id != $player_id){
            return "you can only look at your cards";
        }
        if(isset($this->revealedInHand[$user_id]) && count($this->revealedInHand[$user_id]) >= 2){
            return "Already looked at your cards";
        } 
        // return count($this->revealedInHand[$user_id]);
        $this->revealedInHand[$user_id][] = $this->hands[$user_id][$card_id];
        return $this->hands[$user_id][$card_id];
    }
    public function getTurn(){
        return $this->first_turn;
    }
    public function nextTurn(){

    }
    public function moveDraw($user_id){

    }
    public function checkTurn($user_id){
        if($this->first_turn == $user_id){
            return true;
        }
        return false;
    }
    public function throwCard($user_id,$card){
        if(!$this->checkTurn($user_id)){
            return "It's not your turn";
        }elseif($this->currentCard == null){
            return "No card to throw";
        }elseif(!(
            $this->currentCard->number == $card['number'] &&
            $this->currentCard->suit == $card['suit'] &&
            $this->currentCard->color == $card['color']
            )){
            return "Wrong card";
        }
        return "success";
    }
    // elseif(!isset($this->hands[$user_id][$card])){
    //     return "You don't have that card";
    // }
}
?>