<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Rubic's cube solver</title>

        <!-- Fonts -->

        <!-- Styles -->
        <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
    </head>
    <body class="font-sans antialiased dark:bg-black dark:text-white/50">
        <!-- <div id="app"></div> -->
        <header>
            <h1>Rubik's cube solver</h1>
            <div>
                <a href={{ route('events.index') }}>Események</a>
                <a href={{ route('login') }}>Bejelentkezés</a>
                <a href={{ route('register') }}>Regisztráció</a>
            </div>
        </header>
        <main>
            <div>
                Rubik's cube solver - Rubik kocka megoldását segítő app
            </div>
        </main>
        <footer>

        </footer>

    </body>
</html>
