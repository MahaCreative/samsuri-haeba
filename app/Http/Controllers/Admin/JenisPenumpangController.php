<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SingleCollection\JenisPenumpangSingleCollection;

use App\Models\JenisPenumpang;
use Illuminate\Http\Request;

class JenisPenumpangController extends Controller
{
    public function index(Request $request)
    {
        $query = JenisPenumpang::query();
        if ($request->search) {
        }
        $jenisPenumpang = new JenisPenumpangSingleCollection($query->latest()->paginate());
        return inertia('Admin/JenisPenumpang/JenisPenumpang', ['jenisPenumpang' => $jenisPenumpang]);
    }

    public function store(Request $request)
    {

        $attr = $request->validate([
            'nama' => 'required|unique:kelas,nama',
        ]);
        $kelas = JenisPenumpang::create($attr);

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
        $kelas = JenisPenumpang::findOrFail($request->id);
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
        $kelas = JenisPenumpang::findOrFail($request->id);
        $kelas->delete();
        return redirect()->back()->with(
            [
                'type' => 'success',
                'message' => 'Berhasil menghapus kelas'
            ]
        );
    }
}
