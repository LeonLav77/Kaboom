<?php

namespace App\Http\Middleware;

use Closure;
use App\Events\Hello;
use App\Models\Lobby;
use Illuminate\Support\Str;
use App\Models\LobbiesUsers;
use Illuminate\Http\Request;
use App\Events\UserJoinedLobby;
use App\Events\UserLeavingLobby;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LeaveLobby
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        // this isnt a good solution, will change it to presence channels
    //     $url = $request->getRequestUri();
    //     if (Str::contains(Session::get('last_url'), 'lobby')) {
    //         $lobby_id = substr($url, strrpos($url, '/') + 1);
    //         if(!(intval($lobby_id))){
    //             $lobby_id = Auth::user()->IsInLobbyGetId();
    //         }
    //         dd($lobby_id);
    //         broadcast(new UserLeavingLobby($lobby_id))->toOthers();
    //     }
    //     Session::put('last_url', $request->getRequestUri());
    //     return $next($request);
    }
}
