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
        Schema::create('daftar_hargas', function (Blueprint $table) {
            $table->id();

            $table->foreignId('kapal_id');
            $table->integer('harga');
            $table->foreignId('kelas_id');
            $table->foreignId('jenis_penumpang_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('daftar_hargas');
    }
};
