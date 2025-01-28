@extends('layout')
@section('content')
<main>
    <h2>{{ __('messages.globalRanking') }}</h2>
    @if (count($personalRecords) > 0)
        @foreach($personalRecords as $record)
            <div class="py-12">
                {{ $record->cubeType }} - {{ $record->hour . ':' }}{{ $record->min . ':' }}{{ $record->sec . '.' }}{{ $record->msec }} -
                {{ __('messages.user') }}: {{ $record->email }}
            </div>
        @endforeach
    @else
        <p>{{ __('messages.noDataToDisplay') }}</p>
    @endif
</main>
@endsection
