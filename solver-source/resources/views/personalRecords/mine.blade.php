@extends('layout')
@section('content')
    @if(session('success'))
        <div>
            <span>{{ session('success') }}</span>
        </div>
    @endif
    <h2>Rekordjaim</h2>
    @if (count($personalRecords) > 0)
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Biztosan törölni szeretnéd a rekordot?</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-flex-body">
                            <form action="{{ route('personalRecords.destroy', $record->id) }}" method="POST">
                                @csrf
                                <input type="submit" class="btn btn-success" value="Megerősítem">
                            </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Mégse</button>
                    </div>
                </div>
            </div>
        </div>
    @foreach($personalRecords as $record)
        <div class="py-12">
            {{ $record->cubeType }} -
            {{ $record->hour }}óra
            {{ $record->min }}perc
            {{ $record->sec }}mp
            {{ $record->msec }}ms -
            {{ $record->created_at }}
            <a href="#" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Törlés</a>
        </div>
    @endforeach
    @else
        <p>Még nincs mentett rekordod!</p>
    @endif
@endsection
