import { Sticker } from './classes/Sticker.js';
import { Side } from './classes/Side.js';
import { Cube } from './classes/Cube.js';
import { CORNER_CUBE, MIDDLE_CUBE, EDGE_CUBE } from './constants.js';
import { WHITE, RED, GREEN, ORANGE, BLUE, YELLOW } from './constants.js';
import {TwoByTwoCube} from "./classes/TwoByTwoCube.js";

let cube = null;
export const solvedCube = new Cube(
    new Side(WHITE,[
        new Sticker(WHITE, 2, new Set()),
        new Sticker(WHITE, 1, new Set()),
        new Sticker(WHITE, 2, new Set()),
        new Sticker(WHITE, 1, new Set()),
        new Sticker(WHITE, 0, new Set()),
        new Sticker(WHITE, 1, new Set()),
        new Sticker(WHITE, 2, new Set()),
        new Sticker(WHITE, 1, new Set()),
        new Sticker(WHITE, 2, new Set())]),
    new Side(RED, [
        new Sticker(RED, 2, new Set()),
        new Sticker(RED, 1, new Set()),
        new Sticker(RED, 2, new Set()),
        new Sticker(RED, 1, new Set()),
        new Sticker(RED, 0, new Set()),
        new Sticker(RED, 1, new Set()),
        new Sticker(RED, 2, new Set()),
        new Sticker(RED, 1, new Set()),
        new Sticker(RED, 2, new Set())]),
    new Side(GREEN, [
        new Sticker(GREEN, 2, new Set()),
        new Sticker(GREEN, 1, new Set()),
        new Sticker(GREEN, 2, new Set()),
        new Sticker(GREEN, 1, new Set()),
        new Sticker(GREEN, 0, new Set()),
        new Sticker(GREEN, 1, new Set()),
        new Sticker(GREEN, 2, new Set()),
        new Sticker(GREEN, 1, new Set()),
        new Sticker(GREEN, 2, new Set())]),
    new Side(ORANGE, [
        new Sticker(ORANGE, 2, new Set()),
        new Sticker(ORANGE, 1, new Set()),
        new Sticker(ORANGE, 2, new Set()),
        new Sticker(ORANGE, 1, new Set()),
        new Sticker(ORANGE, 0, new Set()),
        new Sticker(ORANGE, 1, new Set()),
        new Sticker(ORANGE, 2, new Set()),
        new Sticker(ORANGE, 1, new Set()),
        new Sticker(ORANGE, 2, new Set())]),
    new Side(BLUE,[
        new Sticker(BLUE, 2, new Set()),
        new Sticker(BLUE, 1, new Set()),
        new Sticker(BLUE, 2, new Set()),
        new Sticker(BLUE, 1, new Set()),
        new Sticker(BLUE, 0, new Set()),
        new Sticker(BLUE, 1, new Set()),
        new Sticker(BLUE, 2, new Set()),
        new Sticker(BLUE, 1, new Set()),
        new Sticker(BLUE, 2, new Set())]),
    new Side(YELLOW,[
        new Sticker(YELLOW, 2, new Set()),
        new Sticker(YELLOW, 1, new Set()),
        new Sticker(YELLOW, 2, new Set()),
        new Sticker(YELLOW, 1, new Set()),
        new Sticker(YELLOW, 0, new Set()),
        new Sticker(YELLOW, 1, new Set()),
        new Sticker(YELLOW, 2, new Set()),
        new Sticker(YELLOW, 1, new Set()),
        new Sticker(YELLOW, 2, new Set())])
);

solvedCube.whiteSide.stickers[0].neighbors.add(solvedCube.orangeSide.stickers[6].color).add(solvedCube.greenSide.stickers[2].color);
solvedCube.whiteSide.stickers[1].neighbors.add(solvedCube.orangeSide.stickers[7].color);
solvedCube.whiteSide.stickers[2].neighbors.add(solvedCube.orangeSide.stickers[8].color).add(solvedCube.blueSide.stickers[0].color);
solvedCube.whiteSide.stickers[3].neighbors.add(solvedCube.greenSide.stickers[5].color);
solvedCube.whiteSide.stickers[5].neighbors.add(solvedCube.blueSide.stickers[3].color);
solvedCube.whiteSide.stickers[6].neighbors.add(solvedCube.greenSide.stickers[8].color).add(solvedCube.redSide.stickers[0].color);
solvedCube.whiteSide.stickers[7].neighbors.add(solvedCube.redSide.stickers[1].color);
solvedCube.whiteSide.stickers[8].neighbors.add(solvedCube.redSide.stickers[2].color).add(solvedCube.blueSide.stickers[6].color);

solvedCube.blueSide.stickers[0].neighbors.add(solvedCube.orangeSide.stickers[8].color).add(solvedCube.whiteSide.stickers[2].color);
solvedCube.blueSide.stickers[1].neighbors.add(solvedCube.orangeSide.stickers[5].color);
solvedCube.blueSide.stickers[2].neighbors.add(solvedCube.orangeSide.stickers[2].color).add(solvedCube.yellowSide.stickers[8].color);
solvedCube.blueSide.stickers[3].neighbors.add(solvedCube.whiteSide.stickers[5].color);
solvedCube.blueSide.stickers[5].neighbors.add(solvedCube.yellowSide.stickers[5].color);
solvedCube.blueSide.stickers[6].neighbors.add(solvedCube.whiteSide.stickers[8].color).add(solvedCube.redSide.stickers[2].color);
solvedCube.blueSide.stickers[7].neighbors.add(solvedCube.redSide.stickers[5].color);
solvedCube.blueSide.stickers[8].neighbors.add(solvedCube.redSide.stickers[8].color).add(solvedCube.yellowSide.stickers[2].color);

solvedCube.orangeSide.stickers[0].neighbors.add(solvedCube.greenSide.stickers[0].color).add(solvedCube.yellowSide.stickers[6].color);
solvedCube.orangeSide.stickers[1].neighbors.add(solvedCube.yellowSide.stickers[6].color);
solvedCube.orangeSide.stickers[2].neighbors.add(solvedCube.yellowSide.stickers[8].color).add(solvedCube.blueSide.stickers[2].color);
solvedCube.orangeSide.stickers[3].neighbors.add(solvedCube.greenSide.stickers[3].color);
solvedCube.orangeSide.stickers[5].neighbors.add(solvedCube.blueSide.stickers[1].color);
solvedCube.orangeSide.stickers[6].neighbors.add(solvedCube.greenSide.stickers[2].color).add(solvedCube.whiteSide.stickers[0].color);
solvedCube.orangeSide.stickers[7].neighbors.add(solvedCube.whiteSide.stickers[1].color);
solvedCube.orangeSide.stickers[8].neighbors.add(solvedCube.whiteSide.stickers[2].color).add(solvedCube.blueSide.stickers[0].color);

solvedCube.greenSide.stickers[0].neighbors.add(solvedCube.orangeSide.stickers[0].color).add(solvedCube.yellowSide.stickers[6].color);
solvedCube.greenSide.stickers[1].neighbors.add(solvedCube.orangeSide.stickers[3].color);
solvedCube.greenSide.stickers[2].neighbors.add(solvedCube.orangeSide.stickers[6].color).add(solvedCube.whiteSide.stickers[0].color);
solvedCube.greenSide.stickers[3].neighbors.add(solvedCube.yellowSide.stickers[3].color);
solvedCube.greenSide.stickers[5].neighbors.add(solvedCube.whiteSide.stickers[3].color);
solvedCube.greenSide.stickers[6].neighbors.add(solvedCube.yellowSide.stickers[0].color).add(solvedCube.redSide.stickers[6].color);
solvedCube.greenSide.stickers[7].neighbors.add(solvedCube.redSide.stickers[3].color);
solvedCube.greenSide.stickers[8].neighbors.add(solvedCube.whiteSide.stickers[6].color).add(solvedCube.redSide.stickers[0].color);

solvedCube.redSide.stickers[0].neighbors.add(solvedCube.greenSide.stickers[8].color).add(solvedCube.whiteSide.stickers[6].color);
solvedCube.redSide.stickers[1].neighbors.add(solvedCube.whiteSide.stickers[7].color);
solvedCube.redSide.stickers[2].neighbors.add(solvedCube.whiteSide.stickers[8].color).add(solvedCube.blueSide.stickers[6].color);
solvedCube.redSide.stickers[3].neighbors.add(solvedCube.greenSide.stickers[7].color);
solvedCube.redSide.stickers[5].neighbors.add(solvedCube.blueSide.stickers[7].color);
solvedCube.redSide.stickers[6].neighbors.add(solvedCube.yellowSide.stickers[0].color).add(solvedCube.greenSide.stickers[6].color);
solvedCube.redSide.stickers[7].neighbors.add(solvedCube.yellowSide.stickers[1].color);
solvedCube.redSide.stickers[8].neighbors.add(solvedCube.yellowSide.stickers[2].color).add(solvedCube.blueSide.stickers[8].color);

solvedCube.yellowSide.stickers[0].neighbors.add(solvedCube.redSide.stickers[6].color).add(solvedCube.greenSide.stickers[6].color);
solvedCube.yellowSide.stickers[1].neighbors.add(solvedCube.redSide.stickers[7].color);
solvedCube.yellowSide.stickers[2].neighbors.add(solvedCube.blueSide.stickers[8].color).add(solvedCube.redSide.stickers[8].color);
solvedCube.yellowSide.stickers[3].neighbors.add(solvedCube.greenSide.stickers[3].color);
solvedCube.yellowSide.stickers[5].neighbors.add(solvedCube.blueSide.stickers[5].color);
solvedCube.yellowSide.stickers[6].neighbors.add(solvedCube.orangeSide.stickers[0].color).add(solvedCube.greenSide.stickers[0].color);
solvedCube.yellowSide.stickers[7].neighbors.add(solvedCube.orangeSide.stickers[1].color);
solvedCube.yellowSide.stickers[8].neighbors.add(solvedCube.blueSide.stickers[2].color).add(solvedCube.orangeSide.stickers[2].color);

$('document').ready(function() {
    $('.state').tooltip();

    $('#fill-to-solved-state').click(function (e) {
        let redChildren = document.getElementById('red-side').children;
        for (let i = 0; i < document.getElementById('red-side').children.length; i++) {
            redChildren[i].style.backgroundColor = RED;
        }
        let blueChildren = document.getElementById('blue-side').children;
        for (let i = 0; i < document.getElementById('blue-side').children.length; i++) {
            blueChildren[i].style.backgroundColor = BLUE;
        }
        let greenChildren = document.getElementById('green-side').children;
        for (let i = 0; i < document.getElementById('green-side').children.length; i++) {
            greenChildren[i].style.backgroundColor = GREEN;
        }
        let yellowChildren = document.getElementById('yellow-side').children;
        for (let i = 0; i < document.getElementById('yellow-side').children.length; i++) {
            yellowChildren[i].style.backgroundColor = YELLOW;
        }
        let whiteChildren = document.getElementById('white-side').children;
        for (let i = 0; i < document.getElementById('white-side').children.length; i++) {
            whiteChildren[i].style.backgroundColor = WHITE;
        }
        let orangeChildren = document.getElementById('orange-side').children;
        for (let i = 0; i < document.getElementById('orange-side').children.length; i++) {
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
        document.getElementById('solve-button').style.display = 'block';
        document.getElementById('submit-cube-button').style.display = 'none';
        document.getElementById('color-picker').style.display = 'none';
        document.getElementById('cube-rotation-buttons-container').style.display = 'block';
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
    });

    $('#right').click(function (e) {
        cube.rotate(cube.blueSide, false, true);
    });

    $('#right-backwards').click(function (e) {
        cube.rotate(cube.blueSide, true, true);
    });

    $('#left').click(function (e) {
        cube.rotate(cube.greenSide, false, true);
    });

    $('#left-backwards').click(function (e) {
        cube.rotate(cube.greenSide, true, true);
    });

    $('#front').click(function (e) {
        cube.rotate(cube.redSide, false, true);
    });

    $('#front-backwards').click(function (e) {
        cube.rotate(cube.redSide, true, true);
    });

    $('#back').click(function (e) {
        cube.rotate(cube.orangeSide, false, true);
    });

    $('#back-backwards').click(function (e) {
        cube.rotate(cube.orangeSide, true, true);
    });

    $('#down').click(function (e) {
        cube.rotate(cube.yellowSide, false, true);
    });

    $('#down-backwards').click(function (e) {
        cube.rotate(cube.yellowSide, true, true);
    });

    $('#up').click(function (e) {
        cube.rotate(cube.whiteSide, false, true);
    });

    $('#up-backwards').click(function (e) {
        cube.rotate(cube.whiteSide, true, true);
    });

    $('#check-cube').click(function (e) {
        cube.isSolved();
    });

    $('#solve-button').click(function (e) {
        $('#state-one').addClass('active-state');
        cube.whiteCross();
        $(this).hide();
        $('#white-corners-button').show();
    });

    $('#white-corners-button').click(function (e) {
        $('#state-one').removeClass('active-state');
        $('#state-two').addClass('active-state');
        cube.whiteCorners();
        $(this).hide();
        $('#color-edges-button').show();
    });

    $('#color-edges-button').click(function (e) {
        $('#state-two').removeClass('active-state');
        $('#state-three').addClass('active-state');
        cube.colorEdges();
        $(this).hide();
        $('#yellow-cross-button').show();
    });

    $('#yellow-cross-button').click(function (e) {
        $('#state-three').removeClass('active-state');
        $('#state-four').addClass('active-state');
        cube.yellowCross();
        $(this).hide();
        $('#yellow-edges-button').show();
    });

    $('#yellow-edges-button').click(function (e) {
        $('#state-four').removeClass('active-state');
        $('#state-five').addClass('active-state');
        cube.yellowEdges();
        $(this).hide();
        $('#yellow-corners-button').show();
    });

    $('#yellow-corners-button').click(function (e) {
        $('#state-five').removeClass('active-state');
        $('#state-six').addClass('active-state');
        cube.yellowCornerPosition();
        $(this).hide();
        $('#yellow-corners-rotation-button').show();
    });

    $('#yellow-corners-rotation-button').click(function (e) {
        $('#state-six').removeClass('active-state');
        $('#state-seven').addClass('active-state');
        cube.yellowCornerRotation();
        $(this).hide();
    });

    $('#mix-cube-button').click(function (e) {
        $('.state').removeClass('active-state');
        cube.mixCube(20);
        $('#solve-button').show();
        $('#white-corners-button').hide();
        $('#color-edges-button').hide();
    });

    $('#validity-check-button').click(function (e) {
        console.log(cube.isSolvable());
    });


    // *** TwoByTwo Cube functions ***
    $('#submit-cube-button-tbt').click(function (e) {
        // document.getElementById('solve-button').style.display = 'block';
        document.getElementById('submit-cube-button-tbt').style.display = 'none';
        document.getElementById('color-picker').style.display = 'none';
        document.getElementById('cube-rotation-buttons-container').style.display = 'block';
        document.getElementById('fill-to-solved-state').style.display = 'none';
        let tmpSide = [];
        let index = 0;

        $('#white-side').children().each(function () {
                tmpSide.push(new Sticker($(this).css('background-color'), CORNER_CUBE));
                index++;
        });

        let whiteSideObj = new Side(WHITE, tmpSide);
        tmpSide = [];
        index = 0;

        $('#red-side').children().each(function () {
                tmpSide.push(new Sticker($(this).css('background-color'), CORNER_CUBE));
                index++;
        });
        let redSideObj = new Side(RED, tmpSide);
        tmpSide = [];
        index = 0;

        $('#green-side').children().each(function () {
                tmpSide.push(new Sticker($(this).css('background-color'), CORNER_CUBE));
                index++;
        });
        let greenSideObj = new Side(GREEN, tmpSide);
        tmpSide = [];
        index = 0;

        $('#orange-side').children().each(function () {
                tmpSide.push(new Sticker($(this).css('background-color'), CORNER_CUBE));
                index++;
        });
        let orangeSideObj = new Side(ORANGE, tmpSide);
        tmpSide = [];
        index = 0;

        $('#blue-side').children().each(function () {
                tmpSide.push(new Sticker($(this).css('background-color'), CORNER_CUBE));
                index++;
        });
        let blueSideObj = new Side(BLUE, tmpSide);
        tmpSide = [];
        index = 0;

        $('#yellow-side').children().each(function () {
                tmpSide.push(new Sticker($(this).css('background-color'), CORNER_CUBE));
                index++;
        });
        let yellowSideObj = new Side(YELLOW, tmpSide);
        tmpSide = [];
        index = 0;

        cube = new TwoByTwoCube(whiteSideObj, redSideObj, greenSideObj, orangeSideObj, blueSideObj, yellowSideObj);
        /* if (!cube.isSolved()) {
            document.getElementById('submit-cube-button-tbt').style.display = 'inline-block';
        } */
    });

    $('#solve-pocket-button').click(function (e) {
        $('#state-one').addClass('active-state');
        cube.whiteSidePocket();
        // $(this).hide();
        // $('#white-corners-button').show();
    });

    $('#yellow-corner-pocket-button').click(function (e) {
        $('#state-one').removeClass('active-state');
        $('#state-two').addClass('active-state');
        cube.yellowCornerPositionPocket();
        // $(this).hide();
        // $('#white-corners-button').show();
    });
    $('#yellow-rotation-pocket-button').click(function (e) {
        $('#state-two').removeClass('active-state');
        $('#state-three').addClass('active-state');
        cube.yellowCornerRotationPocket();
        // $(this).hide();
        // $('#white-corners-button').show();
    });


    // *** TwoByTwo functions END ***
});
