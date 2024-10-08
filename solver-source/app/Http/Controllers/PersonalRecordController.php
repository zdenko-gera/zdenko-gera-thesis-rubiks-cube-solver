<?php

namespace App\Http\Controllers;

use App\Models\PersonalRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PersonalRecordController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('personalRecords.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'hour' => ['nullable', 'numeric', 'min:0'],
            'min' => ['nullable', 'numeric', 'min:0', 'max:60'],
            'sec' => ['nullable', 'numeric', 'min:0', 'max:60'],
            'msec' => ['nullable', 'numeric', 'min:0', 'max:1000'],
            'cubeType' => ['required', 'string'],
        ]);

        $personalRecord = new PersonalRecord();

        $personalRecord->hour = $request->input('hour');
        $personalRecord->min = $request->input('min');
        $personalRecord->sec = $request->input('sec');
        $personalRecord->msec = $request->input('msec');
        $personalRecord->cubeType = $request->input('cubeType');
        $personalRecord->email = auth()->user()->email;

        $personalRecord->save();

        return redirect()->route('personalRecords.mine')->with(['success' => 'Rekord sikeresen mentve.']);
    }

    /**
     * Display the specified resource.
     */
    public function show(PersonalRecord $personalRecord)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PersonalRecord $personalRecord)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PersonalRecord $personalRecord)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $personalRecord = PersonalRecord::query()->where('id', $id)->where('email', auth()->user()->email)->delete();

        return redirect()->route('personalRecords.mine')->with(['success' => 'Rekord törölve!']);
    }

    /**
     * Lists the logged in user's records.
     */
    public function mine()
    {
        $personalRecords = DB::table('personal_records')->where('email', auth()->user()->email)->orderBy('cubeType', 'desc')->orderBy('hour')->orderBy('min')->orderBy('sec')->orderBy('msec')->get();

        return view('personalRecords.mine')->with(['personalRecords' => $personalRecords]);
    }
}
