<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SingleCollection\DaftarHargaSingleCollection;
use App\Models\DaftarHarga;
use App\Models\Kelas;
use Illuminate\Http\Request;

class DaftarhargaController extends Controller
{
    public function index(Request $request)
    {

        $query = DaftarHarga::query();
        if ($request->search) {
            $query->whereHas('kapal', function ($q) use ($request) {
                $q->where('nama_kapal', 'like', '%' . $request->search . '%');
            });
        }
        $daftarHarga = new DaftarHargaSingleCollection($query->with('kapal', 'kelas', 'jenisPenumpang')->latest()->paginate());
        return inertia('Admin/DaftarHarga/DaftarHarga', ['daftarHarga' => $daftarHarga]);
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
            'kapal_id' => 'required',
            'harga' => 'required',
            'kelas_id' => 'required',
            'jenis_penumpang_id' => 'required',
        ]);
        $daftarHarga = DaftarHarga::create($attr);
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menambah harga tiket'
            ]
        );
    }
    public function update(Request $request)
    {
        $kelas = DaftarHarga::findOrFail($request->id);
        $attr = $request->validate([
            'kapal_id' => 'required',
            'harga' => 'required',
            'kelas_id' => 'required',
            'jenis_penumpang_id' => 'required',
        ]);
        $kelas->update($attr);
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil mengupdate harg tiket'
            ]
        );
    }
    public function delete(Request $request)
    {
        $kelas = DaftarHarga::findOrFail($request->id);
        $kelas->delete();
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menghapus harga tiket'
            ]
        );
    }
}
