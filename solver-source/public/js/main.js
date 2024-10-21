$('document').ready(function() {
    $('#fill-to-solved-state').click(function(e) {
        let redChildren = document.getElementById('red-side').children;
        for (let i = 0; i < 9; i++) {
            redChildren[i].style.backgroundColor = 'rgb(255, 0 , 0)';
        }
        let blueChildren = document.getElementById('blue-side').children;
        for (let i = 0; i < 9; i++) {
            blueChildren[i].style.backgroundColor = 'rgb(0, 0, 255)';
        }
        let greenChildren = document.getElementById('green-side').children;
        for (let i = 0; i < 9; i++) {
            greenChildren[i].style.backgroundColor = 'rgb(0, 128, 0)';
        }
        let yellowChildren = document.getElementById('yellow-side').children;
        for (let i = 0; i < 9; i++) {
            yellowChildren[i].style.backgroundColor = 'rgb(255, 255, 0)';
        }
        let whiteChildren = document.getElementById('white-side').children;
        for (let i = 0; i < 9; i++) {
            whiteChildren[i].style.backgroundColor = 'rgb(255, 255, 255)';
        }
        let orangeChildren = document.getElementById('orange-side').children;
        for (let i = 0; i < 9; i++) {
            orangeChildren[i].style.backgroundColor = 'rgb(255, 165, 0)';
        }
    });

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
        cube.isSolved();


        $('#right').click(function(e) {
            cube.right(false);
        });

        $('#right-backwards').click(function(e) {
            cube.right(true);
        });

        $('#left').click(function(e) {
            cube.left(false);
        });

        $('#left-backwards').click(function(e) {
            cube.left(true);
        });

        $('#front').click(function(e) {
            cube.front(false);
        });

        $('#front-backwards').click(function(e) {
            cube.front(true);
        });

        $('#back').click(function(e) {
            cube.back(false);
        });

        $('#back-backwards').click(function(e) {
            cube.back(true);
        });

        $('#down').click(function(e) {
            cube.down(false);
        });

        $('#down-backwards').click(function(e) {
            cube.down(true);
        });

        $('#up').click(function(e) {
            cube.up(false);
        });

        $('#up-backwards').click(function(e) {
            cube.up(true);
        });
    });
});

class Sticker {
    color = null;
    static get WHITE() { return 'rgb(255, 255, 255)'; }
    static get BLUE() { return 'rgb(0, 0, 255)'; }
    static get RED() { return 'rgb(255, 0, 0)'; }
    static get GREEN() { return 'rgb(0, 128, 0)'; }
    static get ORANGE() { return 'rgb(255, 165, 0)'; }
    static get YELLOW() { return 'rgb(255, 255, 0)'; }

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

    front(backwards) {
        let iteration = 1;
        let tmpRedSide = structuredClone(this.redSide);
        let tmpWhiteSide = structuredClone(this.whiteSide);
        let tmpBlueSide = structuredClone(this.blueSide);
        let tmpYellowSide = structuredClone(this.yellowSide);
        let tmpGreenSide = structuredClone(this.greenSide);

        if (backwards) {
            iteration = 3;
        }

        for (let i = 0; i < iteration; i++) {
            this.redSide.stickers[0].color = tmpRedSide.stickers[6].color;
            this.redSide.stickers[1].color = tmpRedSide.stickers[3].color;
            this.redSide.stickers[2].color = tmpRedSide.stickers[0].color;
            this.redSide.stickers[3].color = tmpRedSide.stickers[7].color;
            this.redSide.stickers[5].color = tmpRedSide.stickers[1].color;
            this.redSide.stickers[6].color = tmpRedSide.stickers[8].color;
            this.redSide.stickers[7].color = tmpRedSide.stickers[5].color;
            this.redSide.stickers[8].color = tmpRedSide.stickers[2].color;

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

            tmpRedSide = structuredClone(this.redSide);
            tmpWhiteSide = structuredClone(this.whiteSide);
            tmpBlueSide = structuredClone(this.blueSide);
            tmpYellowSide = structuredClone(this.yellowSide);
            tmpGreenSide = structuredClone(this.greenSide);
        }
        this.reRenderCube();
        return this;
    }

    back(backwards) {
        let iteration = 1;
        let tmpOrangeSide = structuredClone(this.orangeSide);
        let tmpWhiteSide = structuredClone(this.whiteSide);
        let tmpBlueSide = structuredClone(this.blueSide);
        let tmpYellowSide = structuredClone(this.yellowSide);
        let tmpGreenSide = structuredClone(this.greenSide);

        if (backwards) {
            iteration = 3;
        }

        for (let i = 0; i < iteration; i++) {
            this.orangeSide.stickers[0].color = tmpOrangeSide.stickers[6].color;
            this.orangeSide.stickers[1].color = tmpOrangeSide.stickers[3].color;
            this.orangeSide.stickers[2].color = tmpOrangeSide.stickers[0].color;
            this.orangeSide.stickers[3].color = tmpOrangeSide.stickers[7].color;
            this.orangeSide.stickers[5].color = tmpOrangeSide.stickers[1].color;
            this.orangeSide.stickers[6].color = tmpOrangeSide.stickers[8].color;
            this.orangeSide.stickers[7].color = tmpOrangeSide.stickers[5].color;
            this.orangeSide.stickers[8].color = tmpOrangeSide.stickers[2].color;

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

            tmpOrangeSide = structuredClone(this.orangeSide);
            tmpWhiteSide = structuredClone(this.whiteSide);
            tmpBlueSide = structuredClone(this.blueSide);
            tmpYellowSide = structuredClone(this.yellowSide);
            tmpGreenSide = structuredClone(this.greenSide);
        }
        this.reRenderCube();
        return this;
    }

    right(backwards) {
        let iteration = 1;
        let tmpRedSide = structuredClone(this.redSide);
        let tmpWhiteSide = structuredClone(this.whiteSide);
        let tmpBlueSide = structuredClone(this.blueSide);
        let tmpYellowSide = structuredClone(this.yellowSide);
        let tmpOrangeSide = structuredClone(this.orangeSide);

        if (backwards) {
            iteration = 3;
        }

        for (let i = 0; i < iteration; i++) {
            this.blueSide.stickers[6].color = tmpBlueSide.stickers[0].color;
            this.blueSide.stickers[3].color = tmpBlueSide.stickers[1].color;
            this.blueSide.stickers[0].color = tmpBlueSide.stickers[2].color;
            this.blueSide.stickers[7].color = tmpBlueSide.stickers[3].color;
            this.blueSide.stickers[1].color = tmpBlueSide.stickers[5].color;
            this.blueSide.stickers[8].color = tmpBlueSide.stickers[6].color;
            this.blueSide.stickers[5].color = tmpBlueSide.stickers[7].color;
            this.blueSide.stickers[2].color = tmpBlueSide.stickers[8].color;

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

            tmpRedSide = structuredClone(this.redSide);
            tmpWhiteSide = structuredClone(this.whiteSide);
            tmpBlueSide = structuredClone(this.blueSide);
            tmpYellowSide = structuredClone(this.yellowSide);
            tmpOrangeSide = structuredClone(this.orangeSide);
        }
        this.reRenderCube();
        return this;
    }

    left(backwards) {
        let iteration = 1;
        let tmpRedSide = structuredClone(this.redSide);
        let tmpWhiteSide = structuredClone(this.whiteSide);
        let tmpGreenSide = structuredClone(this.greenSide);
        let tmpYellowSide = structuredClone(this.yellowSide);
        let tmpOrangeSide = structuredClone(this.orangeSide);

        if (backwards) {
            iteration = 3;
        }

        for (let i = 0; i < iteration; i++) {
            this.greenSide.stickers[0].color = tmpGreenSide.stickers[6].color;
            this.greenSide.stickers[1].color = tmpGreenSide.stickers[3].color;
            this.greenSide.stickers[2].color = tmpGreenSide.stickers[0].color;
            this.greenSide.stickers[3].color = tmpGreenSide.stickers[7].color;
            this.greenSide.stickers[5].color = tmpGreenSide.stickers[1].color;
            this.greenSide.stickers[6].color = tmpGreenSide.stickers[8].color;
            this.greenSide.stickers[7].color = tmpGreenSide.stickers[5].color;
            this.greenSide.stickers[8].color = tmpGreenSide.stickers[2].color;

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

            tmpRedSide = structuredClone(this.redSide);
            tmpWhiteSide = structuredClone(this.whiteSide);
            tmpGreenSide = structuredClone(this.greenSide);
            tmpYellowSide = structuredClone(this.yellowSide);
            tmpOrangeSide = structuredClone(this.orangeSide);
        }
        this.reRenderCube();
        return this;
    }

    down(backwards) {
        let iteration = 1;
        let tmpRedSide = structuredClone(this.redSide);
        let tmpGreenSide = structuredClone(this.greenSide);
        let tmpBlueSide = structuredClone(this.blueSide);
        let tmpYellowSide = structuredClone(this.yellowSide);
        let tmpOrangeSide = structuredClone(this.orangeSide);

        if (backwards) {
            iteration = 3;
        }

        for (let i = 0; i < iteration; i++) {
            this.yellowSide.stickers[0].color = tmpYellowSide.stickers[6].color;
            this.yellowSide.stickers[1].color = tmpYellowSide.stickers[3].color;
            this.yellowSide.stickers[2].color = tmpYellowSide.stickers[0].color;
            this.yellowSide.stickers[3].color = tmpYellowSide.stickers[7].color;
            this.yellowSide.stickers[5].color = tmpYellowSide.stickers[1].color;
            this.yellowSide.stickers[6].color = tmpYellowSide.stickers[8].color;
            this.yellowSide.stickers[7].color = tmpYellowSide.stickers[5].color;
            this.yellowSide.stickers[8].color = tmpYellowSide.stickers[2].color;

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

            tmpRedSide = structuredClone(this.redSide);
            tmpGreenSide = structuredClone(this.greenSide);
            tmpBlueSide = structuredClone(this.blueSide);
            tmpYellowSide = structuredClone(this.yellowSide);
            tmpOrangeSide = structuredClone(this.orangeSide);
        }
        this.reRenderCube();
        return this;
    }

    up(backwards) {
        let iteration = 1;
        let tmpRedSide = structuredClone(this.redSide);
        let tmpGreenSide = structuredClone(this.greenSide);
        let tmpBlueSide = structuredClone(this.blueSide);
        let tmpWhiteSide = structuredClone(this.whiteSide);
        let tmpOrangeSide = structuredClone(this.orangeSide);

        if (backwards) {
            iteration = 3;
        }

        for (let i = 0; i < iteration; i++) {
            this.whiteSide.stickers[0].color = tmpWhiteSide.stickers[6].color;
            this.whiteSide.stickers[1].color = tmpWhiteSide.stickers[3].color;
            this.whiteSide.stickers[2].color = tmpWhiteSide.stickers[0].color;
            this.whiteSide.stickers[3].color = tmpWhiteSide.stickers[7].color;
            this.whiteSide.stickers[5].color = tmpWhiteSide.stickers[1].color;
            this.whiteSide.stickers[6].color = tmpWhiteSide.stickers[8].color;
            this.whiteSide.stickers[7].color = tmpWhiteSide.stickers[5].color;
            this.whiteSide.stickers[8].color = tmpWhiteSide.stickers[2].color;

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

            tmpRedSide = structuredClone(this.redSide);
            tmpGreenSide = structuredClone(this.greenSide);
            tmpBlueSide = structuredClone(this.blueSide);
            tmpWhiteSide = structuredClone(this.whiteSide);
            tmpOrangeSide = structuredClone(this.orangeSide);
        }
        this.reRenderCube();
        return this;
    }
}
