<?php
namespace App\CustomClasses\CardTypes;

use App\CustomClasses\Card;

class BoyQueen extends Card {
    public function __construct($number, $suit, $value, $color) {
        parent::__construct($number, $suit, $value, $color);
    }
    public function powerUp() {
        return "Exchange cards with someone";
    }
}
?>