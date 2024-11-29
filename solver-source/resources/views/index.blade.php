@extends('layout')
@section('content')
        <main>
            <h1 class="landing-title">
                Rubik kocka útmutató
            </h1>
            <h5>
                Készítette: Gera Zdenkó
            </h5>
            <div class="spinning-cube-container">
                <div class="spinning-cube">
                    <div class="face spinning-front"></div>
                    <div class="face spinning-back"></div>
                    <div class="face spinning-right"></div>
                    <div class="face spinning-left"></div>
                    <div class="face spinning-top"></div>
                    <div class="face spinning-bottom"></div>
                </div>
            </div>
            <a href="{{ route('cubeInputs') }}" class="to-cube-btn">Gyerünk!</a>
        </main>
@endsection
