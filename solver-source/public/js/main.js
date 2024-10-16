/*$('document').ready(function() {
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
        var counter = 0;

        $('#white-side').children().each(function() {
            whiteSide.push(new Sticker($(this).css('background-color')));
            counter++;

        });

        for (var i = 0; i < whiteSide.length; i++) {
            console.log(whiteSide[i]);
        }
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
*/
