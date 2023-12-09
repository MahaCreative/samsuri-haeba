<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jadwal_kapals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kapal_id');
            $table->foreignId('rute_id');
            $table->date('tanggal_berangkat');
            $table->time('jam_berangkat');
            $table->text('status_keberangkatan');
            $table->text('keterangan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jadwal_kapals');
    }
};
