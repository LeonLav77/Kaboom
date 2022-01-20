<?php
namespace App\CustomClasses\CardTypes;

use App\CustomClasses\Card;

class Joker extends Card {
    public function __construct($number, $suit, $value, $color, $frontside) {
        parent::__construct($number, $suit, $value, $color, $frontside);
        $this->value = -1;
    }
    public function powerUp() {
        return "-1 points";
    }
}
?>