<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\JenisKapal;
use App\Models\Kapal;
use App\Models\Kelas;
use App\Models\Rute;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $kelas = DB::table('kelas')->insert([
            [
                'nama' => 'BISNIS'
            ],
            [
                'nama' => 'EKONOMI'
            ],
            [
                'nama' => 'BIASA'
            ],
        ]);
        $jenisKapal = DB::table('jenis_kapals')->insert([
            [
                'nama' => 'nelayan'
            ],
            [
                'nama' => 'feri'
            ],
            [
                'nama' => 'anu'
            ],
        ]);
        $jenisKapal = DB::table('jenis_penumpangs')->insert([
            [
                'nama' => 'bayi'
            ],
            [
                'nama' => 'remaja'
            ],
            [
                'nama' => 'dewasa'
            ],

        ]);
        Kapal::factory(5)->create();
        Rute::factory(3)->create();
    }
}
