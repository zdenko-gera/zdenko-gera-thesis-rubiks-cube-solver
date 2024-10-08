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
        Schema::create('rubik_events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->integer('price');
            $table->string('award');
            $table->string('email');
            $table->string('country');
            $table->string('postalCode');
            $table->string('city');
            $table->string('street');
            $table->mediumInteger('houseNumber');
            $table->dateTime('fromDate');
            $table->dateTime('untilDate');
            $table->string('url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rubik_events');
    }
};
