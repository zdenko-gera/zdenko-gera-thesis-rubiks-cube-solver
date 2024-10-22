$('document').ready(function() {
    $('#fill-to-solved-state').click(function(e) {
        let redChildren = document.getElementById('red-side').children;
        for (let i = 0; i < 9; i++) {
            redChildren[i].style.backgroundColor = 'rgb(219, 88, 86)';
        }
        let blueChildren = document.getElementById('blue-side').children;
        for (let i = 0; i < 9; i++) {
            blueChildren[i].style.backgroundColor = 'rgb(162, 191, 254)';
        }
        let greenChildren = document.getElementById('green-side').children;
        for (let i = 0; i < 9; i++) {
            greenChildren[i].style.backgroundColor = 'rgb(134, 213, 134)';
        }
        let yellowChildren = document.getElementById('yellow-side').children;
        for (let i = 0; i < 9; i++) {
            yellowChildren[i].style.backgroundColor = 'rgb(255, 255, 153)';
        }
        let whiteChildren = document.getElementById('white-side').children;
        for (let i = 0; i < 9; i++) {
            whiteChildren[i].style.backgroundColor = 'rgb(255, 255, 255)';
        }
        let orangeChildren = document.getElementById('orange-side').children;
        for (let i = 0; i < 9; i++) {
            orangeChildren[i].style.backgroundColor = 'rgb(255, 150, 65)';
        }
    });

    var selectedColor = null;
    // *** SZÍNEZÉS ***
    $('.color-sample').click(function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();

        $('.color-sample').removeClass('active-color-sample');
        $activeColorSample = $(this);
        selectedColor = $(this).css('background-color');

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
        let redSideObj = new Side('rgb(219, 88, 86)', tmpSide);
        tmpSide = [];

        $('#green-side').children().each(function() {
            tmpSide.push(new Sticker($(this).css('background-color')));
        });
        let greenSideObj = new Side('rgb(134, 213, 134)', tmpSide);
        tmpSide = [];

        $('#orange-side').children().each(function() {
            tmpSide.push(new Sticker($(this).css('background-color')));
        });
        let orangeSideObj = new Side('rgb(255, 150, 65)', tmpSide);
        tmpSide = [];

        $('#blue-side').children().each(function() {
            tmpSide.push(new Sticker($(this).css('background-color')));
        });
        let blueSideObj = new Side('rgb(162, 191, 254)', tmpSide);
        tmpSide = [];

        $('#yellow-side').children().each(function() {
            tmpSide.push(new Sticker($(this).css('background-color')));
        });
        let yellowSideObj = new Side('rgb(255, 255, 153)', tmpSide);
        tmpSide = [];


        let cube = new Cube(whiteSideObj, redSideObj, greenSideObj, orangeSideObj, blueSideObj, yellowSideObj);
        cube.isSolved();


        $('#right').click(function(e) {
            cube.rotate(cube.blueSide, false);
        });

        $('#right-backwards').click(function(e) {
            cube.rotate(cube.blueSide, true);
        });

        $('#left').click(function(e) {
            cube.rotate(cube.greenSide, false);
        });

        $('#left-backwards').click(function(e) {
            cube.rotate(cube.greenSide, true);
        });

        $('#front').click(function(e) {
            cube.rotate(cube.redSide, this.redSide, false);
        });

        $('#front-backwards').click(function(e) {
            cube.rotate(cube.redSide, this.redSide, true);
        });

        $('#back').click(function(e) {
            cube.rotate(cube.orangeSide, false);
        });

        $('#back-backwards').click(function(e) {
            cube.rotate(cube.orangeSide, true);
        });

        $('#down').click(function(e) {
            cube.rotate(cube.yellowSide, false);
        });

        $('#down-backwards').click(function(e) {
            cube.rotate(cube.yellowSide, true);
        });

        $('#up').click(function(e) {
            cube.rotate(cube.whiteSide, false);
        });

        $('#up-backwards').click(function(e) {
            cube.rotate(cube.whiteSide, true);
        });
    });
});

class Sticker {
    color = null;
    static get WHITE() { return 'rgb(255, 255, 255)'; }
    static get BLUE() { return 'rgb(162, 191, 254)'; }
    static get RED() { return 'rgb(219, 88, 86)'; }
    static get GREEN() { return 'rgb(134, 213, 134)'; }
    static get ORANGE() { return 'rgb(255, 150, 65)'; }
    static get YELLOW() { return 'rgb(255, 255, 153)'; }

    constructor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
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

    /**
     * Renders the cube according to the stored values.
     */
    reRenderCube() {
        let redChildren = document.getElementById('red-side').children;
        for (let i = 0; i < 9; i++) {
            redChildren[i].style.backgroundColor = this.redSide.stickers[i].getColor();
        }
        let blueChildren = document.getElementById('blue-side').children;
        for (let i = 0; i < 9; i++) {
            blueChildren[i].style.backgroundColor = this.blueSide.stickers[i].getColor();
        }
        let greenChildren = document.getElementById('green-side').children;
        for (let i = 0; i < 9; i++) {
            greenChildren[i].style.backgroundColor = this.greenSide.stickers[i].getColor();
        }
        let yellowChildren = document.getElementById('yellow-side').children;
        for (let i = 0; i < 9; i++) {
            yellowChildren[i].style.backgroundColor = this.yellowSide.stickers[i].getColor();
        }
        let whiteChildren = document.getElementById('white-side').children;
        for (let i = 0; i < 9; i++) {
            whiteChildren[i].style.backgroundColor = this.whiteSide.stickers[i].getColor();
        }
        let orangeChildren = document.getElementById('orange-side').children;
        for (let i = 0; i < 9; i++) {
            orangeChildren[i].style.backgroundColor = this.orangeSide.stickers[i].getColor();
        }
    }

    /**
     * Returns if the cube is solved and validates the stickers.
     *
     * @returns {boolean}
     */
    isSolved() {
        const validColors = ['rgb(255, 255, 255)', 'rgb(219, 88, 86)', 'rgb(134, 213, 134)', 'rgb(255, 150, 65)', 'rgb(162, 191, 254)', 'rgb(255, 255, 153)'];
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
                console.log(this.blueSide.stickers[i].getColor());

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
            setTimeout(function () {
                document.getElementById('error-msg').style.display = 'none'
            }, 7000);
        }

        if (isSolved) {
            document.getElementById('success-msg').style.display = "block";
            document.getElementById('success-msg').innerText = 'A kocka ki van rakva!';
            setTimeout(function () {
                document.getElementById('success-msg').style.display = 'none'
            }, 7000);
        }

        return isSolved;
    }

    /**
     * Makes a rotational move on the given side of the cube.
     *
     * @param side Side to rotate (clockwise by default).
     * @param backwards Decides if the rotation should be made clockwise or counter-clockwise.
     * @returns {Cube} The transformed cube.
     */
    rotate(side, backwards = false) {
        let iteration = 1;
        let tmpSide = structuredClone(side);
        let tmpRedSide = structuredClone(this.redSide);
        let tmpWhiteSide = structuredClone(this.whiteSide);
        let tmpBlueSide = structuredClone(this.blueSide);
        let tmpYellowSide = structuredClone(this.yellowSide);
        let tmpGreenSide = structuredClone(this.greenSide);
        let tmpOrangeSide = structuredClone(this.orangeSide);

        if (backwards) {
            iteration = 3;
        }

        for (let i = 0; i < iteration; i++) {
            side.stickers[0].color = tmpSide.stickers[6].color;
            side.stickers[1].color = tmpSide.stickers[3].color;
            side.stickers[2].color = tmpSide.stickers[0].color;
            side.stickers[3].color = tmpSide.stickers[7].color;
            side.stickers[5].color = tmpSide.stickers[1].color;
            side.stickers[6].color = tmpSide.stickers[8].color;
            side.stickers[7].color = tmpSide.stickers[5].color;
            side.stickers[8].color = tmpSide.stickers[2].color;


            //A következő if-ek a forgatott oldal szomszédos oldalain lévő matricák forgatását garantálja.
            //FEHÉRET FORGATJUK
            if (side.getMiddleColor() === 'rgb(255, 255, 255)') {
                this.redSide.stickers[0].color = tmpBlueSide.stickers[0].color;
                this.redSide.stickers[1].color = tmpBlueSide.stickers[3].color;
                this.redSide.stickers[2].color = tmpBlueSide.stickers[6].color;

                this.blueSide.stickers[0].color = tmpOrangeSide.stickers[6].color;
                this.blueSide.stickers[3].color = tmpOrangeSide.stickers[7].color;
                this.blueSide.stickers[6].color = tmpOrangeSide.stickers[8].color;

                this.orangeSide.stickers[6].color = tmpGreenSide.stickers[2].color;
                this.orangeSide.stickers[7].color = tmpGreenSide.stickers[5].color;
                this.orangeSide.stickers[8].color = tmpGreenSide.stickers[8].color;

                this.greenSide.stickers[2].color = tmpRedSide.stickers[0].color;
                this.greenSide.stickers[5].color = tmpRedSide.stickers[1].color;
                this.greenSide.stickers[8].color = tmpRedSide.stickers[2].color;
            }

            //PIROSAT FORGATJUK
            if (side.getMiddleColor() === 'rgb(219, 88, 86)') {
                this.blueSide.stickers[6].color = tmpWhiteSide.stickers[6].color;
                this.blueSide.stickers[7].color = tmpWhiteSide.stickers[7].color;
                this.blueSide.stickers[8].color = tmpWhiteSide.stickers[8].color;

                this.yellowSide.stickers[0].color = tmpBlueSide.stickers[8].color;
                this.yellowSide.stickers[1].color = tmpBlueSide.stickers[7].color;
                this.yellowSide.stickers[2].color = tmpBlueSide.stickers[6].color;

                this.greenSide.stickers[6].color = tmpYellowSide.stickers[2].color;
                this.greenSide.stickers[7].color = tmpYellowSide.stickers[1].color;
                this.greenSide.stickers[8].color = tmpYellowSide.stickers[0].color;

                this.whiteSide.stickers[6].color = tmpGreenSide.stickers[6].color;
                this.whiteSide.stickers[7].color = tmpGreenSide.stickers[7].color;
                this.whiteSide.stickers[8].color = tmpGreenSide.stickers[8].color;
            }

            //KÉKET FORGATJUK
            if (side.getMiddleColor() === 'rgb(162, 191, 254)') {
                this.orangeSide.stickers[2].color = tmpWhiteSide.stickers[2].color;
                this.orangeSide.stickers[5].color = tmpWhiteSide.stickers[5].color;
                this.orangeSide.stickers[8].color = tmpWhiteSide.stickers[8].color;

                this.yellowSide.stickers[2].color = tmpOrangeSide.stickers[2].color;
                this.yellowSide.stickers[5].color = tmpOrangeSide.stickers[5].color;
                this.yellowSide.stickers[8].color = tmpOrangeSide.stickers[8].color;

                this.redSide.stickers[2].color = tmpYellowSide.stickers[2].color;
                this.redSide.stickers[5].color = tmpYellowSide.stickers[5].color;
                this.redSide.stickers[8].color = tmpYellowSide.stickers[8].color;

                this.whiteSide.stickers[2].color = tmpRedSide.stickers[2].color;
                this.whiteSide.stickers[5].color = tmpRedSide.stickers[5].color;
                this.whiteSide.stickers[8].color = tmpRedSide.stickers[8].color;
            }

            //NARANCSOT FORGATJUK
            if (side.getMiddleColor() === 'rgb(255, 150, 65)') {
                this.blueSide.stickers[0].color = tmpYellowSide.stickers[6].color;
                this.blueSide.stickers[1].color = tmpYellowSide.stickers[7].color;
                this.blueSide.stickers[2].color = tmpYellowSide.stickers[8].color;

                this.yellowSide.stickers[6].color = tmpGreenSide.stickers[0].color;
                this.yellowSide.stickers[7].color = tmpGreenSide.stickers[1].color;
                this.yellowSide.stickers[8].color = tmpGreenSide.stickers[2].color;

                this.greenSide.stickers[0].color = tmpWhiteSide.stickers[0].color;
                this.greenSide.stickers[1].color = tmpWhiteSide.stickers[1].color;
                this.greenSide.stickers[2].color = tmpWhiteSide.stickers[2].color;

                this.whiteSide.stickers[0].color = tmpBlueSide.stickers[0].color;
                this.whiteSide.stickers[1].color = tmpBlueSide.stickers[1].color;
                this.whiteSide.stickers[2].color = tmpBlueSide.stickers[2].color;
            }

            //ZÖLDET FORGATJUK
            if (side.getMiddleColor() === 'rgb(134, 213, 134)') {
                this.orangeSide.stickers[0].color = tmpYellowSide.stickers[0].color;
                this.orangeSide.stickers[3].color = tmpYellowSide.stickers[3].color;
                this.orangeSide.stickers[6].color = tmpYellowSide.stickers[6].color;

                this.yellowSide.stickers[0].color = tmpRedSide.stickers[0].color;
                this.yellowSide.stickers[3].color = tmpRedSide.stickers[3].color;
                this.yellowSide.stickers[6].color = tmpRedSide.stickers[6].color;

                this.redSide.stickers[0].color = tmpWhiteSide.stickers[0].color;
                this.redSide.stickers[3].color = tmpWhiteSide.stickers[3].color;
                this.redSide.stickers[6].color = tmpWhiteSide.stickers[6].color;

                this.whiteSide.stickers[0].color = tmpOrangeSide.stickers[0].color;
                this.whiteSide.stickers[3].color = tmpOrangeSide.stickers[3].color;
                this.whiteSide.stickers[6].color = tmpOrangeSide.stickers[6].color;
            }

            //CITROMOT FORGATJUK
            if (side.getMiddleColor() === 'rgb(255, 255, 153)') {
                this.orangeSide.stickers[0].color = tmpBlueSide.stickers[2].color;
                this.orangeSide.stickers[1].color = tmpBlueSide.stickers[5].color;
                this.orangeSide.stickers[2].color = tmpBlueSide.stickers[8].color;

                this.greenSide.stickers[0].color = tmpOrangeSide.stickers[0].color;
                this.greenSide.stickers[3].color = tmpOrangeSide.stickers[1].color;
                this.greenSide.stickers[6].color = tmpOrangeSide.stickers[2].color;

                this.redSide.stickers[6].color = tmpGreenSide.stickers[0].color;
                this.redSide.stickers[7].color = tmpGreenSide.stickers[3].color;
                this.redSide.stickers[8].color = tmpGreenSide.stickers[6].color;

                this.blueSide.stickers[2].color = tmpRedSide.stickers[6].color;
                this.blueSide.stickers[5].color = tmpRedSide.stickers[7].color;
                this.blueSide.stickers[8].color = tmpRedSide.stickers[8].color;
            }

            tmpSide = structuredClone(side);
            tmpWhiteSide = structuredClone(this.whiteSide);
            tmpRedSide = structuredClone(this.redSide);
            tmpOrangeSide = structuredClone(this.orangeSide);
            tmpBlueSide = structuredClone(this.blueSide);
            tmpYellowSide = structuredClone(this.yellowSide);
            tmpGreenSide = structuredClone(this.greenSide);
        }
        this.reRenderCube();
        return this;
    }
}
