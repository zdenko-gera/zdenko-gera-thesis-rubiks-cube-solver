$('document').ready(function() {
    var selectedColor = null;

    // *** SZÍNEZÉS ***
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
    // *** SZÍNEZÉS END ***

    // beolvassuk a kiteritett kockarol a szineket
    $('#submit-cube-button').click(function(e) {
        let tmpSide = [];

        $('#white-side').children().each(function() {
            tmpSide.push(new Sticker($(this).css('background-color')));
        });
        let whiteSideObj = new Side('rgb(255, 255, 255)', tmpSide);
        tmpSide = [];

        $('#red-side').children().each(function() {
            tmpSide.push(new Sticker($(this).css('background-color')));
        });
        let redSideObj = new Side('rgb(255, 0, 0)', tmpSide);
        tmpSide = [];

        $('#green-side').children().each(function() {
            tmpSide.push(new Sticker($(this).css('background-color')));
        });
        let greenSideObj = new Side('rgb(0, 128, 0)', tmpSide);
        tmpSide = [];

        $('#orange-side').children().each(function() {
            tmpSide.push(new Sticker($(this).css('background-color')));
        });
        let orangeSideObj = new Side('rgb(255, 165, 0)', tmpSide);
        tmpSide = [];

        $('#blue-side').children().each(function() {
            tmpSide.push(new Sticker($(this).css('background-color')));
        });
        let blueSideObj = new Side('rgb(0, 0, 255)', tmpSide);
        tmpSide = [];

        $('#yellow-side').children().each(function() {
            tmpSide.push(new Sticker($(this).css('background-color')));
        });
        let yellowSideObj = new Side('rgb(255, 255, 0)', tmpSide);
        tmpSide = [];


        let cube = new Cube(whiteSideObj, redSideObj, greenSideObj, orangeSideObj, blueSideObj, yellowSideObj);
        console.log(cube.isSolved());
    });
});

class Sticker {
    #color = null;
    static get WHITE() { return 'rgb(255, 255, 255)'; }
    static get BLUE() { return 'rgb(0, 0, 255)'; }
    static get RED() { return 'rgb(255, 0, 0)'; }
    static get GREEN() { return 'rgb(0, 128, 0)'; }
    static get ORANGE() { return 'rgb(255, 165, 0)'; }
    static get YELLOW() { return 'rgb(255, 255, 0)'; }

    constructor(color) {
        this.color = color;
    }

    set color(color) {
        this.#color = color;
    }

    getColor() {
        return this.#color;
    }
}

class Side {
    #middleColor;
    stickers;

    constructor(middleColor, stickers) {
        this.#middleColor = middleColor;
        if (stickers.length === 0) {
            this.stickers = [null, null, null, null, this.#middleColor, null, null, null, null];
        } else {
            this.stickers = stickers;
        }
    }

    getMiddleColor() {
        return this.#middleColor;
    }
}

class Cube {
    whiteSide;
    redSide;
    greenSide;
    orangeSide;
    blueSide;
    yellowSide;

    constructor(whiteSide, redSide, greenSide, orangeSide, blueSide, yellowSide) {
            this.whiteSide = whiteSide;
            this.redSide = redSide;
            this.greenSide = greenSide;
            this.orangeSide = orangeSide;
            this.blueSide = blueSide;
            this.yellowSide = yellowSide;
    }

    isSolved() {
        const validColors = ['rgb(255, 255, 255)', 'rgb(255, 0, 0)', 'rgb(0, 128, 0)', 'rgb(255, 165, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)'];
        let isValid = true;
        let isSolved = true;

        for (let i = 0; i < 9; i++) {
            if (!validColors.includes(this.whiteSide.stickers[i].getColor())) {
                isValid = false;
            }
            if (this.whiteSide.stickers[i].getColor() !== this.whiteSide.getMiddleColor()) {
                isSolved = false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (!validColors.includes(this.redSide.stickers[i].getColor())) {
                isValid = false;
            }
            if (this.redSide.stickers[i].getColor() !== this.redSide.getMiddleColor()) {
                isSolved = false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (!validColors.includes(this.greenSide.stickers[i].getColor())) {
                isValid = false;
            }
            if (this.greenSide.stickers[i].getColor() !== this.greenSide.getMiddleColor()) {
                isSolved = false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (!validColors.includes(this.orangeSide.stickers[i].getColor())) {
                isValid = false;
            }
            if (this.orangeSide.stickers[i].getColor() !== this.orangeSide.getMiddleColor()) {
                isSolved = false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (!validColors.includes(this.blueSide.stickers[i].getColor())) {
                isValid = false;
            }
            if (this.blueSide.stickers[i].getColor() !== this.blueSide.getMiddleColor()) {
                isSolved = false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (!validColors.includes(this.yellowSide.stickers[i].getColor())) {
                isValid = false;
            }
            if (this.yellowSide.stickers[i].getColor() !== this.yellowSide.getMiddleColor()) {
                isSolved = false;
            }
        }

        if (!isValid) {
            document.getElementById('error-msg').style.display = "block";
            document.getElementById('error-msg').innerText = 'Add meg minden kocka színét a kiválasztható színekkel!';
            setTimeout(function () { document.getElementById('error-msg').style.display = 'none' }, 7000);
        }

        if (isSolved) {
            document.getElementById('success-msg').style.display = "block";
            document.getElementById('success-msg').innerText = 'A kocka ki van rakva!';
            setTimeout(function () { document.getElementById('success-msg').style.display = 'none' }, 7000);
        }

        return isSolved;
    }
}
