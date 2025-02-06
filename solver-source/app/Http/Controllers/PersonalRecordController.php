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
        $personalRecord->sumTimeInMsec = $personalRecord->hour * 3600000 + $personalRecord->min * 60000 + $personalRecord->sec * 1000 + $personalRecord->msec;
        $personalRecord->email = auth()->user()->email;

        if ($personalRecord->hour > 0 || $personalRecord->min > 0 || $personalRecord->sec > 0 || $personalRecord->msec > 0) {
            $personalRecord->save();
            return redirect()->route('personalRecords.mine')->with(['success' => __('messages.recordSaved')]);
        } else {
            return redirect()->route('personalRecords.mine')->with(['error' => __('messages.recordSavedError')]);
        }
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

        return redirect()->route('personalRecords.mine')->with(['success' => __('messages.recordDeleted')]);
    }

    /**
     * Lists the logged in user's records.
     */
    public function mine()
    {
        $personalRecords = DB::table('personal_records')->where('email', auth()->user()->email)->orderBy('cubeType', 'desc')->orderBy('hour')->orderBy('min')->orderBy('sec')->orderBy('msec')->get();

        return view('personalRecords.mine')->with(['personalRecords' => $personalRecords]);
    }

    /**
     * Ranks records globally.
     */
    public function ranking()
    {
        /*$personalRecords = DB::table('personal_records')
            ->selectRaw('hour, min, sec, msec, cubeType, min(sumTimeInMsec), email, created_at')
            ->groupBy('email', 'cubeType', 'hour', 'min', 'sec', 'msec', 'created_at')
            ->orderBy('cubeType', 'asc')
            ->orderBy('sumTimeInMsec')
            ->get();*/

        $personalRecords = DB::select("SELECT pr1.*
        FROM personal_records pr1
        INNER JOIN (
            SELECT email, MIN(sumTimeInMsec) as minSumTime
            FROM personal_records
            GROUP BY email
        ) pr2 ON pr1.email = pr2.email AND pr1.sumTimeInMsec = pr2.minSumTime;");

        return view('personalRecords.ranking')->with(['personalRecords' => $personalRecords]);
    }
}
