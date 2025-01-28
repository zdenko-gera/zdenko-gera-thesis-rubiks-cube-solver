@extends('layout')
@section('content')
        <main>
            <h1 class="landing-title">
                {{ __('messages.rubiksCubeGuide') }}
            </h1>
            <a href="{{ route('classicCube') }}" class="to-cube-btn">{{ __('messages.begin') }}</a>
        </main>
@endsection
