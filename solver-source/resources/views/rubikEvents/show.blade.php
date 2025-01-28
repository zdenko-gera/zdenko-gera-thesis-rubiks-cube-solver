@extends('layout')
@section('content')
    <main>
    <div id="event-show-container">
        <h2 class="subpage-title">{{ $rubikEvent->title }}</h2>
        <p>{{ $rubikEvent->description }}</p>
        <div>
            <p><b>{{ __('messages.registrationFee') }}:</b> EUR {{ $rubikEvent->price }}</p>
            <p><b>{{ __('messages.prize') }}:</b> {{ $rubikEvent->award }}</p>
            <p><b>{{ __('messages.location') }}:</b> {{ $rubikEvent->country }} {{ $rubikEvent->postalCode }}, {{ $rubikEvent->city }} {{ $rubikEvent->street }} {{ $rubikEvent->houseNumber }}</p>
            <p><b>{{ __('messages.date') }}:</b> {{ date('Y.m.d.', strtotime($rubikEvent->fromDate)) }}@if(isset($rubikEvent->untilDate)) - {{ date('Y.m.d.', strtotime($rubikEvent->untilDate)) }}@endif</p>
            <p><b>{{ __('messages.contact') }}:</b> <a href="mailto:{{$rubikEvent->email}}">{{ $rubikEvent->email }}</a></p>
            <p><a href="{{$rubikEvent->url}}" target="_blank" class="btn btn-outline-info">{{ __('messages.eventWebsite') }}</a></p>
        </div>
    </div>
    </main>
@endsection
