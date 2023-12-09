<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JadwalKapal extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function kapal()
    {
        return $this->belongsTo(Kapal::class);
    }
    public function rute()
    {
        return $this->belongsTo(Rute::class);
    }
}
