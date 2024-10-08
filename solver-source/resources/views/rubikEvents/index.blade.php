@extends('layout')
@section('content')
    @if(session('success'))
        <div>
            <span>{{ session('success') }}</span>
        </div>
    @endif
    <h2>Események</h2>
    @foreach($rubikEvents as $event)
        <p><?= $event->title ?></p>
    @endforeach
@endsection
