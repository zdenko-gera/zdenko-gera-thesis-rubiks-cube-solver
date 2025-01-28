@extends('layout')
@section('content')
<main>
    <form method="POST" class="auth-form" action="{{ route('login') }}">
        @csrf

        <h2>{{ __('messages.login') }}</h2>

        <!-- Email Address -->
        <div class="form-group">
            <label for="email" class="form-label">{{ __('messages.email') }}</label>
            <input id="email" class="form-control" type="email" name="email" value="{{ old('email') }}" required autofocus autocomplete="username" placeholder="{{ __('messages.exampleEmail') }}" />
        </div>

        <!-- Password -->
        <div class="form-group">
            <label for="password" class="form-label">{{ __('messages.password') }}</label>

            <input id="password"
                            type="password"
                            class="form-control"
                            placeholder="{{ __('messages.password') }}"
                            name="password"
                            required autocomplete="current-password" />
        </div>

        <!-- Remember Me -->
        <div class="form-group">
            <label for="remember_me" class="form-label">
                <input id="remember_me" type="checkbox" class="form-check-input" name="remember">
                <span class="ms-2 text-sm text-gray-600">{{ __('messages.rememberMe') }}</span>
            </label>
        </div>

        <div>
            @if (Route::has('password.request'))
                <a href="{{ route('password.request') }}">
                    {{ __('messages.forgotPassword') }}
                </a>
            @endif
        </div>
        <div>
            <button type="submit" class="btn btn-primary">
                {{ __('messages.login') }}
            </button>
        </div>
    </form>
</main>
@endsection
