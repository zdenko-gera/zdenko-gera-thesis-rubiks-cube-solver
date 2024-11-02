import { Sticker } from './classes/Sticker.js';
import { Side } from './classes/Side.js';
import { Cube } from './classes/Cube.js';

export const MIDDLE_CUBE = 0;
export const EDGE_CUBE = 1;
export const CORNER_CUBE = 2;

let cube = null;

$('document').ready(function() {
    $('#fill-to-solved-state').click(function (e) {
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
        let whiteSideObj = new Side('rgb(255, 255, 255)', tmpSide);
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
        let redSideObj = new Side('rgb(219, 88, 86)', tmpSide);
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
        let greenSideObj = new Side('rgb(134, 213, 134)', tmpSide);
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
        let orangeSideObj = new Side('rgb(255, 150, 65)', tmpSide);
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
        let blueSideObj = new Side('rgb(162, 191, 254)', tmpSide);
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
        let yellowSideObj = new Side('rgb(255, 255, 153)', tmpSide);
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
});
