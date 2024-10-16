<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Rubik's cube solver</title>
    <!-- Fonts -->

    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="{{ URL::asset('js/main.js') }}"></script></head>
<body>
<!-- <div id="app"></div> -->
<header>
    <h3><a href="/">Rubik's cube solver</a></h3>
    <div>
        <a href={{ route('rubikEvents.create') }}>+Esemény</a>
        <a href={{ route('rubikEvents.index') }}>Események</a>
        <a href={{ route('personalRecords.create') }}>+Rekord</a>
        @auth <a href={{ route('personalRecords.mine') }}>Rekordjaim</a> @endauth
        <a href={{ route('cubeInputs') }}>Kocka</a>
        <a href={{ route('login') }}>Bejelentkezés</a>
        <a href={{ route('register') }}>Regisztráció</a>
    </div>
</header>

@yield('content')

<div id="error-msg" class="msg-bubble bg-danger"></div>
<div id="success-msg" class="msg-bubble bg-success"></div>

<footer>

</footer>

</body>
</html>
