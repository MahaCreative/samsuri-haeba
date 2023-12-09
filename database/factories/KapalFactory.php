<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kapal>
 */
class KapalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'jenis_kapal_id' => rand(1, 3),
            'nama_kapal' => $this->faker->sentence(2),
            'kapasitas' => 2000,
            'fasilitas_umum' => 'wifi, toilet umum',
            'foto' => 'gambar/kapal/IfLwJKss5pBf7viNQ2Dtat3n3Emj1axFnnHkBptg.jpg',
        ];
    }
}
