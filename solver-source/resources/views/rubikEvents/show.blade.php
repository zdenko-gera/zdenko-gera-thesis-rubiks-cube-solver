@extends('layout')
@section('content')
    <div>
        <p>{{ $rubikEvent->title }}</p>
        <p>{{ $rubikEvent->description }}</p>
        <p>Kapcsolat: <a href="mailto:{{$rubikEvent->email}}">{{ $rubikEvent->email }}</a></p>
        <p>Weboldal: <a href="{{$rubikEvent->url}}" target="_blank">{{ $rubikEvent->url }}</a></p>
    </div>

@endsection
