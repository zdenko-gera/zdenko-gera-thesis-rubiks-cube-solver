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
        Schema::create('personal_records', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger('hour')->default(0);
            $table->tinyInteger('min')->default(0);
            $table->tinyInteger('sec')->default(0);
            $table->tinyInteger('msec')->default(0);
            $table->string('cubeType');
            $table->string('email');
            $table->foreign('email')->references('email')->on('users')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personal_records');
    }
};
