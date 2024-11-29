@extends('layout')
@section('content')
    @if(session('success'))
        <div>
            <span>{{ session('success') }}</span>
        </div>
    @endif
    <h2 class="subpage-title">Események</h2>

    @foreach($rubikEvents as $event)
        <a href="{{ route('rubikEvents.view', $event->id) }}" class="event-list-container">
            <p class="event-list-title">{{ $event->title }}</p>
            <p>{{ $event->country }} {{ $event->city }} - {{ date('Y.m.d.', strtotime($event->fromDate)) }}</p>
        </a>
    @endforeach
@endsection
