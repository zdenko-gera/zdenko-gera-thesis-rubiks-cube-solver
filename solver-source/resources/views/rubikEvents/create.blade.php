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
    <h2 class="subpage-title">Esemény létrehozása</h2>
    <form action="{{ route('rubikEvents.store') }}" method="post" class="upload-form">
        @csrf
        <label for="title" class="form-label">Esemény megnevezése</label>
        <input type="text" name="title" class="form-control bg-dark text-white" placeholder="pl. Országos Rubik kocka verseny">
        <label for="description" class="form-label">Részletek</label>
        <textarea name="description" class="form-control bg-dark text-white"></textarea>
        <label for="price" class="form-label">Nevezési díj</label>
        <input type="number" name="price" placeholder="pl. 5000" class="form-control bg-dark text-white">
        <label for="award" class="form-label">Nyeremény</label>
        <input type="text" name="award" placeholder="pl. MacBook Pro, 50000Ft" class="form-control bg-dark text-white">
        <label for="email" class="form-label">Kapcsolattartó email-es elérhetősége</label>
        <input type="email" name="email" placeholder="valaki@pelda.hu" class="form-control bg-dark text-white">
        <label for="country" class="form-label">Ország</label>
        <input type="text" name="country" placeholder="Magyarország" class="form-control bg-dark text-white">
        <label for="postalCode" class="form-label">Irányítószám</label>
        <input type="number" name="postalCode" placeholder="pl. 6725" class="form-control bg-dark text-white">
        <label for="city" class="form-label">Város</label>
        <input type="text" name="city" placeholder="pl. Szeged" class="form-control bg-dark text-white">
        <label for="street" class="form-label">Utca</label>
        <input type="text" name="street" placeholder="pl. Tisza Lajos krt." class="form-control bg-dark text-white">
        <label for="houseNumber" class="form-label">Házszám</label>
        <input type="text" name="houseNumber" placeholder="pl. 10" class="form-control bg-dark text-white">
        <label for="fromDate" class="form-label">Kezdési dátum</label>
        <input type="date" name="fromDate" class="form-control bg-dark text-white">
        <label for="untilDate" aria-describedby="untilDateHelp" class="form-label">Befejező dátum</label>
        <input type="date" name="untilDate" class="form-control bg-dark text-white">
        <div id="untilDateHelp" class="form-text text-secondary">Ha a rendezvény egy napos, hagyd üresen ezt a mezőt.</div>
        <label for="url" class="form-label">Esemény weboldalára vezető URL</label>
        <input type="text" name="url" placeholder="pl. https://egylink.hu" class="form-control bg-dark text-white">

        <button type="submit" class="btn btn-info">Feltöltés</button>
    </form>
@endsection
