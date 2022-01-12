<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LobbiesUsers extends Model
{
    use HasFactory;
    public $guarded = [];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function lobby()
    {
        return $this->belongsTo(Lobby::class);
    }
}
