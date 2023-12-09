<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SingleCollection\GarasiSingleCollection;
use App\Models\Garasi;
use Illuminate\Http\Request;

class GarasiController extends Controller
{
    public function index(Request $request)
    {

        $query = Garasi::query();
        if ($request->search) {
            $query->where('nama_garasi', 'like', '%' . $request->search . '%');
        }
        $garasi = new GarasiSingleCollection($query->latest()->paginate());
        return inertia('Admin/Garasi/Garasi', ['garasi' => $garasi]);
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menghapus jenis kapal'
            ]
        );
    }
    public function store(Request $request)
    {

        $attr = $request->validate([
            'nama_garasi' => 'required',
            'harga_garasi' => 'required',
            'min_berat' => 'required',
            'max_berat' => 'required',
        ]);
        $garasi = Garasi::create($attr);
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menambah jenis garasi'
            ]
        );
    }
    public function update(Request $request)
    {

        $garasi = Garasi::findOrFail($request->id);
        $attr = $request->validate([
            'nama_garasi' => 'required',
            'harga_garasi' => 'required',
            'min_berat' => 'required',
            'max_berat' => 'required',
        ]);
        $garasi->update($attr);
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil mengupdate jenis garasi'
            ]
        );
    }
    public function delete(Request $request)
    {
        $garasi = Garasi::findOrFail($request->id);
        $garasi->delete();
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menghapus jenis garasi'
            ]
        );
    }
}
