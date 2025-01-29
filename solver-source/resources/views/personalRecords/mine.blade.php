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
                    {{ $record->hour }}:{{ $record->min }}:{{ $record->sec }}.{{ $record->msec }}
                </div>
                <div>
                    {{ substr($record->created_at,0 , 10) }}
                </div>
                <a href="#" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">{{ __('messages.delete') }}</a>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content bg-dark">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">{{ __('messages.confirmDelete') }}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="modal-flex-body">
                                <form action="{{ route('personalRecords.destroy', $record->id) }}" method="POST">
                                    @csrf
                                    <input type="submit" class="btn btn-success" value="{{ __('messages.confirm') }}">
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">{{ __('messages.cancel') }}</button>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
        @else
            <p>{{ __('messages.noRecord') }}</p>
        @endif
        </div>
    </main>
@endsection
