<?php
namespace App\CustomClasses;

abstract class Card {
    public $number;
    public $suit;
    public $value;
    public $color;
    public $backsides;
    public $frontside;
    public function __construct($number, $suit, $value, $color, $frontside) {

        $this->number = $number;
        $this->suit = $suit;
        $this->value = $value;
        $this->color = $color;
        $this->frontside = $frontside;
        $this->backsides = env('APP_URL').'/storage/Cards/card_backsides.png';
    }
    abstract public function powerUp();

    public function getCard() {
        return $this->number.$this->suit;
    }
}
?>