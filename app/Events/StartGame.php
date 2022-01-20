<?php

namespace App\Events;

use App\Models\Game;
use App\Models\Lobby;
use App\Models\GameUsers;
use App\CustomClasses\Deck;
use App\Models\LobbiesUsers;
use App\CustomClasses\DeckTu;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class StartGame implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public $lobby_id;
    public $game_id;
    public function __construct($lobby_id)
    {
        $this->lobby_id = $lobby_id;
        // create a game that is similar to the lobby
        // this step is necessary because lobby id doesnt
        // have to be the same as game id
        $game = new Game();
        $game->save();
        $this->game_id = $game->id;
        // transfering players from lobby to the game
        // get lobby users
        $lobbyUsersIds = Lobby::where('id',$lobby_id)->first()->players->pluck('user_id');
        // delete from lobby and delete the lobby
        Lobby::where('id',$lobby_id)->delete();
        // add users to game
        foreach($lobbyUsersIds as $userId){
            GameUsers::addUser($game->id,$userId);
        }
        // create a deck and assign it to the game id
        $deck = new Deck($game->id);
        $deck->shuffle();
        $deck->save();
    }
    public function broadcastWith(){
        return [
            'lobby_id' => $this->lobby_id,
            'game_id' => $this->game_id,
        ];
    }
    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PresenceChannel('lobby.'.$this->lobby_id);
    }
}
