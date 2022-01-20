<?php
namespace App\CustomClasses\CardTypes;

use App\CustomClasses\Card;

class BlackKing extends Card {
    public function __construct($number, $suit, $value, $color, $frontside) {
        parent::__construct($number, $suit, $value, $color, $frontside);
        $this->value = 0;
    }
    public function powerUp() {
        return "0 points";
    }
}
?>