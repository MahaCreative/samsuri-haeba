<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kapal extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function jenisKapal()
    {
        return $this->belongsTo(JenisKapal::class);
    }

    public function daftarHarga()
    {
        return $this->hasMany(DaftarHarga::class);
    }
}
