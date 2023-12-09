<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DaftarHarga extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function kapal()
    {
        return $this->belongsTo(Kapal::class);
    }
    public function kelas()
    {
        return $this->belongsTo(Kelas::class);
    }
    public function jenisPenumpang()
    {
        return $this->belongsTo(JenisPenumpang::class);
    }
}
