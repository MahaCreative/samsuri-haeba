<?php

namespace App\Http\Resources\SingleCollection;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PesananSingleCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection,
            'filter' => [
                'search' => $request->search ?? '',
                'page' => $request->page ?? 1,
            ],
        ];
    }
}
