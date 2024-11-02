@extends('layout')
@section('content')
<!-- <div id="app"></div> -->
<div id="main-container">
    <div id="color-picker">
        <p>Színválasztó</p>
        <div class="color-sample" id="white-color-picker"></div>
        <div class="color-sample" id="green-color-picker"></div>
        <div class="color-sample" id="red-color-picker"></div>
        <div class="color-sample" id="blue-color-picker"></div>
        <div class="color-sample" id="orange-color-picker"></div>
        <div class="color-sample" id="yellow-color-picker"></div>
    </div>
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
    <div id="cube-rotation-buttons-container">
        <div>
            <button id="front" class="btn btn-outline-primary">F</button>
            <button id="front-backwards" class="btn btn-outline-danger">F'</button>
        </div>
        <div>
            <button id="back" class="btn btn-outline-primary">B</button>
            <button id="back-backwards" class="btn btn-outline-danger">B'</button>
        </div>
        <div>
            <button id="right" class="btn btn-outline-primary">R</button>
            <button id="right-backwards" class="btn btn-outline-danger">R'</button>
        </div>
        <div>
            <button id="left" class="btn btn-outline-primary">L</button>
            <button id="left-backwards" class="btn btn-outline-danger">L'</button>
        </div>
        <div>
            <button id="down" class="btn btn-outline-primary">D</button>
            <button id="down-backwards" class="btn btn-outline-danger">D'</button>
        </div>
        <div>
            <button id="up" class="btn btn-outline-primary">U</button>
            <button id="up-backwards" class="btn btn-outline-danger">U'</button>
        </div>
    </div>
</div>
<div id="cube-buttons-container">
    <button id="solve-button" class="btn btn-primary">START!</button>
    <button id="fill-to-solved-state" class="btn btn-outline-primary">TESZT KITÖLTÉS</button>
    <button id="check-cube" class="btn btn-outline-success">Ellenőrzés</button>
    <button id="submit-cube-button" class="btn btn-secondary">Kocka mentése</button>
</div>
<div id="phase-title"></div>
<div id="instructions"></div>
@endsection
