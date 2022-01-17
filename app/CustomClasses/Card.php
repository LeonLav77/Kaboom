<?php
namespace App\CustomClasses;

abstract class Card {
    public $number;
    public $suit;
    public $value;
    public $color;
    public function __construct($number, $suit, $value,$color) {

        $this->number = $number;
        $this->suit = $suit;
        $this->value = $value;
        $this->color = $color;
    }
    abstract public function powerUp();
    public function getCard() {
        return $this->number.$this->suit;
    }
}
?>