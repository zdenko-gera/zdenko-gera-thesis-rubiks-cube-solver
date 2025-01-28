<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Rubik's cube solver @yield('title')</title>
    <!-- Fonts -->

    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/forms.css') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="module" src="{{ URL::asset('js/main.js') }}"></script>
</head>
<body>
<!-- <div id="app"></div> -->
<header>
    <h3 id="header-title"><a href="/">Rubik's cube solver</a></h3>
    <div>
        @if (auth()->check() && auth()->user()->is_admin === 1)<a href={{ route('rubikEvents.create') }}>+{{ __('messages.event') }}</a> @endif
        <a href={{ route('rubikEvents.index') }}>{{ __('messages.events') }}</a>
        @auth <a href={{ route('personalRecords.mine') }}>{{ __('messages.records') }}</a> @endauth
            <div class="dropdown">
                <button class="dropbtn">{{ __('messages.cubeGuide') }}</button>
                <div class="dropdown-content">
                    <a href={{ route('twoByTwoCube') }}>2x2</a>
                    <a href={{ route('classicCube') }}>3x3</a>
                </div>
            </div>
        @guest
            <a href={{ route('login') }}>{{ __('messages.login') }}</a>
            <a href={{ route('register') }}>{{ __('messages.signup') }}</a>
        @endguest
        @auth
            <form method="POST" action="{{ route('logout') }}" id="logout-form">
                @csrf
                <button type="submit" class="btn btn-outline-danger">{{ __('messages.logout') }}</button>
            </form>
        @endauth
    </div>
</header>

@yield('content')

<div id="error-msg" class="msg-bubble bg-danger"></div>
<div id="success-msg" class="msg-bubble bg-success"></div>

@if(session('language_switched'))
    <div id="info-msg" class="msg-bubble bg-info block">{{ __('messages.languageSwitched') }}{{ session('language_switched') === 'hu' ? __('messages.hungarian') : (session('language_switched') === 'en' ? __('messages.english') : '') }}</div>
@endif

<footer>
    <div id="language-switch">
        @include('components.language-switch')
    </div>
    {{ __('messages.thesisWork') }} | <a href="https://u-szeged.hu/" target="_blank">{{ __('messages.szte') }}</a> | 2025.
</footer>

</body>
</html>
