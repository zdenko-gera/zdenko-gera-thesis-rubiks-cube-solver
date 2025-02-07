@extends('layout')
@section('content')
    <main>
        @if (session('status') == 'verification-link-sent')
            <div>
                {{ __('messages.verificationLinkSent') }}
            </div>
        @endif
        <form method="POST" class="auth-form" action="{{ route('verification.send') }}">
            @csrf

            <div>
                {{ __('messages.resendText') }}
            </div>

            <div>
                <button type="submit" class="btn btn-outline-info">
                    {{ __('messages.resendEmailVerification') }}
                </button>
            </div>
        </form>
    </main>
@endsection
