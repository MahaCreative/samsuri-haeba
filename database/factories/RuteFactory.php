<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rute>
 */
class RuteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'kd_rute' => 'kd' . rand(111111, 9999999),
            'kota_awal' => $this->faker->sentence(1),
            'kota_tujuan' => $this->faker->sentence(1),
            'jarak' => $this->faker->sentence(1),
            'waktu_perjalanan' => $this->faker->sentence(1),
        ];
    }
}