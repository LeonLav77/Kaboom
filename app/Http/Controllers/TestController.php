<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;

class TestController extends Controller
{
    public function store(){
        DB::table('users')->insert([
            'name' => 'Joh',
            'email' => 'lonJohn@gmail.com',
            'password' => bcrypt('password'),
        ]);
        return response()->json(['success'=>'You have successfully added record']);
    }
    public function index(){
        // $users = DB::table('users')->get();
        $cachedUsers = Redis::get('users');
        if(isset($cachedUsers)) {
            $users = json_decode($cachedUsers, FALSE);
      
            return response()->json([
                'status_code' => 201,
                'message' => 'Fetched from redis',
                'data' => $users,
            ]);
        }else {
            $users = User::all();
            Redis::set('users', $users);
      
            return response()->json([
                'status_code' => 201,
                'message' => 'Fetched from database',
                'data' => $users,
            ]);
        }
    }
}
