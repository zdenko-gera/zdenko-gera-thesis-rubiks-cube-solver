<?php

namespace App\Http\Controllers;

use App\Models\PersonalRecord;
use Faker\Provider\Person;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TimerController extends Controller
{
    public function index(Request $request)
    {
        $personalRecord = null;
        if (Auth::user()) {
            $personalRecord = 0;
            $record = PersonalRecord::query()->where('email', auth()->user()->email)->where('cubeType', '3x3')->orderBy('hour')->orderBy('min')->orderBy('sec')->orderBy('msec')->first();
            $personalRecord = $record;
        }

        return view('timer.index')->with(['personalRecord' => $personalRecord]);

    }
}
