<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Global/Auth/Register/Register');
    }
    public function store(Request $request)
    {

        $attr = $request->validate([
            'name' => "required|string|min:6",
            'email' => "email|required|unique:users,email|string",
            'password' => "confirmed|min:8",
        ]);
        $attr['password'] = bcrypt($attr['password']);
        $user = User::create($attr);
        event(new Registered($user));
        Auth::login($user);
    }
}