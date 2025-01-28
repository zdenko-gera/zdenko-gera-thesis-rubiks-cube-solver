@extends('layout')
@section('content')
<main>
    <form method="POST" class="auth-form" action="{{ route('register') }}">
        @csrf

        <h2>{{ __('messages.signup') }}</h2>

        <!-- Name -->
        <div class="form-group">
            <label for="name" class="form-label">{{ __('messages.name') }}</label>
            <input id="name" class="form-control" type="text" name="name" value="{{ old('name') }}" required autofocus autocomplete="name" placeholder="{{ __('messages.name') }}"/>
        </div>

        <!-- Email Address -->
        <div class="form-group">
            <label for="email" class="form-label">{{ __('messages.email') }}</label>
            <input id="email" class="form-control" type="email" name="email" value="{{ old('email') }}" required autocomplete="username" placeholder="{{ __('messages.exampleEmail') }}"/>
        </div>

        <!-- Password -->
        <div class="form-group">
            <label for="password" class="form-label">{{ __('messages.password') }}</label>
            <input id="password"
                            type="password"
                            class="form-control"
                            name="password"
                            placeholder="{{ __('messages.password') }}"
                            required autocomplete="new-password" />
        </div>

        <!-- Confirm Password -->
        <div class="form-group">
            <label for="password_confirmation" class="form-label">{{ __('messages.confirmPassword') }}</label>

            <input id="password_confirmation"
                            class="form-control"
                            type="password"
                            placeholder="{{ __('messages.confirmPassword') }}"
                            name="password_confirmation" required autocomplete="new-password" />
        </div>

        <div class="form-group">
            <a href="{{ route('login') }}">
                {{ __('messages.alreadyRegistered') }}
            </a>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary">
                {{ __('messages.signup') }}
            </button>
        </div>
    </form>
</main>
@endsection
