import { MIDDLE_CUBE } from "../main.js";
import { EDGE_CUBE } from "../main.js";
import { CORNER_CUBE } from "../main.js";
import {Sticker} from "./Sticker.js";

export class Cube {
    whiteSide;
    redSide;
    greenSide;
    orangeSide;
    blueSide;
    yellowSide;
    sides;

    constructor(whiteSide, redSide, greenSide, orangeSide, blueSide, yellowSide) {
        this.whiteSide = whiteSide;
        this.redSide = redSide;
        this.greenSide = greenSide;
        this.orangeSide = orangeSide;
        this.blueSide = blueSide;
        this.yellowSide = yellowSide;

        this.sides = [this.redSide, this.whiteSide, this.greenSide, this.blueSide, this.orangeSide, this.yellowSide];

        // Matricák szomszédsági viszonyának megadása oldalanként:
        this.whiteSide.stickers[0].neighbors.add(this.orangeSide.stickers[6].color).add(this.greenSide.stickers[2].color);
        this.whiteSide.stickers[1].neighbors.add(this.orangeSide.stickers[7].color);
        this.whiteSide.stickers[2].neighbors.add(this.orangeSide.stickers[8].color).add(this.blueSide.stickers[0].color);
        this.whiteSide.stickers[3].neighbors.add(this.greenSide.stickers[5].color);
        this.whiteSide.stickers[5].neighbors.add(this.blueSide.stickers[3].color);
        this.whiteSide.stickers[6].neighbors.add(this.greenSide.stickers[8].color).add(this.redSide.stickers[0].color);
        this.whiteSide.stickers[7].neighbors.add(this.redSide.stickers[1].color);
        this.whiteSide.stickers[8].neighbors.add(this.redSide.stickers[2].color).add(this.blueSide.stickers[6].color);

        this.blueSide.stickers[0].neighbors.add(this.orangeSide.stickers[8].color).add(this.whiteSide.stickers[2].color);
        this.blueSide.stickers[1].neighbors.add(this.orangeSide.stickers[5].color);
        this.blueSide.stickers[2].neighbors.add(this.orangeSide.stickers[2].color).add(this.yellowSide.stickers[8].color);
        this.blueSide.stickers[3].neighbors.add(this.whiteSide.stickers[5].color);
        this.blueSide.stickers[5].neighbors.add(this.yellowSide.stickers[5].color);
        this.blueSide.stickers[6].neighbors.add(this.whiteSide.stickers[8].color).add(this.redSide.stickers[2].color);
        this.blueSide.stickers[7].neighbors.add(this.redSide.stickers[5].color);
        this.blueSide.stickers[8].neighbors.add(this.redSide.stickers[8].color).add(this.yellowSide.stickers[2].color);

        this.orangeSide.stickers[0].neighbors.add(this.greenSide.stickers[0].color).add(this.yellowSide.stickers[6].color);
        this.orangeSide.stickers[1].neighbors.add(this.yellowSide.stickers[6].color);
        this.orangeSide.stickers[2].neighbors.add(this.yellowSide.stickers[8].color).add(this.blueSide.stickers[2].color);
        this.orangeSide.stickers[3].neighbors.add(this.greenSide.stickers[3].color);
        this.orangeSide.stickers[5].neighbors.add(this.blueSide.stickers[1].color);
        this.orangeSide.stickers[6].neighbors.add(this.greenSide.stickers[2].color).add(this.whiteSide.stickers[0].color);
        this.orangeSide.stickers[7].neighbors.add(this.whiteSide.stickers[1].color);
        this.orangeSide.stickers[8].neighbors.add(this.whiteSide.stickers[2].color).add(this.blueSide.stickers[0].color);

        this.greenSide.stickers[0].neighbors.add(this.orangeSide.stickers[0].color).add(this.yellowSide.stickers[6].color);
        this.greenSide.stickers[1].neighbors.add(this.orangeSide.stickers[3].color);
        this.greenSide.stickers[2].neighbors.add(this.orangeSide.stickers[6].color).add(this.whiteSide.stickers[0].color);
        this.greenSide.stickers[3].neighbors.add(this.yellowSide.stickers[3].color);
        this.greenSide.stickers[5].neighbors.add(this.whiteSide.stickers[3].color);
        this.greenSide.stickers[6].neighbors.add(this.yellowSide.stickers[0].color).add(this.redSide.stickers[6].color);
        this.greenSide.stickers[7].neighbors.add(this.redSide.stickers[3].color);
        this.greenSide.stickers[8].neighbors.add(this.whiteSide.stickers[6].color).add(this.redSide.stickers[0].color);

        this.redSide.stickers[0].neighbors.add(this.greenSide.stickers[8].color).add(this.whiteSide.stickers[6].color);
        this.redSide.stickers[1].neighbors.add(this.whiteSide.stickers[7].color);
        this.redSide.stickers[2].neighbors.add(this.whiteSide.stickers[8].color).add(this.blueSide.stickers[6].color);
        this.redSide.stickers[3].neighbors.add(this.greenSide.stickers[7].color);
        this.redSide.stickers[5].neighbors.add(this.blueSide.stickers[7].color);
        this.redSide.stickers[6].neighbors.add(this.yellowSide.stickers[0].color).add(this.greenSide.stickers[6].color);
        this.redSide.stickers[7].neighbors.add(this.yellowSide.stickers[1].color);
        this.redSide.stickers[8].neighbors.add(this.yellowSide.stickers[2].color).add(this.blueSide.stickers[8].color);

        this.yellowSide.stickers[0].neighbors.add(this.redSide.stickers[6].color).add(this.greenSide.stickers[6].color);
        this.yellowSide.stickers[1].neighbors.add(this.redSide.stickers[7].color);
        this.yellowSide.stickers[2].neighbors.add(this.blueSide.stickers[8].color).add(this.redSide.stickers[8].color);
        this.yellowSide.stickers[3].neighbors.add(this.greenSide.stickers[3].color);
        this.yellowSide.stickers[5].neighbors.add(this.blueSide.stickers[5].color);
        this.yellowSide.stickers[6].neighbors.add(this.orangeSide.stickers[0].color).add(this.greenSide.stickers[0].color);
        this.yellowSide.stickers[7].neighbors.add(this.orangeSide.stickers[1].color);
        this.yellowSide.stickers[8].neighbors.add(this.blueSide.stickers[2].color).add(this.orangeSide.stickers[2].color);

        //matricák melyik oldalhoz tartoznak:
        for (let i = 0; i < this.whiteSide.stickers.length; i++) {
            this.whiteSide.stickers[i].side = this.whiteSide;
            this.redSide.stickers[i].side = this.redSide;
            this.greenSide.stickers[i].side = this.greenSide;
            this.orangeSide.stickers[i].side = this.orangeSide;
            this.blueSide.stickers[i].side = this.blueSide;
            this.yellowSide.stickers[i].side = this.yellowSide;
        }
    }

    /**
     * Renders the cube according to the stored values.
     */
    reRenderCube() {
        let redChildren = document.getElementById('red-side').children;
        for (let i = 0; i < 9; i++) {
            redChildren[i].style.backgroundColor = this.redSide.stickers[i].color;
        }
        let blueChildren = document.getElementById('blue-side').children;
        for (let i = 0; i < 9; i++) {
            blueChildren[i].style.backgroundColor = this.blueSide.stickers[i].color;
        }
        let greenChildren = document.getElementById('green-side').children;
        for (let i = 0; i < 9; i++) {
            greenChildren[i].style.backgroundColor = this.greenSide.stickers[i].color;
        }
        let yellowChildren = document.getElementById('yellow-side').children;
        for (let i = 0; i < 9; i++) {
            yellowChildren[i].style.backgroundColor = this.yellowSide.stickers[i].color;
        }
        let whiteChildren = document.getElementById('white-side').children;
        for (let i = 0; i < 9; i++) {
            whiteChildren[i].style.backgroundColor = this.whiteSide.stickers[i].color;
        }
        let orangeChildren = document.getElementById('orange-side').children;
        for (let i = 0; i < 9; i++) {
            orangeChildren[i].style.backgroundColor = this.orangeSide.stickers[i].color;
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
            if (!validColors.includes(this.whiteSide.stickers[i].color)) {
                isValid = false;
            }
            if (this.whiteSide.stickers[i].color !== this.whiteSide.getMiddleColor()) {
                isSolved = false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (!validColors.includes(this.redSide.stickers[i].color)) {
                isValid = false;
            }
            if (this.redSide.stickers[i].color !== this.redSide.getMiddleColor()) {
                isSolved = false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (!validColors.includes(this.greenSide.stickers[i].color)) {
                isValid = false;
            }
            if (this.greenSide.stickers[i].color !== this.greenSide.getMiddleColor()) {
                isSolved = false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (!validColors.includes(this.orangeSide.stickers[i].color)) {
                isValid = false;
            }
            if (this.orangeSide.stickers[i].color !== this.orangeSide.getMiddleColor()) {
                isSolved = false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (!validColors.includes(this.blueSide.stickers[i].color)) {
                isValid = false;

            }
            if (this.blueSide.stickers[i].color !== this.blueSide.getMiddleColor()) {
                isSolved = false;
            }
        }

        for (let i = 0; i < 9; i++) {
            if (!validColors.includes(this.yellowSide.stickers[i].color)) {
                isValid = false;
            }
            if (this.yellowSide.stickers[i].color !== this.yellowSide.getMiddleColor()) {
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
        } else {
            document.getElementById('error-msg').style.display = "block";
            document.getElementById('error-msg').innerText = 'A kocka nincs kirakva!';
            setTimeout(function () {
                document.getElementById('error-msg').style.display = 'none'
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
            side.stickers[0] = tmpSide.stickers[6];
            side.stickers[1] = tmpSide.stickers[3];
            side.stickers[2] = tmpSide.stickers[0];
            side.stickers[3] = tmpSide.stickers[7];
            side.stickers[5] = tmpSide.stickers[1];
            side.stickers[6] = tmpSide.stickers[8];
            side.stickers[7] = tmpSide.stickers[5];
            side.stickers[8] = tmpSide.stickers[2];


            //A következő if-ek a forgatott oldal szomszédos oldalain lévő matricák forgatását garantálja.
            //FEHÉRET FORGATJUK
            if (side.getMiddleColor() === 'rgb(255, 255, 255)') {
                this.redSide.stickers[0] = tmpBlueSide.stickers[0];
                this.redSide.stickers[1] = tmpBlueSide.stickers[3];
                this.redSide.stickers[2] = tmpBlueSide.stickers[6];

                this.blueSide.stickers[0] = tmpOrangeSide.stickers[6];
                this.blueSide.stickers[3] = tmpOrangeSide.stickers[7];
                this.blueSide.stickers[6] = tmpOrangeSide.stickers[8];

                this.orangeSide.stickers[6] = tmpGreenSide.stickers[2];
                this.orangeSide.stickers[7] = tmpGreenSide.stickers[5];
                this.orangeSide.stickers[8] = tmpGreenSide.stickers[8];

                this.greenSide.stickers[2] = tmpRedSide.stickers[0];
                this.greenSide.stickers[5] = tmpRedSide.stickers[1];
                this.greenSide.stickers[8] = tmpRedSide.stickers[2];
            }

            //PIROSAT FORGATJUK
            if (side.getMiddleColor() === 'rgb(219, 88, 86)') {
                this.blueSide.stickers[6] = tmpWhiteSide.stickers[6];
                this.blueSide.stickers[7] = tmpWhiteSide.stickers[7];
                this.blueSide.stickers[8] = tmpWhiteSide.stickers[8];

                this.yellowSide.stickers[0] = tmpBlueSide.stickers[8];
                this.yellowSide.stickers[1] = tmpBlueSide.stickers[7];
                this.yellowSide.stickers[2] = tmpBlueSide.stickers[6];

                this.greenSide.stickers[6] = tmpYellowSide.stickers[2];
                this.greenSide.stickers[7] = tmpYellowSide.stickers[1];
                this.greenSide.stickers[8] = tmpYellowSide.stickers[0];

                this.whiteSide.stickers[6] = tmpGreenSide.stickers[6];
                this.whiteSide.stickers[7] = tmpGreenSide.stickers[7];
                this.whiteSide.stickers[8] = tmpGreenSide.stickers[8];
            }

            //KÉKET FORGATJUK
            if (side.getMiddleColor() === 'rgb(162, 191, 254)') {
                this.orangeSide.stickers[2] = tmpWhiteSide.stickers[2];
                this.orangeSide.stickers[5] = tmpWhiteSide.stickers[5];
                this.orangeSide.stickers[8] = tmpWhiteSide.stickers[8];

                this.yellowSide.stickers[2] = tmpOrangeSide.stickers[2];
                this.yellowSide.stickers[5] = tmpOrangeSide.stickers[5];
                this.yellowSide.stickers[8] = tmpOrangeSide.stickers[8];

                this.redSide.stickers[2] = tmpYellowSide.stickers[2];
                this.redSide.stickers[5] = tmpYellowSide.stickers[5];
                this.redSide.stickers[8] = tmpYellowSide.stickers[8];

                this.whiteSide.stickers[2] = tmpRedSide.stickers[2];
                this.whiteSide.stickers[5] = tmpRedSide.stickers[5];
                this.whiteSide.stickers[8] = tmpRedSide.stickers[8];
            }

            //NARANCSOT FORGATJUK
            if (side.getMiddleColor() === 'rgb(255, 150, 65)') {
                this.blueSide.stickers[0] = tmpYellowSide.stickers[8];
                this.blueSide.stickers[1] = tmpYellowSide.stickers[7];
                this.blueSide.stickers[2] = tmpYellowSide.stickers[6];

                this.yellowSide.stickers[6] = tmpGreenSide.stickers[2];
                this.yellowSide.stickers[7] = tmpGreenSide.stickers[1];
                this.yellowSide.stickers[8] = tmpGreenSide.stickers[0];

                this.greenSide.stickers[0] = tmpWhiteSide.stickers[0];
                this.greenSide.stickers[1] = tmpWhiteSide.stickers[1];
                this.greenSide.stickers[2] = tmpWhiteSide.stickers[2];

                this.whiteSide.stickers[0] = tmpBlueSide.stickers[0];
                this.whiteSide.stickers[1] = tmpBlueSide.stickers[1];
                this.whiteSide.stickers[2] = tmpBlueSide.stickers[2];
            }

            //ZÖLDET FORGATJUK
            if (side.getMiddleColor() === 'rgb(134, 213, 134)') {
                this.orangeSide.stickers[0] = tmpYellowSide.stickers[0];
                this.orangeSide.stickers[3] = tmpYellowSide.stickers[3];
                this.orangeSide.stickers[6] = tmpYellowSide.stickers[6];

                this.yellowSide.stickers[0] = tmpRedSide.stickers[0];
                this.yellowSide.stickers[3] = tmpRedSide.stickers[3];
                this.yellowSide.stickers[6] = tmpRedSide.stickers[6];

                this.redSide.stickers[0] = tmpWhiteSide.stickers[0];
                this.redSide.stickers[3] = tmpWhiteSide.stickers[3];
                this.redSide.stickers[6] = tmpWhiteSide.stickers[6];

                this.whiteSide.stickers[0] = tmpOrangeSide.stickers[0];
                this.whiteSide.stickers[3] = tmpOrangeSide.stickers[3];
                this.whiteSide.stickers[6] = tmpOrangeSide.stickers[6];
            }

            //CITROMOT FORGATJUK
            if (side.getMiddleColor() === 'rgb(255, 255, 153)') {
                this.orangeSide.stickers[0] = tmpBlueSide.stickers[2];
                this.orangeSide.stickers[1] = tmpBlueSide.stickers[5];
                this.orangeSide.stickers[2] = tmpBlueSide.stickers[8];

                this.greenSide.stickers[0] = tmpOrangeSide.stickers[2];
                this.greenSide.stickers[3] = tmpOrangeSide.stickers[1];
                this.greenSide.stickers[6] = tmpOrangeSide.stickers[0];

                this.redSide.stickers[6] = tmpGreenSide.stickers[0];
                this.redSide.stickers[7] = tmpGreenSide.stickers[3];
                this.redSide.stickers[8] = tmpGreenSide.stickers[6];

                this.blueSide.stickers[2] = tmpRedSide.stickers[8];
                this.blueSide.stickers[5] = tmpRedSide.stickers[7];
                this.blueSide.stickers[8] = tmpRedSide.stickers[6];
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

    /**
     * Returns an array containing the location of the wanted sticker.
     *
     * @param stickerToFind sticker to be found
     * @returns {*[]} array containing the side of the found sticker and the index on that side
     */
    getStickerPosition(stickerToFind) {
        let result = [];
        for (let i = 0; i < this.sides.length; i++) {
            for (let j = 0; j < 9; j++) {
                if (this.sides[i].stickers[j].color === stickerToFind.color && this.sides[i].stickers[j].type === stickerToFind.type) {
                    if (this.sides[i].stickers[j].neighbors.difference(stickerToFind.neighbors).size === 0 && stickerToFind.neighbors.difference(this.sides[i].stickers[j].neighbors).size === 0)
                    {
                        result['side'] = this.sides[i];
                        result['index'] = j;
                    }
                }
            }
        }
        return result;
    }

    /**
     * Mixes the cube using legal rotations. By default, 50 moves are used.
     *
     * @param numMoves the number of moves to mix the cube.
     * @returns {Cube} the mixed cube.
     */
    mixCube(numMoves = 50) {
        for (let i = 0; i < numMoves; i++) {
            let randomIndex = Math.floor(Math.random() * 6);
            this.rotate(this.sides[randomIndex], Boolean(Math.round(Math.random())));
        }
        this.reRenderCube();

        return this;
    }

    /**
     * First step of solving the cube. Makes the white cross on top of the cube.
     */
    whiteCross() {
        /* AHOL LEHET A FEHÉR ÉLKOCKA:
                - EGY MOZDULATRA A FEHÉRTŐL, AZAZ A KOCKA SZÉLÉN, MEGFELELŐ KÖZÉPPONTI KOCKA MELLETT (EGY FORGATÁSSAL MEGOLDHATÓ)
                - A KOCKA SZÉLÉN, DE FEHÉR A KÖZPONTI SZÍNNÉL VAN (EKKOR AZ ÉLKOCKA SZÍNES OLDALÁT FORGATJUK MEG, HOGY A FEHÉR FELFELE NÉZZEN, MAJD ELTEKERJÜK A FEHÉRET,
                    HOGY EGYEZZEN AZ ÉLKOCKA ÉS A KÖZÉPPONTI + KORRIGÁLÁS, MELY EGY VISSZATEKERÉS, AHOL FELVITTÜK A FEHÉRET)
                - A KOCKA ALJÁN (EKKOR CSAK A MEGFELELŐ KÖZPONTI SZÍNHEZ KELL VINNI, MAJD 2X MEGFORGATNI AZ ADOTT OLDALT)
                - A KOCKA HÁTOLDALÁN (EKKOR EGY MOZDULATTAL A KOCKA ALJÁRA KELL POZICIONÁLNI AZT, MAJD JÖHET A 2-ES PONT)
                -
         */

        // SORREND: 1) kék, 2) piros, 3) zöld, 4) narancs

        let phaseTitle = 'Fehér kereszt kirakása';
        let pos = this.getStickerPosition(new Sticker('rgb(255, 255, 255)', EDGE_CUBE, new Set(['rgb(162, 191, 254)'])));
        let rotations = '';

        if (pos['side'] === this.whiteSide && pos['index'] === 1) {
            this.rotate(this.orangeSide, true);
            this.rotate(this.orangeSide, true);
            this.rotate(this.yellowSide, true);
            this.rotate(this.blueSide, true);
            this.rotate(this.blueSide, true);
            rotations += 'B\'';
            rotations += 'B\'';
            rotations += 'D\'';
            rotations += 'R';
            rotations += 'R';
            this.reRenderCube();
        }

        if (pos['side'] === this.whiteSide && pos['index'] === 3) {
            this.rotate(this.greenSide, false);
            this.rotate(this.greenSide, false);
            this.rotate(this.yellowSide, false);
            this.rotate(this.yellowSide, false);
            this.rotate(this.blueSide, false);
            this.rotate(this.blueSide, false);
            rotations += 'L';
            rotations += 'L';
            rotations += 'D';
            rotations += 'D';
            rotations += 'R';
            rotations += 'R';
            this.reRenderCube();
        }

        if (pos['side'] === this.whiteSide && pos['index'] === 7) {
            this.rotate(this.redSide, false);
            this.rotate(this.redSide, false);
            this.rotate(this.yellowSide, false);
            this.rotate(this.blueSide, true);
            this.rotate(this.blueSide, true);
            rotations += 'F';
            rotations += 'F';
            rotations += 'D';
            rotations += 'R';
            rotations += 'R';
            this.reRenderCube();
        }

        if (pos['side'] === this.blueSide && pos['index'] === 1) {
            this.rotate(this.orangeSide, true);
            this.rotate(this.yellowSide, true);
            this.rotate(this.orangeSide, false);
            this.rotate(this.blueSide, true);
            this.rotate(this.blueSide, true);
            rotations += 'B\'';
            rotations += 'D\'';
            rotations += 'B';
            rotations += 'R';
            rotations += 'R';
            this.reRenderCube();
        }

        if (pos['side'] === this.blueSide && pos['index'] === 3) {
            this.rotate(this.blueSide, false);
            this.rotate(this.blueSide, false);
            this.rotate(this.yellowSide, true);
            this.rotate(this.redSide, true);
            this.rotate(this.blueSide, false);
            this.rotate(this.redSide, false);
            rotations += 'R';
            rotations += 'R';
            rotations += 'D\'';
            rotations += 'F\'';
            rotations += 'R';
            rotations += 'F';
            this.reRenderCube();
        }

        if (pos['side'] === this.blueSide && pos['index'] === 5) {
            this.rotate(this.blueSide, false);
            this.rotate(this.blueSide, false);
            rotations += 'R';
            rotations += 'R';
            this.reRenderCube();
        }

        if (pos['side'] === this.blueSide && pos['index'] === 7) {
            this.rotate(this.redSide, false);
            this.rotate(this.yellowSide, false);
            this.rotate(this.redSide, true);
            this.rotate(this.blueSide, true);
            this.rotate(this.blueSide, true);
            rotations += 'F';
            rotations += 'D';
            rotations += 'F\'';
            rotations += 'R';
            rotations += 'R';
            this.reRenderCube();
        }

        if (pos['side'] === this.redSide && pos['index'] === 1) {
            this.rotate(this.redSide, false);
            this.rotate(this.blueSide, false);
            rotations += 'F';
            rotations += 'R';
            this.reRenderCube();
        }

        if (pos['side'] === this.redSide && pos['index'] === 3) {
            this.rotate(this.redSide, false);
            this.rotate(this.redSide, false);
            this.rotate(this.blueSide, false);
            this.rotate(this.redSide, true);
            this.rotate(this.redSide, true);
            rotations += 'F';
            rotations += 'F';
            rotations += 'R';
            rotations += 'F\'';
            rotations += 'F\'';
            this.reRenderCube();
        }

        if (pos['side'] === this.redSide && pos['index'] === 5) {
            this.rotate(this.blueSide, false);
            rotations += 'R';
            this.reRenderCube();
        }

        if (pos['side'] === this.redSide && pos['index'] === 7) {
            this.rotate(this.redSide, true);
            this.rotate(this.blueSide, false);
            this.rotate(this.redSide, false);
            rotations += 'F\'';
            rotations += 'R';
            rotations += 'F';
            this.reRenderCube();
        }

        if (pos['side'] === this.orangeSide && pos['index'] === 1) {
            this.rotate(this.orangeSide, false);
            this.rotate(this.blueSide, true);
            this.rotate(this.orangeSide, true);
            rotations += 'B';
            rotations += 'R\'';
            rotations += 'B\'';
            this.reRenderCube();
        }

        if (pos['side'] === this.orangeSide && pos['index'] === 3) {
            this.rotate(this.orangeSide, false);
            this.rotate(this.orangeSide, false);
            this.rotate(this.blueSide, true);
            this.rotate(this.orangeSide, true);
            this.rotate(this.orangeSide, true);
            rotations += 'B';
            rotations += 'B';
            rotations += 'R\'';
            rotations += 'B\'';
            rotations += 'B\'';
            this.reRenderCube();
        }

        // MINTÁZAT: ha a fehér-kék élkocka a piros/narancs oldalon van bárhol, ugyanaz a séma,
        // csak egy vagy kettő adott oldali forgatással és vissazforgatással van több.

        // TODO: Kiszervezni az egyes oldalak forgatását, úgy, hogy azok a keresésben megfeleltethetőek legyenek az 1, 3, 5, 7 kereséshez,
        //  és visszavezethetőek legyenek azokra, és csak azokat kell megírni. Ez nem optimális megoldás, de kevesebb redundáns kódot kell írni hozzá.

        if (pos['side'] === this.orangeSide && pos['index'] === 5) {
            this.rotate(this.blueSide, true);
            rotations += 'R\'';
            this.reRenderCube();
        }

        if (pos['side'] === this.redSide && pos['index'] === 7) {
            this.rotate(this.orangeSide, true);
            this.rotate(this.blueSide, true);
            rotations += 'B\'';
            rotations += 'R\'';
            this.reRenderCube();
        }

        if (pos['side'] === this.greenSide && pos['index'] === 1) {
            this.rotate(this.orangeSide, false);
            this.rotate(this.yellowSide, true);
            this.rotate(this.blueSide, true);
            this.rotate(this.blueSide, true);
            this.rotate(this.orangeSide, true);
            rotations += 'B';
            rotations += 'D\'';
            rotations += 'R\'';
            rotations += 'R\'';
            rotations += 'B\'';
            this.reRenderCube();
        }

        if (pos['side'] === this.greenSide && pos['index'] === 3) {
            this.rotate(this.greenSide, false);
            this.rotate(this.orangeSide, false);
            this.rotate(this.yellowSide, true);
            this.rotate(this.blueSide, true);
            this.rotate(this.blueSide, true);
            this.rotate(this.orangeSide, true);
            rotations += 'L';
            rotations += 'B';
            rotations += 'D\'';
            rotations += 'R\'';
            rotations += 'R\'';
            rotations += 'B\'';
            this.reRenderCube();
        }

        if (pos['side'] === this.greenSide && pos['index'] === 5) {
            this.rotate(this.greenSide, true);
            this.rotate(this.orangeSide, false);
            this.rotate(this.yellowSide, true);
            this.rotate(this.blueSide, true);
            this.rotate(this.blueSide, true);
            this.rotate(this.orangeSide, true);
            rotations += 'L\'';
            rotations += 'B';
            rotations += 'D\'';
            rotations += 'R\'';
            rotations += 'R\'';
            rotations += 'B\'';
            this.reRenderCube();
        }


        // Ezt meg lehet oldani egy plusz zöld forgatással az elején, mint az előző kettőt, de így egy lépéssel kevesebb lesz benne,
        // ha a megfelelő oldalon forgatunk. VÉGÜL A PLUSZ ZÖLDES MEGOLDÁST VALÓSÍTOTTAM MEG.
        if (pos['side'] === this.greenSide && pos['index'] === 7) {
            this.rotate(this.greenSide, true);
            this.rotate(this.greenSide, true);
            this.rotate(this.orangeSide, false);
            this.rotate(this.yellowSide, true);
            this.rotate(this.blueSide, true);
            this.rotate(this.blueSide, true);
            this.rotate(this.orangeSide, true);
            rotations += 'L\'';
            rotations += 'L\'';
            rotations += 'B';
            rotations += 'D\'';
            rotations += 'R\'';
            rotations += 'R\'';
            rotations += 'B\'';
            this.reRenderCube();
        }

        if (pos['side'] === this.yellowSide && pos['index'] === 1) {
            this.rotate(this.yellowSide, false);
            this.rotate(this.blueSide, false);
            this.rotate(this.blueSide, false);
            rotations += 'D';
            rotations += 'R';
            rotations += 'R';
            this.reRenderCube();
        }

        if (pos['side'] === this.yellowSide && pos['index'] === 3) {
            this.rotate(this.yellowSide, false);
            this.rotate(this.yellowSide, false);
            this.rotate(this.blueSide, false);
            this.rotate(this.blueSide, false);
            rotations += 'D';
            rotations += 'D';
            rotations += 'R';
            rotations += 'R';
            this.reRenderCube();
        }

        if (pos['side'] === this.yellowSide && pos['index'] === 5) {
            this.rotate(this.blueSide, false);
            this.rotate(this.blueSide, false);
            rotations += 'R';
            rotations += 'R';
            this.reRenderCube();
        }

        if (pos['side'] === this.yellowSide && pos['index'] === 7) {
            this.rotate(this.yellowSide, true);
            this.rotate(this.blueSide, false);
            this.rotate(this.blueSide, false);
            rotations += 'D\'';
            rotations += 'R';
            rotations += 'R';
            this.reRenderCube();
        }


        document.getElementById('phase-title').style.display = 'block';
        document.getElementById('phase-title').innerText = phaseTitle;
        document.getElementById('instructions').style.display = 'block';
        document.getElementById('instructions').innerText = rotations;
        setTimeout(function () {
            document.getElementById('phase-title').style.display = 'none';
            document.getElementById('instructions').style.display = 'none';
            rotations = '';
        }, 50000);
    }
}
