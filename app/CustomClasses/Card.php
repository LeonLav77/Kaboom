<?php
namespace App\CustomClasses;

abstract class Card {
    public $number;
    public $suit;
    public $value;
    public $color;
    // public $backsides = env('APP_URL').'/storage/card_backsides.png';
    public $frontside;
    public function __construct($number, $suit, $value, $color, $frontside) {

        $this->number = $number;
        $this->suit = $suit;
        $this->value = $value;
        $this->color = $color;
        $this->frontside = $frontside;
    }
    abstract public function powerUp();

    public function getCard() {
        return $this->number.$this->suit;
    }
}
?>