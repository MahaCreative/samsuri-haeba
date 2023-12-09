<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SingleCollection\JadwalKapalSingleCollection;
use App\Models\JadwalKapal;
use Illuminate\Http\Request;

class JadwalKapalController extends Controller
{
    public function index(Request $request)
    {

        $query = JadwalKapal::query();
        if ($request->search) {
            $query->whereHas('kapal', function ($q) use ($request) {
                $q->where('nama_kapal', 'like', '%' . $request->search . '%');
            });
        }
        $jadwalKapal = new JadwalKapalSingleCollection($query->with('kapal', 'rute')->latest()->paginate());
        // dd($jadwalKapal);
        return inertia('Admin/JadwalKapal/JadwalKapal', ['jadwalKapal' => $jadwalKapal]);
    }
    public function store(Request $request)
    {

        $attr = $request->validate([
            'kapal_id' => 'required',
            'rute_id' => 'required',
            'tanggal_berangkat' => 'required',
            'jam_berangkat' => 'required',
            'status_keberangkatan' => 'required',
            'keterangan' => 'required',
        ]);
        $jadwalKapal = JadwalKapal::create($attr);
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menambah jadwal kapal'
            ]
        );
    }
    public function update(Request $request)
    {
        $attr = $request->validate([
            'kapal_id' => 'required',
            'rute_id' => 'required',
            'tanggal_berangkat' => 'required',
            'jam_berangkat' => 'required',
            'status_keberangkatan' => 'required',
            'keterangan' => 'required',
        ]);
        $jadwalKapal = JadwalKapal::findOrFail($request->id);
        $jadwalKapal->update($attr);
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil mengupdate jadwal kapal',
            ]
        );
    }
    public function delete(Request $request)
    {
        $jadwalKapal = JadwalKapal::findOrFail($request->id);
        $jadwalKapal->delete();
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menghapus jenis kapal'
            ]
        );
    }
}
