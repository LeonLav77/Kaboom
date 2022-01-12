<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lobby extends Model
{
    use HasFactory;
    public $guarded = [];
    // a Lobby has:
    // creator
    // number of players
    // rules gonna skip for now
    // players
    public function players()
    {
        return $this->hasMany(LobbiesUsers::class);
    }
}
