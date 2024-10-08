<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RubikEventController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/cubeInputs', function () {
    return view('cubeInputs');
})->name('cubeInputs');

Route::get('/events', [RubikEventController::class, 'index'])->name('rubikEvents.index');
Route::get('/add-event', [RubikEventController::class, 'create'])->name('rubikEvents.create');
Route::post('/add-event', [RubikEventController::class, 'store'])->name('rubikEvents.store');

Route::get('/event/{id}', [RubikEventController::class, 'view'])->name('rubikEvents.view');



Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
