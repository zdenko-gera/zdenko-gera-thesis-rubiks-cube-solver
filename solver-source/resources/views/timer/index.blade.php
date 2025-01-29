@extends('layout')
@section('title', '- ' . __('messages.timer'))
@section('content')
<main>
    <h2 align="center">{{ __('messages.timer') }}</h2>
    <div id="timer">
        <p id="timer-display">00:00:00.000</p>
        @if (isset($personalRecord))
        <div id="best-time-until-now">
            {{ __('messages.bestUntilNow') }}: {{ $personalRecord->hour < 10 ? '0' . $personalRecord->hour : $personalRecord->hour }}:{{ $personalRecord->min < 10 ? '0' . $personalRecord->min : $personalRecord->min }}:{{ $personalRecord->sec < 10 ? '0' . $personalRecord->sec : $personalRecord->sec }}.{{ ($personalRecord->msec < 10 ? '00' . $personalRecord->msec : ($personalRecord->msec < 100 ? '0' . $personalRecord->msec : $personalRecord->msec)) }}
            <span class="hidden" id="sum-in-msec">{{ $personalRecord->sumTimeInMsec }}</span>
        </div>
        @endif
        <div class="timer-buttons">
            <button class="btn btn-success" id="timer-start-btn" title="Ctrl + Space"><i class="fa fa-play"></i> Start</button>
            <button class="btn btn-outline-secondary" id="timer-pause-btn" title="Space"><i class="fa fa-pause"></i> Pause</button>
            <button class="btn btn-outline-danger" id="timer-reset-btn">Reset</button>
        </div>
    </div>
    <form action="{{ route('personalRecords.store') }}" method="post" id="add-record-form" class="timer-add-record-form">
        @csrf
        <h3 align="center" class="m-5">{{ __('messages.fasterThanEver') }}</h3>
        <div id="time-inputs">
            <input type="number" name="hour" placeholder="{{ __('messages.hour') }}" min="0" max="1000" value="0">{{ __('messages.hour') }}
            <input type="number" name="min" placeholder="{{ __('messages.min') }}" min="0" max="59" value="0">{{ __('messages.min') }}
            <input type="number" name="sec" placeholder="{{ __('messages.sec') }}" max="59" min="0" value="0">{{ __('messages.sec') }}
            <input type="number" name="msec" placeholder="msec" max="1000" min="0" value="0">msec
        </div>
        <div>
            <label for="cubeType">{{ __('messages.cubeType') }}: </label>
            <select name="cubeType">
                <option value="3x3">3x3</option>
                <option value="2x2">2x2</option>
            </select>
        </div>
        <button type="submit" class="btn btn-success">{{ __('messages.save') }}</button>
        <button type="button" class="btn btn-outline-danger" id="cancel-record-save">{{ __('messages.cancel') }}</button>
    </form>
</main>
@endsection
