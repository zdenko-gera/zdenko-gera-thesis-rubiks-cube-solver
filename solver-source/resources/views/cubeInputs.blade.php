@extends('layout')
@section('content')
<body class="font-sans antialiased dark:bg-black dark:text-white/50">
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
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
    <button id="submit-cube-button">Kezdés</button>
</main>
<footer>

</footer>

<script>
    $('document').ready(function() {
        var selectedColor = null;

        $('.color-sample').click(function(e) {
            e.stopPropagation();
            e.stopImmediatePropagation();

            $('.color-sample').removeClass('active-color-sample');
            $activeColorSample = $(this);
            selectedColor = $(this).attr('id').split('-')[0];

            $($activeColorSample).addClass('active-color-sample');
        });

        $('.sticker').click(function(e) {
            e.stopPropagation();
            e.stopImmediatePropagation();

            if (!$(this).attr('class').includes('middle-sticker')) {
                $(this).css('background-color', selectedColor);
            }
        });

        // beolvassuk a kiteritett kockarol a szineket
        $('#submit-cube-button').click(function(e) {
            let whiteSide = [];
            let greenSide = [];
            let orangeSide = [];
            let blueSide = [];
            let redSide = [];
            let yellowSide = [];

            $('#white-side').children().each(function() {
                whiteSide.push(new Sticker($(this).css('background-color')));
            });
            $('#green-side').children().each(function() {
                greenSide.push(new Sticker($(this).css('background-color')));
            });
            $('#orange-side').children().each(function() {
                orangeSide.push(new Sticker($(this).css('background-color')));
            });
            $('#blue-side').children().each(function() {
                blueSide.push(new Sticker($(this).css('background-color')));
            });
            $('#red-side').children().each(function() {
                redSide.push(new Sticker($(this).css('background-color')));
            });
            $('#yellow-side').children().each(function() {
                yellowSide.push(new Sticker($(this).css('background-color')));
            });

            let cube = new Cube();
        });
    });

    class Sticker {
        #color = null;
        static get WHITE() { return 'white'; }
        static get BLUE() { return 'blue'; }
        static get RED() { return 'red'; }
        static get GREEN() { return 'green'; }
        static get ORANGE() { return 'orange'; }
        static get YELLOW() { return 'yellow'; }

        constructor(color) {
            this.color = color;
        }

        set color(color) {
            this.#color = color;
        }

        static getColor() {
            return this.#color;
        }
    }

    class Side {
        #middleColor;
        stickers;

        constructor(middleColor, stickers) {
            this.#middleColor = middleColor;
            if (sticekrs.length === 0) {
                this.stickers = [[null, null, null],[null, this.#middleColor, null],[null, null, null]];
            } else {
                this.stickers = stickers;
            }
        }

        static getMiddleColor() {
            return this.middleColor;
        }
    }

    class Cube {
        sides;

        constructor(sides) {
            if (sides.length < 6) {
                alert('HIBA. A kockának 6 oldala kell legyen!')
            } else {
                this.sides = sides;
            }
        }
    }
</script>
@endsection
