<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SingleCollection\KelasSingleCollection;
use App\Models\Kelas;
use Illuminate\Http\Request;

class KelasController extends Controller
{
    public function index(Request $request)
    {
        $query = Kelas::query();
        if ($request->search) {
            $query->where('nama', 'like', '%' . $request->search . '%');
        }
        $kelas = new KelasSingleCollection($query->latest()->paginate());
        return inertia('Admin/Kelas/Kelas', ['kelas' => $kelas]);
    }

    public function store(Request $request)
    {

        $attr = $request->validate([
            'nama' => 'required|unique:kelas,nama',
        ]);
        $kelas = Kelas::create($attr);

        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menambah kelas'
            ]
        );
    }
    public function update(Request $request)
    {
        // dd($request->all());
        $kelas = Kelas::findOrFail($request->id);
        $kelas->update(["nama" => $request->nama]);
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil mengupdate kelas'
            ]
        );
    }
    public function delete(Request $request)
    {
        $kelas = Kelas::findOrFail($request->id);
        $kelas->delete();
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menghapus kelas'
            ]
        );
    }
}
