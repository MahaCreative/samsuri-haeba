<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PesananController extends Controller
{
    public function index(Request $request)
    {
        dd($request->all());
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menghapus jenis kapal'
            ]
        );
    }
    public function store(Request $request)
    {
        dd($request->all());
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menghapus jenis kapal'
            ]
        );
    }
    public function update(Request $request)
    {
        dd($request->all());
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menghapus jenis kapal'
            ]
        );
    }
    public function delete(Request $request)
    {
        dd($request->all());
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menghapus jenis kapal'
            ]
        );
    }
}
