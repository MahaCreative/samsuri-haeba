<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SingleCollection\JenisKapalSingleCollection;
use App\Models\JenisKapal;
use Illuminate\Http\Request;

class JenisKapalController extends Controller
{
    public function index(Request $request)
    {

        $query = JenisKapal::query();
        if ($request->search) {
            $query->where('nama', 'like', '%' . $request->search . '%');
        }
        $jenisKapal = new JenisKapalSingleCollection($query->latest()->paginate());
        return inertia('Admin/JenisKapal/JenisKapal', ['jenisKapal' => $jenisKapal]);
    }
    public function store(Request $request)
    {

        $attr = $request->validate([
            'nama' => 'required|unique:jenis_kapals,nama'
        ]);
        $jenisKapal = JenisKapal::create($attr);

        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menambah jenis kapal'
            ]
        );
    }
    public function update(Request $request)
    {
        $jenisKapal = JenisKapal::findOrFail($request->id);
        $jenisKapal->update([
            'nama' => $request->nama
        ]);
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil mengupdate jenis kapal'
            ]
        );
    }
    public function delete(Request $request)
    {
        $jenisKapal = JenisKapal::findOrFail($request->id);
        $jenisKapal->delete();
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menghapus jenis kapal'
            ]
        );
    }
}
