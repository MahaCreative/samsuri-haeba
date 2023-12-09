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
        Schema::create('garasis', function (Blueprint $table) {
            $table->id();
            $table->string('nama_garasi');
            $table->integer('harga_garasi');
            $table->integer('min_berat');
            $table->integer('max_berat');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('garasis');
    }
};
