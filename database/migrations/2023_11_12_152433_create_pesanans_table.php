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
        Schema::create('pesanans', function (Blueprint $table) {
            $table->id();
            $table->foreignId('jadwal_kapal_id');
            $table->foreignId('user_id');
            $table->foreignId('petugas_id');
            $table->string('kd_pesanan');
            $table->float('total_harga')->default(0);
            $table->integer('jumlah_penumpang')->default(0);
            $table->string('tgl_pemesanan');
            $table->string('status_pesanan')->default('pending');
            $table->string('tgl_pembayaran')->nullable();
            $table->string('status_pembayaran')->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pesanans');
    }
};
