<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SingleCollection\KapalSingleCollection;

use App\Models\Kapal;
use Illuminate\Http\Request;

class KapalController extends Controller
{
    public function index(Request $request)
    {

        $query = Kapal::query();
        if ($request->search) {
            $query->where('nama_kapal', 'like', '%' . $request->search . '%');
        }
        $kapal = new KapalSingleCollection($query->with('jenisKapal')->latest()->paginate());

        return inertia('Admin/Kapal/Kapal', ['kapal' => $kapal]);
    }
    public function store(Request $request)
    {


        $attr = $request->validate([
            'jenis_kapal_id' => 'required',
            'nama_kapal' => 'required',
            'kapasitas' => 'required',
            'fasilitas_umum' => 'required',
        ]);
        $url = $request->file('foto') ? $request->file('foto')->store('gambar/kapal') : "null";
        $attr['foto'] = $url;
        $attr['keterangan'] = $request->keterangan;
        $kapal = Kapal::create($attr);

        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menambah kapal'
            ]
        );
    }
    public function update(Request $request)
    {
        $kapal = Kapal::findOrFail($request->id);
        $attr = $request->validate([
            'jenis_kapal_id' => 'required',
            'nama_kapal' => 'required',
            'kapasitas' => 'required',
            'fasilitas_umum' => 'required',
        ]);
        $url = $request->file('foto') ? $request->file('foto')->store('gambar/kapal') : $kapal->foto;
        $attr['foto'] = $url;
        $attr['keterangan'] = $request->keterangan;

        $kapal->update($attr);
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil mengupdate kapal'
            ]
        );
    }
    public function delete(Request $request)
    {

        $kapal = Kapal::findOrFail($request->id);
        $kapal->delete();
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menghapus kapal'
            ]
        );
    }
}
