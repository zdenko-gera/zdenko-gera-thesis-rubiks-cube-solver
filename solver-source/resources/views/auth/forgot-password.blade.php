@extends('layout')
@section('content')
<main>
    <form method="POST" class="auth-form" action="{{ route('password.email') }}">
        @csrf

        <div>
            {{ __('messages.forgotPasswordSiteInfo') }}
        </div>

        <!-- Email Address -->
        <div>
            <label for="email">{{ __('messages.email') }}</label>
            <input id="email" type="email" name="email" value="{{ old('email') }}" required autofocus />
        </div>

        <div>
            <button type="submit">
                {{ __('messages.passwordResetLink') }}
            </button>
        </div>
    </form>
</main>
@endsection
