<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Rubik's cube solver</title>
    <!-- Fonts -->

    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
</head>
<body class="font-sans antialiased dark:bg-black dark:text-white/50">
<!-- <div id="app"></div> -->
<header>
    <h1><a href="/">Rubik's cube solver</a></h1>
    <div>
        <a href={{ route('rubikEvents.create') }}>+Esemény</a>
        <a href={{ route('rubikEvents.index') }}>Események</a>
        <a href={{ route('cubeInputs') }}>Kocka</a>
        <a href={{ route('login') }}>Bejelentkezés</a>
        <a href={{ route('register') }}>Regisztráció</a>
    </div>
</header>

@yield('content')

<footer>

</footer>
