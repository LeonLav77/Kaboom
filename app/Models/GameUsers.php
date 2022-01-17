<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameUsers extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = 'games_users';
    public $with = ['user'];
    public static function addUser($game_id,$user_id)
    {
        return (new static)::create([
            'user_id' => $user_id,
            'game_id' => $game_id,
        ]);
    }
    public static function getUsers($game_id)
    {
        return (new static)::where('game_id',$game_id)->get();
    }
}
