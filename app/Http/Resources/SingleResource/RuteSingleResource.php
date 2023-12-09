<?php

namespace App\Http\Resources\SingleResource;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RuteSingleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'kd_rute' => $this->kd_rute,
            'kota_awal' => $this->kota_awal,
            'kota_tujuan' => $this->kota_tujuan,
            'created' => $this->created_at->diffForHumans(),
        ];
    }
}