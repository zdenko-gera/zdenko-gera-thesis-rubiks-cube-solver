@extends('layout')
@section('content')
<!-- <div id="app"></div> -->
<aside>
    <div id="color-picker">
        <p>Színválasztó</p>
        <div class="color-sample" id="white-color-picker"></div>
        <div class="color-sample" id="green-color-picker"></div>
        <div class="color-sample" id="red-color-picker"></div>
        <div class="color-sample" id="blue-color-picker"></div>
        <div class="color-sample" id="orange-color-picker"></div>
        <div class="color-sample" id="yellow-color-picker"></div>
    </div>
</aside>
<main>
    <div id="cube-container">
        <div class="side alone-side" id="green-side">
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker green-middle-sticker middle-sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
        </div>
    <div>
        <div class="side" id="orange-side">
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker orange-middle-sticker middle-sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
        </div>
        <div class="side" id="white-side">
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker white-middle-sticker middle-sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
        </div>
        <div class="side" id="red-side">
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker red-middle-sticker middle-sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
        </div>
        <div class="side" id="yellow-side">
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker yellow-middle-sticker middle-sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
        </div>
    </div>
        <div class="side alone-side" id="blue-side">
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker blue-middle-sticker middle-sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
            <div class="sticker"></div>
        </div>
    </div>
    <button id="front">F</button>
    <button id="front-backwards">F'</button>
    <button id="right">R</button>
    <button id="right-backwards">R'</button>
    <button id="left">L</button>
    <button id="left-backwards">L'</button>
    <button id="down">D</button>
    <button id="down-backwards">D'</button>
    <button id="up">U</button>
    <button id="up-backwards">U'</button>
    <button id="submit-cube-button">Kezdés</button>
    <button id="fill-to-solved-state">TESZT KITÖLTÉS</button>
</main>
@endsection
