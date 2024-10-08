@extends('layout')
@section('content')
    @if(session('success'))
        <div>
            <span>{{ session('success') }}</span>
        </div>
    @endif
    @if(session('error'))
        <div>
            <span>{{ session('error') }}</span>
        </div>
    @endif

    @if ($errors->any())
            @foreach ($errors->all() as $error)
                    <div>{{ $error }}</div>
            @endforeach
    @endif
    <h2>Esemény feltöltése</h2>
    <form action="{{ route('rubikEvents.store') }}" method="post">
        @csrf
        <input type="text" name="title" placeholder="Cím">
        <textarea name="description">Adja meg a részleteket...</textarea>
        <input type="number" name="price" placeholder="Nevezési díj">
        <input type="text" name="award" placeholder="Nyeremény">
        <input type="email" name="email" placeholder="Email elérhetőség">
        <input type="text" name="country" placeholder="Ország">
        <input type="number" name="postalCode" placeholder="Irányítószám">
        <input type="text" name="city" placeholder="Város">
        <input type="text" name="street" placeholder="Utca">
        <input type="text" name="houseNumber" placeholder="Házszám">
        <input type="date" name="fromDate" placeholder="Kezdési időpont">
        <input type="date" name="untilDate" placeholder="Eddig">
        <input type="text" name="url" placeholder="Esemény oldalára vezető URL">

        <button type="submit">Feltöltés</button>
    </form>
@endsection
