@extends('layout')
@section('title', '- 2x2 kocka')
@section('content')
<main>
    <div id="dimension-selector-wrapper">
        <button class="dim-option active-dim-option" id="2-dim">2D</button>
        <button class="dim-option" id="3-dim">3D</button>
    </div>
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
                <div class="sticker tbt-sticker"></div>
                <div class="sticker tbt-sticker"></div>
                <div class="sticker tbt-sticker"></div>
                <div class="sticker tbt-sticker"></div>
            </div>
            <div>
                <div class="side" id="orange-side">
                    <div class="sticker tbt-sticker"></div>
                    <div class="sticker tbt-sticker"></div>
                    <div class="sticker tbt-sticker"></div>
                    <div class="sticker tbt-sticker"></div>
                </div>
                <div class="side" id="white-side">
                    <div class="sticker tbt-sticker"></div>
                    <div class="sticker tbt-sticker"></div>
                    <div class="sticker tbt-sticker"></div>
                    <div class="sticker tbt-sticker"></div>
                </div>
                <div class="side" id="red-side">
                    <div class="sticker tbt-sticker"></div>
                    <div class="sticker tbt-sticker"></div>
                    <div class="sticker tbt-sticker"></div>
                    <div class="sticker tbt-sticker"></div>
                </div>
                <div class="side" id="yellow-side">
                    <div class="sticker tbt-sticker"></div>
                    <div class="sticker tbt-sticker"></div>
                    <div class="sticker tbt-sticker"></div>
                    <div class="sticker tbt-sticker"></div>
                </div>
            </div>
            <div class="side alone-side" id="blue-side">
                <div class="sticker tbt-sticker"></div>
                <div class="sticker tbt-sticker"></div>
                <div class="sticker tbt-sticker"></div>
                <div class="sticker tbt-sticker"></div>
            </div>
        </div>
        <div id="cube-buttons-container">
            <button id="fill-to-solved-state" class="btn btn-outline-primary">TESZT KITÖLTÉS</button>
            <button id="check-cube" class="btn btn-outline-success">{{ __('messages.check') }}</button>
            <button id="submit-cube-button-tbt" class="btn btn-secondary">{{ __('messages.saveCube') }}</button>
            <button id="mix-cube-button" class="btn btn-secondary">{{ __('messages.mixCube') }}</button>
            <button id="validity-check-button" class="btn btn-secondary">Solvable?</button>
            <button id="reset-camera-button" class="btn btn-secondary">Reset camera</button>
        </div>
    </div>
    <div id="progress-bar-container">
        <div id="state-one" class="state inactive-state" data-toggle="tooltip" data-placement="top" title="{{ __('messages.whiteSide') }}">1</div>
        <div class="state-path"></div>
        <div class="state-path"></div>
        <div class="state-path"></div>
        <div id="state-two" class="state inactive-state" data-toggle="tooltip" data-placement="top" title="{{ __('messages.yellowCornersPosition') }}">2</div>
        <div class="state-path"></div>
        <div class="state-path"></div>
        <div class="state-path"></div>
        <div id="state-three" class="state inactive-state" data-toggle="tooltip" data-placement="top" title="{{ __('messages.yellowCornersRotation') }}">3</div>
    </div>
    <div id="steps-btn-container">
        <button id="solve-pocket-button" class="btn btn-primary" title="Fehér oldal kirakása">START<sup>1</sup></button>
        <button id="yellow-corner-pocket-button" class="btn btn-primary" title="Sárga sarkok elhelyezése">{{ __('messages.continue') }}<sup>2</sup></button>
        <button id="yellow-rotation-pocket-button" class="btn btn-primary" title="Sárga sarkok beforgatása">{{ __('messages.continue') }}<sup>3</sup></button>
    </div>
    <div id="phase-title"></div>
    <div id="instructions"></div>
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
