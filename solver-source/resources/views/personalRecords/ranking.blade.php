@extends('layout')
@section('content')
    <h2>Globális ranglista</h2>
    @if (count($personalRecords) > 0)
        @foreach($personalRecords as $record)
            <div class="py-12">
                {{ $record->cubeType }} -
                {{ $record->hour }}óra
                {{ $record->min }}perc
                {{ $record->sec }}mp
                {{ $record->msec }}ms -
                {{ $record->created_at }}
                Felhasználó: {{ $record->email }}
            </div>
        @endforeach
    @else
        <p>Nincs megjeleníthető adat a ranglistában.</p>
    @endif
@endsection
