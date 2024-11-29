<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Rubik's cube solver</title>
    <!-- Fonts -->

    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/forms.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap" rel="stylesheet">
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="module" src="{{ URL::asset('js/main.js') }}"></script>
</head>
<body>
<!-- <div id="app"></div> -->
<header>
    <h3 id="header-title"><a href="/">Rubik's cube solver</a></h3>
    <div>
        @if (auth()->check() && auth()->user()->is_admin === 1)<a href={{ route('rubikEvents.create') }}>+Esemény</a> @endif
        <a href={{ route('rubikEvents.index') }}>Események</a>
        @auth <a href={{ route('personalRecords.mine') }}>Rekordjaim</a> @endauth
        <a href={{ route('cubeInputs') }}>Kocka</a>
        @guest
            <a href={{ route('login') }}>Bejelentkezés</a>
            <a href={{ route('register') }}>Regisztráció</a>
        @endguest
        @auth
            <form method="POST" action="{{ route('logout') }}" id="logout-form">
                @csrf
                <button type="submit" class="btn btn-outline-danger">Kijelentkezés</button>
            </form>
        @endauth
    </div>
</header>

@yield('content')

<div id="error-msg" class="msg-bubble bg-danger"></div>
<div id="success-msg" class="msg-bubble bg-success"></div>

<footer>

</footer>

</body>
</html>
