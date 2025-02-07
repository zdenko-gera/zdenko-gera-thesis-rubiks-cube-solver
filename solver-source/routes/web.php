<?php

use App\Http\Controllers\PersonalRecordController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RubikEventController;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\TimerController;
use App\Http\Middleware\Admin;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

Route::get('/', function () {
    return view('index');
})->name('landing');

Route::get('/classicCube', function () {
    return view('classicCube');
})->name('classicCube');

Route::get('/twoByTwoCube', function () {
    return view('twoByTwoCube');
})->name('twoByTwoCube');

Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return view('index');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with('success', 'Hitelesítő email elküldve!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

//events ***
Route::get('/events', [RubikEventController::class, 'index'])->name('rubikEvents.index');
Route::get('/event/{id}', [RubikEventController::class, 'view'])->name('rubikEvents.view');
//END-events ***

//records ***
Route::get('/ranking', [PersonalRecordController::class, 'ranking'])->name('personalRecords.ranking');
//END-records ***


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //records ***
    Route::get('/add-record', [PersonalRecordController::class, 'create'])->name('personalRecords.create');
    Route::post('/add-record', [PersonalRecordController::class, 'store'])->name('personalRecords.store');
    Route::get('/my-records', [PersonalRecordController::class, 'mine'])->name('personalRecords.mine');
    Route::post('/delete-record/{id}', [PersonalRecordController::class, 'destroy'])->name('personalRecords.destroy');
    //END-records ***
});

// *** events ***
Route::get('/add-event', [RubikEventController::class, 'create'])->middleware(Admin::class)->name('rubikEvents.create');
Route::post('/add-event', [RubikEventController::class, 'store'])->middleware(Admin::class)->name('rubikEvents.store');
// *** END events ***

Route::get('/timer', [TimerController::class, 'index'])->name('timer');


Route::post('/language-switch', [LanguageController::class, 'languageSwitch'])->name('language.switch');

require __DIR__.'/auth.php';
