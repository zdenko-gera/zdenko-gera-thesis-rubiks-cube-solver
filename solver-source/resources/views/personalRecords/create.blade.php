@extends('layout')
@section('content')
    @if(session('success'))
        <div>
            <span>{{ session('success') }}</span>
        </div>
    @endif
    @if(session('error'))
        <div>
            <span>{{ session('error') }}</span>
        </div>
    @endif

    @if ($errors->any())
        @foreach ($errors->all() as $error)
            <div>{{ $error }}</div>
        @endforeach
    @endif
    <h2>Új személyes rekord rögzítése</h2>
    <form action="{{ route('personalRecords.store') }}" method="post">
        @csrf
        <input type="number" name="hour" placeholder="Óra" min="0" max="1000" value="0">
        <input type="number" name="min" placeholder="Perc" min="0" max="10000" value="0">
        <input type="number" name="sec" placeholder="Mp" max="59" min="0" value="0">
        <input type="number" name="msec" placeholder="Msec" max="1000" min="0" value="0">
        <label for="cubeType">Kocka típusa: </label>
        <select name="cubeType">
            <option value="3x3">3x3</option>
            <option value="2x2">2x2</option>
        </select>

        <button type="submit">Mentés</button>
    </form>
@endsection
