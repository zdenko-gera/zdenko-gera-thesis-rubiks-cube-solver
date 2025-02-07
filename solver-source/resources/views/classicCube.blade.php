@extends('layout')
@section('title', '- 3x3 kocka')
@section('content')
<!-- <div id="app"></div> -->
<main>
    <div id="dimension-selector-wrapper">
        <button class="dim-option active-dim-option" id="2-dim">2D</button>
        <button class="dim-option" id="3-dim">3D</button>
    </div>
<div id="main-container">
    <div id="color-picker">
        <p>{{ __('messages.colorPicker') }}</p>
        <div class="color-sample" id="white-color-picker"></div>
        <div class="color-sample" id="green-color-picker"></div>
        <div class="color-sample" id="red-color-picker"></div>
        <div class="color-sample" id="blue-color-picker"></div>
        <div class="color-sample" id="orange-color-picker"></div>
        <div class="color-sample" id="yellow-color-picker"></div>
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
    </div>
    <div id="cube-buttons-container">
        <button id="fill-to-solved-state" class="btn btn-outline-primary">TESZT KITÖLTÉS</button>
        <button id="check-cube" class="btn btn-outline-success">{{ __('messages.check') }}</button>
        <button id="submit-cube-button" class="btn btn-secondary">{{ __('messages.saveCube') }}</button>
        <button id="mix-cube-button" class="btn btn-secondary">{{ __('messages.mixCube') }}</button>
        <button id="validity-check-button" class="btn btn-secondary">Solvable?</button>
        <button id="reset-camera-button" class="btn btn-secondary">Reset camera</button>
    </div>
</div>
<div id="progress-bar-container">
    <div id="state-one" class="state inactive-state" data-toggle="tooltip" data-placement="top" title="{{ __('messages.whiteCross') }}">1</div>
    <div class="state-path"></div>
    <div class="state-path"></div>
    <div class="state-path"></div>
    <div id="state-two" class="state inactive-state" data-toggle="tooltip" data-placement="top" title="{{ __('messages.whiteCorners') }}">2</div>
    <div class="state-path"></div>
    <div class="state-path"></div>
    <div class="state-path"></div>
    <div id="state-three" class="state inactive-state" data-toggle="tooltip" data-placement="top" title="{{ __('messages.coloredEdges') }}">3</div>
    <div class="state-path"></div>
    <div class="state-path"></div>
    <div class="state-path"></div>
    <div id="state-four" class="state inactive-state" data-toggle="tooltip" data-placement="top" title="{{ __('messages.yellowCross') }}">4</div>
    <div class="state-path"></div>
    <div class="state-path"></div>
    <div class="state-path"></div>
    <div id="state-five" class="state inactive-state" data-toggle="tooltip" data-placement="top" title="{{ __('messages.yellowEdges') }}">5</div>
    <div class="state-path"></div>
    <div class="state-path"></div>
    <div class="state-path"></div>
    <div id="state-six" class="state inactive-state" data-toggle="tooltip" data-placement="top" title="{{ __('messages.yellowCornersPosition') }}">6</div>
    <div class="state-path"></div>
    <div class="state-path"></div>
    <div class="state-path"></div>
    <div  id="state-seven" class="state inactive-state" data-toggle="tooltip" data-placement="top" title="{{ __('messages.yellowCornersRotation') }}">7</div>
</div>
<div id="steps-btn-container">
    <button id="solve-button" class="btn btn-primary" title="Fehér kereszt kirakása">START!<sup>1</sup></button>
    <button id="white-corners-button" class="btn btn-primary" title="Fehér sarkok elhelyezése">{{ __('messages.continue') }}<sup>2</sup></button>
    <button id="color-edges-button" class="btn btn-primary" title="Színes élek elhelyezése">{{ __('messages.continue') }}<sup>3</sup></button>
    <button id="yellow-cross-button" class="btn btn-primary" title="Sárga kereszt kirakása">{{ __('messages.continue') }}<sup>4</sup></button>
    <button id="yellow-edges-button" class="btn btn-primary" title="Sárga élek elhelyezése">{{ __('messages.continue') }}<sup>5</sup></button>
    <button id="yellow-corners-button" class="btn btn-primary" title="Sárga sarkok elhelyezése">{{ __('messages.continue') }}<sup>6</sup></button>
    <button id="yellow-corners-rotation-button" class="btn btn-primary" title="Sárga sarkok beforgatása">{{ __('messages.continue') }}<sup>7</sup></button>
</div>
<div id="instructions-bubble">
    <div id="phase-title"></div>
    <div id="instructions"></div>
</div>
    <a id="popup" class="btn btn-outline-info">Használati útmutató</a>
<div id="usage-info-modal">
    <h3><i class="fa fa-info-circle"></i>  Használati útmutató</h3>
    <ol>
        <li>"TESZT KITÖLTÉS" gomb megnyomása / a színek segítségével a kockánk állásának megadása</li>
        <li>"Kocka mentése" gomb megnyomása</li>
        <li>Ha saját kockát adtunk meg, ezt nem kell: "Keverés" gomb megnyomása</li>
        <li>"START!" gomb megnyomása</li>
    </ol>
    <p>(Vannak még hibák a kódban, ezért ha végtelen ciklusba esik, vagy nem sikerül elsőre kiraknia, meg kell próbálni újból.)</p>
</div>
<div id="three-container" style="width: 50vw; height: 50vh;"></div>
</main>
@endsection
