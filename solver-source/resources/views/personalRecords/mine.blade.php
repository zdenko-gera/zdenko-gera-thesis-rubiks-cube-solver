@extends('layout')
@section('content')
    @if(session('success'))
        <div>
            <span>{{ session('success') }}</span>
        </div>
    @endif
    <main>
        <h2>{{ __('messages.records') }}</h2>
        <a href={{ route('personalRecords.create') }}>{{ __('messages.addRecord') }}</a>
        @if (count($personalRecords) > 0)
        @foreach($personalRecords as $record)
            <div class="py-12">
                {{ $record->cubeType }} -
                {{ $record->hour }}óra
                {{ $record->min }}perc
                {{ $record->sec }}mp
                {{ $record->msec }}ms -
                {{ $record->created_at }}
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
            <a href={{ route('personalRecords.create') }}>{{ __('messages.addRecord') }}</a>
        @endif
    </main>
@endsection
