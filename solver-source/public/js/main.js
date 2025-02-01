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

        let whiteSideHtml = document.getElementById('white-side');
        for (let i = 0; i < whiteSideHtml.children.length; i++) {
            if ([0, 2, 6, 8].includes(i)) {
                tmpSide.push(new Sticker(whiteSideHtml.children[i].style.backgroundColor, CORNER_CUBE));
            }
            if ([1, 3, 5, 7].includes(i)) {
                tmpSide.push(new Sticker(whiteSideHtml.children[i].style.backgroundColor, EDGE_CUBE));
            }
            if (i === 4) {
                tmpSide.push(new Sticker(whiteSideHtml.children[i].style.backgroundColor, MIDDLE_CUBE));
            }
        }
        let whiteSideObj = new Side(WHITE, tmpSide);
        tmpSide = [];

        let redSideHtml = document.getElementById('red-side');
        for (let i = 0; i < redSideHtml.children.length; i++) {
            if ([0, 2, 6, 8].includes(i)) {
                tmpSide.push(new Sticker(redSideHtml.children[i].style.backgroundColor, CORNER_CUBE));
            }
            if ([1, 3, 5, 7].includes(i)) {
                tmpSide.push(new Sticker(redSideHtml.children[i].style.backgroundColor, EDGE_CUBE));
            }
            if (i === 4) {
                tmpSide.push(new Sticker(redSideHtml.children[i].style.backgroundColor, MIDDLE_CUBE));
            }
        }
        let redSideObj = new Side(RED, tmpSide);
        tmpSide = [];

        let greenSideHtml = document.getElementById('green-side');
        for (let i = 0; i < greenSideHtml.children.length; i++) {
            if ([0, 2, 6, 8].includes(i)) {
                tmpSide.push(new Sticker(greenSideHtml.children[i].style.backgroundColor, CORNER_CUBE));
            }
            if ([1, 3, 5, 7].includes(i)) {
                tmpSide.push(new Sticker(greenSideHtml.children[i].style.backgroundColor, EDGE_CUBE));
            }
            if (i === 4) {
                tmpSide.push(new Sticker(greenSideHtml.children[i].style.backgroundColor, MIDDLE_CUBE));
            }
        }
        let greenSideObj = new Side(GREEN, tmpSide);
        tmpSide = [];

        let orangeSideHtml = document.getElementById('orange-side');
        for (let i = 0; i < orangeSideHtml.children.length; i++) {
            if ([0, 2, 6, 8].includes(i)) {
                tmpSide.push(new Sticker(orangeSideHtml.children[i].style.backgroundColor, CORNER_CUBE));
            }
            if ([1, 3, 5, 7].includes(i)) {
                tmpSide.push(new Sticker(orangeSideHtml.children[i].style.backgroundColor, EDGE_CUBE));
            }
            if (i === 4) {
                tmpSide.push(new Sticker(orangeSideHtml.children[i].style.backgroundColor, MIDDLE_CUBE));
            }
        }
        let orangeSideObj = new Side(ORANGE, tmpSide);
        tmpSide = [];

        let blueSideHtml = document.getElementById('blue-side');
        for (let i = 0; i < blueSideHtml.children.length; i++) {
            if ([0, 2, 6, 8].includes(i)) {
                tmpSide.push(new Sticker(blueSideHtml.children[i].style.backgroundColor, CORNER_CUBE));
            }
            if ([1, 3, 5, 7].includes(i)) {
                tmpSide.push(new Sticker(blueSideHtml.children[i].style.backgroundColor, EDGE_CUBE));
            }
            if (i === 4) {
                tmpSide.push(new Sticker(blueSideHtml.children[i].style.backgroundColor, MIDDLE_CUBE));
            }
        }
        let blueSideObj = new Side(BLUE, tmpSide);
        tmpSide = [];

        let yellowSideHtml = document.getElementById('yellow-side');
        for (let i = 0; i < yellowSideHtml.children.length; i++) {
            if ([0, 2, 6, 8].includes(i)) {
                tmpSide.push(new Sticker(yellowSideHtml.children[i].style.backgroundColor, CORNER_CUBE));
            }
            if ([1, 3, 5, 7].includes(i)) {
                tmpSide.push(new Sticker(yellowSideHtml.children[i].style.backgroundColor, EDGE_CUBE));
            }
            if (i === 4) {
                tmpSide.push(new Sticker(yellowSideHtml.children[i].style.backgroundColor, MIDDLE_CUBE));
            }
        }
        let yellowSideObj = new Side(YELLOW, tmpSide);

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
        $('#solve-pocket-button').show();
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
        $(this).hide();
        $('#yellow-corner-pocket-button').show();
    });

    $('#yellow-corner-pocket-button').click(function (e) {
        $('#state-one').removeClass('active-state');
        $('#state-two').addClass('active-state');
        cube.yellowCornerPositionPocket();
        $(this).hide();
        $('#yellow-rotation-pocket-button').show();
    });
    $('#yellow-rotation-pocket-button').click(function (e) {
        $('#state-two').removeClass('active-state');
        $('#state-three').addClass('active-state');
        cube.yellowCornerRotationPocket();
        $(this).hide();
    });


    // *** TwoByTwo functions END ***

    $('#add-record-btn').click(function (e) {
        $('#add-record-form').toggle(200);
    });

    $('#info-msg').delay(5000).hide(200);
    $('#error-msg').delay(5000).hide(200);
    $('#success-msg').delay(5000).hide(200);




    if (location.pathname=="/timer") {
        let timerDisplay = document.getElementById('timer-display');
        const startButton = document.getElementById("timer-start-btn");
        const pauseButton = document.getElementById("timer-pause-btn");
        const resetButton = document.getElementById("timer-reset-btn");
        let elapsedTime = 0;
        let startTime = 0;
        let running = false;
        let intervalId;

        function formatTime(ms) {
            let totalSeconds = Math.floor(ms / 1000);
            let hours = Math.floor(totalSeconds / 3600);
            let minutes = Math.floor((totalSeconds % 3600) / 60);
            let seconds = totalSeconds % 60;
            let milliseconds = ms % 1000;

            return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(3, "0")}`;
        }

        function updateTimer() {
            const currentTime = Date.now();
            elapsedTime = currentTime - startTime;
            timerDisplay.textContent = formatTime(elapsedTime);
        }

        startButton.addEventListener("click", () => {
            if (!running) {
                startTime = Date.now() - elapsedTime;
                intervalId = setInterval(updateTimer, 10);
                running = true;
            }
        });

        document.addEventListener("keyup", function (event) {
            if (event.ctrlKey && event.keyCode === 32) {
                event.preventDefault();
                if (!running) {
                    startTime = Date.now() - elapsedTime;
                    intervalId = setInterval(updateTimer, 1);
                    running = true;
                }
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.keyCode === 32) {
                event.preventDefault();
                pauseTimer();
            }
        });

        pauseButton.addEventListener("click", () => {
            pauseTimer();
        });

        resetButton.addEventListener("click", () => {
            clearInterval(intervalId);
            elapsedTime = 0;
            running = false;
            timerDisplay.textContent = "00:00:00.000";
        });

        function pauseTimer() {
            if (running) {
                clearInterval(intervalId);
                running = false;
            }

            if (document.getElementById('best-time-until-now') !== null) {

                let hour = parseInt(timerDisplay.innerText.substring(0, 2));
                let minute = parseInt(timerDisplay.innerText.substring(3, 5));
                let second = parseInt(timerDisplay.innerText.substring(6, 8));
                let msecond = parseInt(timerDisplay.innerText.substring(9, 12));
                let inMsec = hour * 3600000 + minute * 60000 + second * 1000 + msecond;

                if (inMsec < document.getElementById('sum-in-msec').innerText) {
                    $('#add-record-form').show();
                    $('#time-inputs').hide();
                    $("input[name=hour]").val(hour);
                    $("input[name=min]").val(minute);
                    $("input[name=sec]").val(second);
                    $("input[name=msec]").val(msecond);
                }
            }
        }

        $('#cancel-record-save').click(function (e) {
            $('#add-record-form').hide();
        });
    }

    $('#cube-container > canvas').hide();

    $('#dimension-selector-wrapper').click(function (e) {
        if ($('#2-dim').hasClass('active-dim-option')) {
            $('#2-dim').removeClass('active-dim-option');
            $('#3-dim').addClass('active-dim-option');
            $('#cube-container > canvas').show();
            $('#cube-container > div').hide();
        } else {
            $('#2-dim').addClass('active-dim-option');
            $('#3-dim').removeClass('active-dim-option');
            $('#cube-container > canvas').hide();
            $('#cube-container > div').show();
        }
    });
});
