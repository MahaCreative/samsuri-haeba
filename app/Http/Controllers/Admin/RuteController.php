<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SingleCollection\RuteSingleCollection;
use App\Models\Rute;
use Illuminate\Http\Request;

class RuteController extends Controller
{
    public function index(Request $request)
    {
        // dd($request->all());
        $query = Rute::query();
        if ($request->search) {
            $query->where('kota_awal', 'like', '%' . $request->search . '%');
        }
        $rute = new RuteSingleCollection($query->latest()->paginate());


        return inertia('Admin/Rute/Rute', compact('rute'));
    }
    public function store(Request $request)
    {
        $attr = $request->validate([
            'kd_rute' => 'required|unique:rutes,kd_rute',
            'kota_awal' => 'required',
            'kota_tujuan' => 'required',
            'jarak' => 'required',
            'waktu_perjalanan' => 'required',
        ]);
        $rute = Rute::create($attr);
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menambah rute'
            ]
        );
    }
    public function update(Request $request)
    {

        $rute = Rute::findOrFail($request->id);
        $attr = $request->validate([
            'kd_rute' => 'required',
            'kota_awal' => 'required',
            'kota_tujuan' => 'required',
            'jarak' => 'required',
            'waktu_perjalanan' => 'required',
        ]);
        $rute->update($attr);
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil mengedeit rute'
            ]
        );
    }
    public function delete(Request $request)
    {

        $rute = Rute::findOrFail($request->id);
        $rute->delete();
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menghapus rute'
            ]
        );
    }
}
