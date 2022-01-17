<?php
namespace App\CustomClasses\CardTypes;

use App\CustomClasses\Card;

class SevenEight extends Card {
    public function __construct($number, $suit, $value, $color) {
        parent::__construct($number, $suit, $value, $color);
    }
    public function powerUp() {
        return "See your Card";
    }
}
?>