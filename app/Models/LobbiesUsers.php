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
    public static function addUser($lobby_id,$user_id)
    {
        return (new static)::create([
            'user_id' => $user_id,
            'lobby_id' => $lobby_id,
        ]);
    }
    public static function getUsers($lobby_id)
    {
        return (new static)::where('lobby_id',$lobby_id)->get();
    }
}
