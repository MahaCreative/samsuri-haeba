<?php

namespace App\Http\Resources\Singleresource;

use App\Http\Resources\SingleCollection\KapalSingleCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JadwalKapalSingleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'kapal_id' => $this->kapal_id,
            'rute_id' => $this->rute_id,
            'tanggal_berangkat' => $this->tanggal_berangkat,
            'jam_berangkat' => $this->jam_berangkat,
            'status_keberangkatan' => $this->status_keberangkatan,
            'keterangan' => $this->keterangan,
            'kapal' => new KapalSingleCollection($this->whenLoaded('kapal'))
        ];
    }
}
