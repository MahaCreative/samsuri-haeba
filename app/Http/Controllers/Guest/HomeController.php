<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Http\Resources\SingleCollection\JadwalKapalSingleCollection;
use App\Models\JadwalKapal;
use App\Models\JenisPenumpang;
use App\Models\Kelas;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $queryJadwal = JadwalKapal::query();

        $jadwalKapal = new JadwalKapalSingleCollection($queryJadwal->with(['rute', 'kapal' => function ($q) {
            $q->with(['daftarHarga' => function ($q) {
                $q->with('jenisPenumpang', 'kelas')->orderBy('kelas_id');
            }]);
        }])->latest()->paginate());
        return inertia('Guest/Home/Home', ['jadwalKapal' => $jadwalKapal]);
    }
}
