<?php

namespace App\Events;

use App\CustomClasses\Deck;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class DealCards implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public $game_id;
    public $deck;
    public $user_id;
    public function __construct($game_id)
    {
        $this->game_id = $game_id;
        $this->user_id = 1;
        $this->deck = Deck::getDeck($this->game_id);
    }
    public function broadcastWith(){
        return [
            'deck' => $this->deck,
        ];
    }
    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('game.' . $this->game_id . '_user.' . $this->user_id);
    }
}
