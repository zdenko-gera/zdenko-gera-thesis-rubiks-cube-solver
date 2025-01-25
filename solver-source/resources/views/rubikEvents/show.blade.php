@extends('layout')
@section('content')
    <main>
    <div id="event-show-container">
        <h2 class="subpage-title">{{ $rubikEvent->title }}</h2>
        <p>{{ $rubikEvent->description }}</p>
        <div>
            <p><b>Regisztrációs díj:</b> {{ $rubikEvent->price }} HUF</p>
            <p><b>Első helyezett nyereménye:</b> {{ $rubikEvent->award }} HUF</p>
            <p><b>Helyszín:</b> {{ $rubikEvent->country }} {{ $rubikEvent->postalCode }}, {{ $rubikEvent->city }} {{ $rubikEvent->street }} {{ $rubikEvent->houseNumber }}</p>
            <p><b>Dátum:</b> {{ date('Y.m.d.', strtotime($rubikEvent->fromDate)) }}@if(isset($rubikEvent->untilDate)) - {{ date('Y.m.d.', strtotime($rubikEvent->untilDate)) }}@endif</p>
            <p><b>Kapcsolat:</b> <a href="mailto:{{$rubikEvent->email}}">{{ $rubikEvent->email }}</a></p>
            <p><a href="{{$rubikEvent->url}}" target="_blank" class="btn btn-outline-info">Esemény weboldala</a></p>
        </div>
    </div>
    </main>
@endsection
