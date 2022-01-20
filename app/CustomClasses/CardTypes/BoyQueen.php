<?php
namespace App\CustomClasses\CardTypes;

use App\CustomClasses\Card;

class BoyQueen extends Card {
    public function __construct($number, $suit, $value, $color, $frontside) {
        parent::__construct($number, $suit, $value, $color, $frontside);
    }
    public function powerUp() {
        return "Exchange cards with someone";
    }
}
?>