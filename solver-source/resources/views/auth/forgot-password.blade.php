@extends('layout')
@section('content')
<main>
    <div>
        {{ __('messages.forgotPasswordSiteInfo') }}
    </div>

    <form method="POST" action="{{ route('password.email') }}">
        @csrf

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
