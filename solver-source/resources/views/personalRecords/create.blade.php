@extends('layout')
@section('content')
    <main>
    <h2>Új személyes rekord rögzítése</h2>
    <form action="{{ route('personalRecords.store') }}" method="post" class="bg-light">
        @csrf
        <input type="number" name="hour" placeholder="{{ __('messages.hour') }}" min="0" max="1000" value="0">{{ __('messages.hour') }}
        <input type="number" name="min" placeholder="{{ __('messages.min') }}" min="0" max="10000" value="0">{{ __('messages.min') }}
        <input type="number" name="sec" placeholder="{{ __('messages.sec') }}" max="59" min="0" value="0">{{ __('messages.sec') }}
        <input type="number" name="msec" placeholder="msec" max="1000" min="0" value="0">msec
        <br />
        <label for="cubeType">{{ __('messages.cubeType') }}: </label>
        <select name="cubeType">
            <option value="3x3">3x3</option>
            <option value="2x2">2x2</option>
        </select>
        <br />
        <button type="submit" class="btn btn-success">{{ __('messages.save') }}</button>
    </form>
    </main>
@endsection
