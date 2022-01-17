<?php

namespace App\Events;

use App\Models\Game;
use App\Models\Lobby;
use App\Models\GameUsers;
use App\Models\LobbiesUsers;
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
    public function __construct($lobby_id)
    {
        $this->lobby_id = $lobby_id;
        // create a game that is similar to the lobby
        // this step is necessary because lobby id doesnt
        // have to be the same as game id
        $game = new Game();
        $game->save();
        // transfering players from lobby to the game
        // get lobby users
        $lobbyUsersIds = Lobby::where('id',$lobby_id)->first()->players->pluck('user_id');
        // delete from lobby and delete the lobby
        Lobby::where('id',$lobby_id)->delete();
        // add users to game
        foreach($lobbyUsersIds as $userId){
            GameUsers::addUser($game->id,$userId);
        }

    }
    public function broadcastWith(){
        return [
            'lobby_id' => $this->lobby_id,
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
