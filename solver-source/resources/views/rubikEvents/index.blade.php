@extends('layout')
@section('content')
    @if(session('success'))
        <div>
            <span>{{ session('success') }}</span>
        </div>
    @endif
    <h2>Események</h2>

    @foreach($rubikEvents as $event)
        <div>
            <p><a href="{{ route('rubikEvents.view', $event->id) }}">{{ $event->title }}</p>
        </div>
    @endforeach
@endsection
