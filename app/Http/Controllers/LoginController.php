<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index()
    {
        return inertia('Global/Auth/Login/Login');
    }
    public function store(Request $request)
    {
        $attr = $request->validate([
            'email' => "email|required|string",
            'password' => "confirmed|min:8",
        ]);
    }
}