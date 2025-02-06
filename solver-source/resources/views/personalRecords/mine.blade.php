@extends('layout')
@section('content')
    <main>
        <h2 class="subpage-title">{{ __('messages.records') }}</h2>
        <div class="records-wrapper">
            <a class="btn btn-info" id="add-record-btn" href="#"}>{{ __('messages.addRecord') }}</a>
            <form action="{{ route('personalRecords.store') }}" method="post" id="add-record-form">
                @csrf
                <div>
                    <input type="number" name="hour" placeholder="{{ __('messages.hour') }}" min="0" max="1000" value="0">{{ __('messages.hour') }}
                    <input type="number" name="min" placeholder="{{ __('messages.min') }}" min="0" max="59" value="0">{{ __('messages.min') }}
                    <input type="number" name="sec" placeholder="{{ __('messages.sec') }}" max="59" min="0" value="0">{{ __('messages.sec') }}
                    <input type="number" name="msec" placeholder="msec" max="1000" min="0" value="0">msec
                </div>
                <div>
                    <label for="cubeType">{{ __('messages.cubeType') }}: </label>
                    <select name="cubeType">
                        <option value="3x3">3x3</option>
                        <option value="2x2">2x2</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-success">{{ __('messages.save') }}</button>
            </form>

        @if (count($personalRecords) > 0)
            @foreach($personalRecords as $record)
            <div class="record">
                <div>
                    {{ $record->cubeType }}
                </div>
                <div>
                    {{ $record->hour < 10 ? '0' . $record->hour : $record->hour }}:{{ $record->min < 10 ? '0' . $record->min : $record->min }}:{{ $record->sec < 10 ? '0' . $record->sec : $record->sec }}.{{ ($record->msec < 10 ? '00' . $record->msec : ($record->msec < 100 ? '0' . $record->msec : $record->msec)) }}
                </div>
                <div>
                    {{ substr($record->created_at,0 , 10) }}
                </div>
                <form action=""></form>
                <form action="{{ route('personalRecords.destroy', $record->id) }}" method="POST">
                    @csrf
                    <input type="submit" class="btn btn-sm btn-danger delete-pr-btn" value="{{ __('messages.delete') }}">
                </form>
            </div>
        @endforeach
        @else
            <p>{{ __('messages.noRecord') }}</p>
        @endif
        </div>
    </main>
@endsection
