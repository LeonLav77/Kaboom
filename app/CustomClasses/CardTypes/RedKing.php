<?php
namespace App\CustomClasses\CardTypes;

use App\CustomClasses\Card;

class RedKing extends Card {
    public function __construct($number, $suit, $value, $color) {
        parent::__construct($number, $suit, $value, $color);
        $this->value = 15;
    }
    public function powerUp() {
        return "see your card, see someones card, exchange if you will";
    }
}
?>