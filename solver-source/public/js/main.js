import { Sticker } from './classes/Sticker.js';
import { Side } from './classes/Side.js';
import { Cube } from './classes/Cube.js';
import { CORNER_CUBE, MIDDLE_CUBE, EDGE_CUBE } from './constants.js';
import { WHITE, RED, GREEN, ORANGE, BLUE, YELLOW } from './constants.js';

let cube = null;

$('document').ready(function() {
    $('#fill-to-solved-state').click(function (e) {
        let redChildren = document.getElementById('red-side').children;
        for (let i = 0; i < 9; i++) {
            redChildren[i].style.backgroundColor = RED;
        }
        let blueChildren = document.getElementById('blue-side').children;
        for (let i = 0; i < 9; i++) {
            blueChildren[i].style.backgroundColor = BLUE;
        }
        let greenChildren = document.getElementById('green-side').children;
        for (let i = 0; i < 9; i++) {
            greenChildren[i].style.backgroundColor = GREEN;
        }
        let yellowChildren = document.getElementById('yellow-side').children;
        for (let i = 0; i < 9; i++) {
            yellowChildren[i].style.backgroundColor = YELLOW;
        }
        let whiteChildren = document.getElementById('white-side').children;
        for (let i = 0; i < 9; i++) {
            whiteChildren[i].style.backgroundColor = WHITE;
        }
        let orangeChildren = document.getElementById('orange-side').children;
        for (let i = 0; i < 9; i++) {
            orangeChildren[i].style.backgroundColor = ORANGE;
        }
    });

    var selectedColor = null;
    let activeColorSample = '';
    // *** SZÍNEZÉS ***
    $('.color-sample').click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();

        $('.color-sample').removeClass('active-color-sample');
        activeColorSample = $(this);
        selectedColor = $(this).css('background-color');

        $(activeColorSample).addClass('active-color-sample');
    });

    $('.sticker').click(function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();

        if (!$(this).attr('class').includes('middle-sticker')) {
            $(this).css('background-color', selectedColor);
        }
    });
    // *** SZÍNEZÉS END ***

    // beolvassuk a kiteritett kockarol a szineket
    $('#submit-cube-button').click(function (e) {
        document.getElementById('submit-cube-button').style.display = 'none';
        document.getElementById('fill-to-solved-state').style.display = 'none';
        let tmpSide = [];
        let index = 0;

        $('#white-side').children().each(function () {
            if ([0, 2, 6, 8].includes(index)) {
                tmpSide.push(new Sticker($(this).css('background-color'), CORNER_CUBE));
                index++;
            }
            if ([1, 3, 5, 7].includes(index)) {
                tmpSide.push(new Sticker($(this).css('background-color'), EDGE_CUBE));
                index++;
            }
            if (index === 4) {
                tmpSide.push(new Sticker($(this).css('background-color'), MIDDLE_CUBE));
                index++;
            }
        });
        let whiteSideObj = new Side(WHITE, tmpSide);
        tmpSide = [];
        index = 0;

        $('#red-side').children().each(function () {
            if ([0, 2, 6, 8].includes(index)) {
                tmpSide.push(new Sticker($(this).css('background-color'), CORNER_CUBE));
                index++;
            }
            if ([1, 3, 5, 7].includes(index)) {
                tmpSide.push(new Sticker($(this).css('background-color'), EDGE_CUBE));
                index++;
            }
            if (index === 4) {
                tmpSide.push(new Sticker($(this).css('background-color'), MIDDLE_CUBE));
                index++;
            }
        });
        let redSideObj = new Side(RED, tmpSide);
        tmpSide = [];
        index = 0;

        $('#green-side').children().each(function () {
            if ([0, 2, 6, 8].includes(index)) {
                tmpSide.push(new Sticker($(this).css('background-color'), CORNER_CUBE));
                index++;
            }
            if ([1, 3, 5, 7].includes(index)) {
                tmpSide.push(new Sticker($(this).css('background-color'), EDGE_CUBE));
                index++;
            }
            if (index === 4) {
                tmpSide.push(new Sticker($(this).css('background-color'), MIDDLE_CUBE));
                index++;
            }
        });
        let greenSideObj = new Side(GREEN, tmpSide);
        tmpSide = [];
        index = 0;

        $('#orange-side').children().each(function () {
            if ([0, 2, 6, 8].includes(index)) {
                tmpSide.push(new Sticker($(this).css('background-color'), CORNER_CUBE));
                index++;
            }
            if ([1, 3, 5, 7].includes(index)) {
                tmpSide.push(new Sticker($(this).css('background-color'), EDGE_CUBE));
                index++;
            }
            if (index === 4) {
                tmpSide.push(new Sticker($(this).css('background-color'), MIDDLE_CUBE));
                index++;
            }
        });
        let orangeSideObj = new Side(ORANGE, tmpSide);
        tmpSide = [];
        index = 0;

        $('#blue-side').children().each(function () {
            if ([0, 2, 6, 8].includes(index)) {
                tmpSide.push(new Sticker($(this).css('background-color'), CORNER_CUBE));
                index++;
            }
            if ([1, 3, 5, 7].includes(index)) {
                tmpSide.push(new Sticker($(this).css('background-color'), EDGE_CUBE));
                index++;
            }
            if (index === 4) {
                tmpSide.push(new Sticker($(this).css('background-color'), MIDDLE_CUBE));
                index++;
            }
        });
        let blueSideObj = new Side(BLUE, tmpSide);
        tmpSide = [];
        index = 0;

        $('#yellow-side').children().each(function () {
            if ([0, 2, 6, 8].includes(index)) {
                tmpSide.push(new Sticker($(this).css('background-color'), CORNER_CUBE));
                index++;
            }
            if ([1, 3, 5, 7].includes(index)) {
                tmpSide.push(new Sticker($(this).css('background-color'), EDGE_CUBE));
                index++;
            }
            if (index === 4) {
                tmpSide.push(new Sticker($(this).css('background-color'), MIDDLE_CUBE));
                index++;
            }
        });
        let yellowSideObj = new Side(YELLOW, tmpSide);
        tmpSide = [];
        index = 0;


        cube = new Cube(whiteSideObj, redSideObj, greenSideObj, orangeSideObj, blueSideObj, yellowSideObj);
        if (!cube.isSolved()) {
            document.getElementById('submit-cube-button').style.display = 'inline-block';
        }


        $('#right').click(function (e) {
            cube.rotate(cube.blueSide, false);
        });

        $('#right-backwards').click(function (e) {
            cube.rotate(cube.blueSide, true);
        });

        $('#left').click(function (e) {
            cube.rotate(cube.greenSide, false);
        });

        $('#left-backwards').click(function (e) {
            cube.rotate(cube.greenSide, true);
        });

        $('#front').click(function (e) {
            cube.rotate(cube.redSide, false);
        });

        $('#front-backwards').click(function (e) {
            cube.rotate(cube.redSide, true);
        });

        $('#back').click(function (e) {
            cube.rotate(cube.orangeSide, false);
        });

        $('#back-backwards').click(function (e) {
            cube.rotate(cube.orangeSide, true);
        });

        $('#down').click(function (e) {
            cube.rotate(cube.yellowSide, false);
        });

        $('#down-backwards').click(function (e) {
            cube.rotate(cube.yellowSide, true);
        });

        $('#up').click(function (e) {
            cube.rotate(cube.whiteSide, false);
        });

        $('#up-backwards').click(function (e) {
            cube.rotate(cube.whiteSide, true);
        });

        $('#check-cube').click(function (e) {
            cube.isSolved();
        });
    });

    $('#solve-button').click(function (e) {
        cube.whiteCross();
    });

    $('#mix-cube-button').click(function (e) {
        cube.mixCube();
    });

    $('#validity-check-button').click(function (e) {
        console.log(cube.isSolvable());
    });
});
