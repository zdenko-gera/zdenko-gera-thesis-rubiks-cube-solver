import {CORNER_CUBE, EDGE_CUBE} from "../constants.js";
import {WHITE, RED, GREEN, ORANGE, BLUE, YELLOW} from "../constants.js";
import {solvedCube} from "../main.js";
import {Sticker} from "./Sticker.js";
import {Side} from "./Side.js";

export class Cube {
    sides;
    rots;

    constructor(whiteSide, redSide, greenSide, orangeSide, blueSide, yellowSide) {
        this.whiteSide = whiteSide;
        this.redSide = redSide;
        this.greenSide = greenSide;
        this.orangeSide = orangeSide;
        this.blueSide = blueSide;
        this.yellowSide = yellowSide;
        this.rots = '';
        this.prev = null;

        this.sides = [this.blueSide, this.redSide, this.greenSide, this.orangeSide, this.whiteSide, this.yellowSide];

        // Az oldalakhoz hozzárendeljük a velük ellentétes oldalon fekvőt (ez a helyreállításhoz szükséges lépések számánál használatos)
        this.sides.forEach(side => {
            switch (side.getMiddleColor()) {
                case WHITE:
                    side.oppositeSide = this.yellowSide;
                    break;
                case RED:
                    side.oppositeSide = this.orangeSide;
                    break;
                case BLUE:
                    side.oppositeSide = this.greenSide;
                    break;
                case GREEN:
                    side.oppositeSide = this.blueSide;
                    break;
                case ORANGE:
                    side.oppositeSide = this.redSide;
                    break;
                case YELLOW:
                    side.oppositeSide = this.whiteSide;
                    break;
            }
        });

        // Matricák szomszédsági viszonyának megadása oldalanként:
        this.whiteSide.stickers[0].neighbors.add(this.orangeSide.stickers[6].color.toString()).add(this.greenSide.stickers[2].color.toString());
        this.whiteSide.stickers[1].neighbors.add(this.orangeSide.stickers[7].color.toString());
        this.whiteSide.stickers[2].neighbors.add(this.orangeSide.stickers[8].color.toString()).add(this.blueSide.stickers[0].color.toString());
        this.whiteSide.stickers[3].neighbors.add(this.greenSide.stickers[5].color.toString());
        this.whiteSide.stickers[5].neighbors.add(this.blueSide.stickers[3].color.toString());
        this.whiteSide.stickers[6].neighbors.add(this.greenSide.stickers[8].color.toString()).add(this.redSide.stickers[0].color.toString());
        this.whiteSide.stickers[7].neighbors.add(this.redSide.stickers[1].color.toString());
        this.whiteSide.stickers[8].neighbors.add(this.redSide.stickers[2].color.toString()).add(this.blueSide.stickers[6].color.toString());

        this.blueSide.stickers[0].neighbors.add(this.orangeSide.stickers[8].color.toString()).add(this.whiteSide.stickers[2].color.toString());
        this.blueSide.stickers[1].neighbors.add(this.orangeSide.stickers[5].color.toString());
        this.blueSide.stickers[2].neighbors.add(this.orangeSide.stickers[2].color.toString()).add(this.yellowSide.stickers[8].color.toString());
        this.blueSide.stickers[3].neighbors.add(this.whiteSide.stickers[5].color.toString());
        this.blueSide.stickers[5].neighbors.add(this.yellowSide.stickers[5].color.toString());
        this.blueSide.stickers[6].neighbors.add(this.whiteSide.stickers[8].color.toString()).add(this.redSide.stickers[2].color.toString());
        this.blueSide.stickers[7].neighbors.add(this.redSide.stickers[5].color.toString());
        this.blueSide.stickers[8].neighbors.add(this.redSide.stickers[8].color.toString()).add(this.yellowSide.stickers[2].color.toString());

        this.orangeSide.stickers[0].neighbors.add(this.greenSide.stickers[0].color.toString()).add(this.yellowSide.stickers[6].color.toString());
        this.orangeSide.stickers[1].neighbors.add(this.yellowSide.stickers[6].color.toString());
        this.orangeSide.stickers[2].neighbors.add(this.yellowSide.stickers[8].color.toString()).add(this.blueSide.stickers[2].color.toString());
        this.orangeSide.stickers[3].neighbors.add(this.greenSide.stickers[3].color.toString());
        this.orangeSide.stickers[5].neighbors.add(this.blueSide.stickers[1].color.toString());
        this.orangeSide.stickers[6].neighbors.add(this.greenSide.stickers[2].color.toString()).add(this.whiteSide.stickers[0].color.toString());
        this.orangeSide.stickers[7].neighbors.add(this.whiteSide.stickers[1].color.toString());
        this.orangeSide.stickers[8].neighbors.add(this.whiteSide.stickers[2].color.toString()).add(this.blueSide.stickers[0].color.toString());

        this.greenSide.stickers[0].neighbors.add(this.orangeSide.stickers[0].color.toString()).add(this.yellowSide.stickers[6].color.toString());
        this.greenSide.stickers[1].neighbors.add(this.orangeSide.stickers[3].color.toString());
        this.greenSide.stickers[2].neighbors.add(this.orangeSide.stickers[6].color.toString()).add(this.whiteSide.stickers[0].color.toString());
        this.greenSide.stickers[3].neighbors.add(this.yellowSide.stickers[3].color.toString());
        this.greenSide.stickers[5].neighbors.add(this.whiteSide.stickers[3].color.toString());
        this.greenSide.stickers[6].neighbors.add(this.yellowSide.stickers[0].color.toString()).add(this.redSide.stickers[6].color.toString());
        this.greenSide.stickers[7].neighbors.add(this.redSide.stickers[3].color.toString());
        this.greenSide.stickers[8].neighbors.add(this.whiteSide.stickers[6].color.toString()).add(this.redSide.stickers[0].color.toString());

        this.redSide.stickers[0].neighbors.add(this.greenSide.stickers[8].color.toString()).add(this.whiteSide.stickers[6].color.toString());
        this.redSide.stickers[1].neighbors.add(this.whiteSide.stickers[7].color.toString());
        this.redSide.stickers[2].neighbors.add(this.whiteSide.stickers[8].color.toString()).add(this.blueSide.stickers[6].color.toString());
        this.redSide.stickers[3].neighbors.add(this.greenSide.stickers[7].color.toString());
        this.redSide.stickers[5].neighbors.add(this.blueSide.stickers[7].color.toString());
        this.redSide.stickers[6].neighbors.add(this.yellowSide.stickers[0].color.toString()).add(this.greenSide.stickers[6].color.toString());
        this.redSide.stickers[7].neighbors.add(this.yellowSide.stickers[1].color.toString());
        this.redSide.stickers[8].neighbors.add(this.yellowSide.stickers[2].color.toString()).add(this.blueSide.stickers[8].color.toString());

        this.yellowSide.stickers[0].neighbors.add(this.redSide.stickers[6].color.toString()).add(this.greenSide.stickers[6].color.toString());
        this.yellowSide.stickers[1].neighbors.add(this.redSide.stickers[7].color.toString());
        this.yellowSide.stickers[2].neighbors.add(this.blueSide.stickers[8].color.toString()).add(this.redSide.stickers[8].color.toString());
        this.yellowSide.stickers[3].neighbors.add(this.greenSide.stickers[3].color.toString());
        this.yellowSide.stickers[5].neighbors.add(this.blueSide.stickers[5].color.toString());
        this.yellowSide.stickers[6].neighbors.add(this.orangeSide.stickers[0].color.toString()).add(this.greenSide.stickers[0].color.toString());
        this.yellowSide.stickers[7].neighbors.add(this.orangeSide.stickers[1].color.toString());
        this.yellowSide.stickers[8].neighbors.add(this.blueSide.stickers[2].color.toString()).add(this.orangeSide.stickers[2].color.toString());

        //matricák melyik oldalhoz tartoznak:

        // NEM AZ ELVÁRT HELYÜKET ADJA MEG, HANEM HOGY A MEGADOTT ÁLLÁSBAN MELYIK OLDALON ÁLLTAK A MATRICÁK -HIBÁS-!!!

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
        for (let i = 0; i < document.getElementById('red-side').children.length; i++) {
            redChildren[i].style.backgroundColor = this.redSide.stickers[i].color.toString();
        }
        let blueChildren = document.getElementById('blue-side').children;
        for (let i = 0; i < document.getElementById('blue-side').children.length; i++) {
            blueChildren[i].style.backgroundColor = this.blueSide.stickers[i].color.toString();
        }
        let greenChildren = document.getElementById('green-side').children;
        for (let i = 0; i < document.getElementById('green-side').children.length; i++) {
            greenChildren[i].style.backgroundColor = this.greenSide.stickers[i].color.toString();
        }
        let yellowChildren = document.getElementById('yellow-side').children;
        for (let i = 0; i < document.getElementById('yellow-side').children.length; i++) {
            yellowChildren[i].style.backgroundColor = this.yellowSide.stickers[i].color.toString();
        }
        let whiteChildren = document.getElementById('white-side').children;
        for (let i = 0; i < document.getElementById('white-side').children.length; i++) {
            whiteChildren[i].style.backgroundColor = this.whiteSide.stickers[i].color.toString();
        }
        let orangeChildren = document.getElementById('orange-side').children;
        for (let i = 0; i < document.getElementById('orange-side').children.length; i++) {
            orangeChildren[i].style.backgroundColor = this.orangeSide.stickers[i].color.toString();
        }
    }

    /**
     * Returns if the cube is solved and validates the stickers.
     *
     * @returns {boolean} if cube is solved
     */
    isSolved() {
        const validColors = [WHITE, RED, GREEN, ORANGE, BLUE, YELLOW];
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
            }, 5000);
            return false;
        }

        if (isSolved) {
            /*document.getElementById('success-msg').style.display = "block";
            document.getElementById('success-msg').innerText = 'A kocka ki van rakva!';
            setTimeout(function () {
                document.getElementById('success-msg').style.display = 'none'
            }, 5000);*/
            return true;
        } else {
            document.getElementById('error-msg').style.display = "block";
            document.getElementById('error-msg').innerText = 'A kocka nincs kirakva!';
            setTimeout(function () {
                document.getElementById('error-msg').style.display = 'none'
            }, 5000);
            return false;
        }

        return isSolved;
    }

    /**
     * Part of the cube state validation process. Checks if the number of stickers per color is valid.
     *
     * @returns {boolean} if there are 8 (+1 middle) stickers of each color
     */
    numberOfColorsCheck() {
        let numberOfWhites = 0;
        let numberOfReds = 0;
        let numberOfGreens = 0;
        let numberOfOranges = 0;
        let numberOfBlues = 0;
        let numberOfYellows = 0;

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 9; j++) {
                switch (this.sides[i].stickers[j].color) {
                    case WHITE:
                        numberOfWhites++;
                        break;
                    case RED:
                        numberOfReds++;
                        break;
                    case GREEN:
                        numberOfGreens++;
                        break;
                    case ORANGE:
                        numberOfOranges++;
                        break;
                    case BLUE:
                        numberOfBlues++;
                        break;
                    case YELLOW:
                        numberOfYellows++;
                        break;
                    default:
                        console.log('Hiba: nem sikerült összeszámolni a színeket!');
                }
            }
        }
        console.log(numberOfWhites);

        return (numberOfWhites === 9 && numberOfReds === 9 && numberOfGreens === 9 && numberOfOranges === 9 && numberOfBlues === 9 && numberOfYellows === 9);
    }

    /**
     * Part of the cube state validation process. Checks if the corner cubes are validly rotated.
     *
     * @returns {boolean} if the current state of corner cubes are legal
     */
    cornerRotationCheck() {
        let cornerSum = 0;

        // bal felső fehér oldalon
        if (this.greenSide.stickers[2].color === WHITE || this.greenSide.stickers[2].color === YELLOW) {
            cornerSum++;
        } else if (this.orangeSide.stickers[6].color === WHITE || this.orangeSide.stickers[6].color === YELLOW) {
            cornerSum--;
        }

        // jobb felső fehér oldalon
        if (this.orangeSide.stickers[8].color === WHITE || this.orangeSide.stickers[8].color === YELLOW) {
            cornerSum++;
        } else if (this.blueSide.stickers[0].color === WHITE || this.blueSide.stickers[0].color === YELLOW) {
            cornerSum--;
        }

        // jobb alsó fehér oldalon
        if (this.blueSide.stickers[6].color === WHITE || this.blueSide.stickers[6].color === YELLOW) {
            cornerSum++;
        } else if (this.redSide.stickers[2].color === WHITE || this.redSide.stickers[2].color === YELLOW) {
            cornerSum--;
        }

        // bal alsó fehér oldalon
        if (this.redSide.stickers[0].color === WHITE || this.redSide.stickers[0].color === YELLOW) {
            cornerSum++;
        } else if (this.greenSide.stickers[8].color === WHITE || this.greenSide.stickers[8].color === YELLOW) {
            cornerSum--;
        }

        // *** sárga oldalon ugyanígy***
        // bal felső sárga oldalon
        if (this.greenSide.stickers[6].color === WHITE || this.greenSide.stickers[6].color === YELLOW) {
            cornerSum++;
        } else if (this.redSide.stickers[6].color === WHITE || this.redSide.stickers[6].color === YELLOW) {
            cornerSum--;
        }

        // jobb felső sárga oldalon
        if (this.redSide.stickers[8].color === WHITE || this.redSide.stickers[8].color === YELLOW) {
            cornerSum++;
        } else if (this.blueSide.stickers[8].color === WHITE || this.blueSide.stickers[8].color === YELLOW) {
            cornerSum--;
        }

        // jobb alsó sárga oldalon
        if (this.blueSide.stickers[2].color === WHITE || this.blueSide.stickers[2].color === YELLOW) {
            cornerSum++;
        } else if (this.orangeSide.stickers[2].color === WHITE || this.orangeSide.stickers[2].color === YELLOW) {
            cornerSum--;
        }

        // bal alsó sárga oldalon
        if (this.orangeSide.stickers[0].color === WHITE || this.orangeSide.stickers[0].color === YELLOW) {
            cornerSum++;
        } else if (this.greenSide.stickers[0].color === WHITE || this.greenSide.stickers[0].color === YELLOW) {
            cornerSum--;
        }

        return (cornerSum % 3) === 0;
    }

    /**
     * Returns the neighboring colors of a given sticker.
     *
     * @param sticker
     * @returns {Set<*>}
     */
    getNeighboringColors(sticker) {
        let stickerPosition = this.getStickerPosition(sticker);
        let neighboringStickers = new Set([]);
        let addNeighbors = false;

        // top
        if (stickerPosition['index'] - 3 >= 0) {
            neighboringStickers.add(stickerPosition['side'].stickers[stickerPosition['index'] - 3].color.toString());
        } else {
            addNeighbors = true;
        }

        // left
        if (stickerPosition['index'] - 1 >= 0 && stickerPosition['index'] - 1 !== 2 && stickerPosition['index'] - 1 !== 5) {
            neighboringStickers.add(stickerPosition['side'].stickers[stickerPosition['index'] - 1].color.toString());
        } else {
            addNeighbors = true;
        }

        // bottom
        if (stickerPosition['index'] + 3 <= 9) {
            neighboringStickers.add(stickerPosition['side'].stickers[stickerPosition['index'] + 3].color.toString());
        } else {
            addNeighbors = true;
        }

        // right
        if (stickerPosition['index'] + 1 <= 9 && stickerPosition['index'] + 1 !== 3 && stickerPosition['index'] + 1 !== 6) {
            neighboringStickers.add(stickerPosition['side'].stickers[stickerPosition['index'] + 1].color.toString());
        } else {
            addNeighbors = true;
        }

        if (addNeighbors) {
            for (const neighbor of sticker.neighbors) {
                neighboringStickers.add(neighbor);
            }
        }

        return neighboringStickers;
    }


    /**
     * Part of checking if the cube is solvable. Checks the parity of edges.
     *
     * @returns {boolean}
     */
    edgeParityCheck() {
        let edgeParityCount = 0;
        let edgesToCheck = [this.orangeSide.stickers[3], this.orangeSide.stickers[5], this.whiteSide.stickers[1], this.whiteSide.stickers[3],
            this.whiteSide.stickers[5], this.whiteSide.stickers[7], this.redSide.stickers[3], this.redSide.stickers[5],
            this.yellowSide.stickers[1], this.yellowSide.stickers[3], this.yellowSide.stickers[5], this.yellowSide.stickers[7]];

        for (let i = 0; i < edgesToCheck.length; i++) {
            if (edgesToCheck[i].color === WHITE || edgesToCheck[i].color === YELLOW) {
                edgeParityCount++;
            } else if ((edgesToCheck[i].color === RED || edgesToCheck[i].color === ORANGE) && (!edgesToCheck[i].neighbors.has(WHITE) && !edgesToCheck[i].neighbors.has(YELLOW))) {
                edgeParityCount++;
            }
        }

        return (edgeParityCount % 2 === 0);
    }


    permutationParityCheck() {
        //corner-cubes:
        /*for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 9; j++) {
                if ([0, 2, 6, 8].includes(j)) {
                    //ha az adott kocka/matrica sarokkocka része
                    if (this.sides[i].stickers[j].color === this.sides[i].getMiddleColor()) {

                    }
                }
            }
        }*/

        //edge-cubes:


    }

    /**
     * Decides if the cube is in a solvable state or not using corner rotations, edge parity and permutation parity.
     *
     * @returns {boolean}
     */
    isSolvable() {
        // more info at: https://puzzling.stackexchange.com/questions/53846/how-to-determine-whether-a-rubiks-cube-is-solvable
        return (this.cornerRotationCheck() && this.edgeParityCheck());

    }

    /**
     * Makes a rotational move on the given side of the cube.
     *
     * @param side Side to rotate (clockwise by default).
     * @param backwards Decides if the rotation should be made clockwise or counter-clockwise.
     * @returns {Cube} The transformed cube.
     */
    rotate(side, backwards = false, humanMove = true) {
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
            if (side.getMiddleColor() === WHITE) {
                this.rots += 'U';
                this.redSide.stickers[0] = tmpBlueSide.stickers[6];
                this.redSide.stickers[1] = tmpBlueSide.stickers[3];
                this.redSide.stickers[2] = tmpBlueSide.stickers[0];

                this.blueSide.stickers[0] = tmpOrangeSide.stickers[6];
                this.blueSide.stickers[3] = tmpOrangeSide.stickers[7];
                this.blueSide.stickers[6] = tmpOrangeSide.stickers[8];

                this.orangeSide.stickers[6] = tmpGreenSide.stickers[8];
                this.orangeSide.stickers[7] = tmpGreenSide.stickers[5];
                this.orangeSide.stickers[8] = tmpGreenSide.stickers[2];

                this.greenSide.stickers[2] = tmpRedSide.stickers[0];
                this.greenSide.stickers[5] = tmpRedSide.stickers[1];
                this.greenSide.stickers[8] = tmpRedSide.stickers[2];
            }

            //PIROSAT FORGATJUK
            if (side.getMiddleColor() === RED) {
                this.rots += 'F';
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
            if (side.getMiddleColor() === BLUE) {
                this.rots += 'R';
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
            if (side.getMiddleColor() === ORANGE) {
                this.rots += 'B';
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
            if (side.getMiddleColor() === GREEN) {
                this.rots += 'L';
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
            if (side.getMiddleColor() === YELLOW) {
                this.rots += 'D';
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

        /*if (backwards) {
            this.rots = this.rots.slice(0, -3);

            switch (side.getMiddleColor()) {
                case WHITE:
                    this.rots += 'U\'';
                    break;
                case RED:
                    this.rots += 'F\'';
                    break;
                case BLUE:
                    this.rots += 'R\'';
                    break;
                case ORANGE:
                    this.rots += 'B\'';
                    break;
                case GREEN:
                    this.rots += 'L\'';
                    break;
                case YELLOW:
                    this.rots += 'D\'';
                    break;
            }
        }*/

        if (humanMove) {
            this.reRenderCube();
        }
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
        //console.log('Függvény hívás történt');
        //console.log(stickerToFind);

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 9; j++) {
                // console.log('csak check');
                if (this.sides[i].stickers[j].color.toString() === stickerToFind.color.toString() && this.sides[i].stickers[j].type === stickerToFind.type) {
                    //if (this.sides[i].stickers[j].neighbors.difference(stickerToFind.neighbors).size === 0 && stickerToFind.neighbors.difference(this.sides[i].stickers[j].neighbors).size === 0)
                    if (eqSet(this.sides[i].stickers[j].neighbors, stickerToFind.neighbors)) {
                        result['side'] = this.sides[i];
                        result['index'] = j;
                        // console.log('Meg is találta.');
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
        document.getElementById('instructions').style.display = 'block';
        document.getElementById('instructions').innerText = this.rots;
        setTimeout(function () {
            document.getElementById('phase-title').style.display = 'none';
            document.getElementById('instructions').style.display = 'none';
            this.rots = '';
        }.bind(this), 50000);

        this.rots += '  ';
        this.rots = '';
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
        // konstans oldalak, amik oldaltól függetlenül maradnak ugyanazok: fehér, sárga
        let movingIndices = [[1, 3, 5, 7], [5, 1, 7, 3], [7, 5, 3, 1], [3, 7, 1, 5]];
        let movingWhiteIndices = [[1, 3, 7], [5, 1, 3], [7, 5, 1], [3, 7, 5]];
        let movingYellowIndices = [[1, 3, 5, 7], [3, 7, 1, 5], [7, 5, 3, 1], [5, 1, 7, 3]];

        let rotations = '';

        let phaseTitle = 'Fehér kereszt kirakása';
        for (let i = 0; i < 4; i++) {
            let pos = this.getStickerPosition(new Sticker('rgb(255, 255, 255)', EDGE_CUBE, new Set([this.sides[i].getMiddleColor()])));

            // console.log(this.sides[i].getMiddleColor());

            if (pos['side'] === this.whiteSide && pos['index'] === movingWhiteIndices[i][0]) {
                // console.log(1);
                this.rotate(this.sides[(3 + i) % 4], true);
                this.rotate(this.sides[(3 + i) % 4], true);
                this.rotate(this.yellowSide, true);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.sides[i % 4], true);
            }

            if (pos['side'] === this.whiteSide && pos['index'] === movingWhiteIndices[i][1]) {
                // console.log(2);
                this.rotate(this.sides[(2 + i) % 4], false);
                this.rotate(this.sides[(2 + i) % 4], false);
                this.rotate(this.yellowSide, false);
                this.rotate(this.yellowSide, false);
                this.rotate(this.sides[i % 4], false);
                this.rotate(this.sides[i % 4], false);
            }

            if (pos['side'] === this.whiteSide && pos['index'] === movingWhiteIndices[i][2]) {
                this.rotate(this.sides[(1 + i) % 4], false);
                this.rotate(this.sides[(1 + i) % 4], false);
                this.rotate(this.yellowSide, false);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.sides[i % 4], true);
                // console.log(3);

            }

            if (pos['side'] === this.sides[i % 4] && pos['index'] === movingIndices[i][0]) {
                this.rotate(this.sides[(3 + i) % 4], true);
                this.rotate(this.yellowSide, true);
                this.rotate(this.sides[(3 + i) % 4], false);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.sides[i % 4], true);
                // console.log(4);
            }

            if (pos['side'] === this.sides[i % 4] && pos['index'] === movingIndices[i][1]) {
                this.rotate(this.sides[i % 4], false);
                this.rotate(this.sides[i % 4], false);
                this.rotate(this.yellowSide, true);
                this.rotate(this.sides[(1 + i) % 4], true);
                this.rotate(this.sides[i % 4], false);
                this.rotate(this.sides[(1 + i) % 4], false);
                // console.log(5);
            }

            if (pos['side'] === this.sides[i % 4] && pos['index'] === movingIndices[i][2]) {
                this.rotate(this.yellowSide, false);
                this.rotate(this.sides[(4 + i - 1) % 4], false);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.sides[(4 + i - 1) % 4], true);
                // console.log(6);
            }

            if (pos['side'] === this.sides[i % 4] && pos['index'] === movingIndices[i][3]) {
                this.rotate(this.sides[(1 + i) % 4], false);
                this.rotate(this.yellowSide, false);
                this.rotate(this.sides[(1 + i) % 4], true);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.sides[i % 4], true);
                // console.log(7);
            }

            if (pos['side'] === this.sides[(1 + i) % 4] && pos['index'] === movingIndices[i][0]) {
                this.rotate(this.sides[(1 + i) % 4], false);
                this.rotate(this.sides[i % 4], false);
                // console.log(8);
            }

            if (pos['side'] === this.sides[(1 + i) % 4] && pos['index'] === movingIndices[i][1]) {
                this.rotate(this.sides[(1 + i) % 4], false);
                this.rotate(this.sides[(1 + i) % 4], false);
                this.rotate(this.sides[i % 4], false);
                this.rotate(this.sides[(1 + i) % 4], true);
                this.rotate(this.sides[(1 + i) % 4], true);
                // console.log(9);
            }

            if (pos['side'] === this.sides[(1 + i) % 4] && pos['index'] === movingIndices[i][2]) {
                this.rotate(this.sides[i % 4], false);
                // console.log(10);
            }

            if (pos['side'] === this.sides[(1 + i) % 4] && pos['index'] === movingIndices[i][3]) {
                this.rotate(this.sides[(1 + i) % 4], true);
                this.rotate(this.sides[i % 4], false);
                this.rotate(this.sides[(1 + i) % 4], false);
                // console.log(11);
            }

            if (pos['side'] === this.sides[(3 + i) % 4] && pos['index'] === movingIndices[i][0]) {
                this.rotate(this.sides[(3 + i) % 4], false);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.sides[(3 + i) % 4], true);
                // console.log(12);
            }

            if (pos['side'] === this.sides[(3 + i) % 4] && pos['index'] === movingIndices[i][1]) {
                this.rotate(this.sides[(3 + i) % 4], false);
                this.rotate(this.sides[(3 + i) % 4], false);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.sides[(3 + i) % 4], true);
                this.rotate(this.sides[(3 + i) % 4], true);
                // console.log(13);
            }

            if (pos['side'] === this.sides[(3 + i) % 4] && pos['index'] === movingIndices[i][2]) {
                this.rotate(this.sides[i % 4], true);
                // console.log(14);
            }

            if (pos['side'] === this.sides[(3 + i) % 4] && pos['index'] === movingIndices[i][3]) {
                this.rotate(this.sides[(3 + i) % 4], true);
                this.rotate(this.sides[i % 4], true);
                // console.log(15);
            }

            if (pos['side'] === this.sides[(2 + i) % 4] && pos['index'] === movingIndices[i][0]) {
                this.rotate(this.sides[(3 + i) % 4], false);
                this.rotate(this.yellowSide, true);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.sides[(3 + i) % 4], true);
                // console.log(16);
            }

            if (pos['side'] === this.sides[(2 + i) % 4] && pos['index'] === movingIndices[i][1]) {
                this.rotate(this.sides[(2 + i) % 4], false);
                this.rotate(this.sides[(3 + i) % 4], false);
                this.rotate(this.yellowSide, true);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.sides[(3 + i) % 4], true);
                this.rotate(this.sides[(2 + i) % 4], true);
                // console.log(17);
            }

            if (pos['side'] === this.sides[(2 + i) % 4] && pos['index'] === movingIndices[i][2]) {
                this.rotate(this.sides[(2 + i) % 4], true);
                this.rotate(this.sides[(3 + i) % 4], false);
                this.rotate(this.yellowSide, true);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.sides[(3 + i) % 4], true);
                // console.log(18);
            }

            // Ezt meg lehet oldani egy plusz zöld forgatással az elején, mint az előző kettőt, de így egy lépéssel kevesebb lesz benne,
            // ha a megfelelő oldalon forgatunk. VÉGÜL A PLUSZ ZÖLDES MEGOLDÁST VALÓSÍTOTTAM MEG.
            if (pos['side'] === this.sides[(2 + i) % 4] && pos['index'] === movingIndices[i][3]) {
                this.rotate(this.sides[(2 + i) % 4], true);
                this.rotate(this.sides[(2 + i) % 4], true);
                this.rotate(this.sides[(3 + i) % 4], false);
                this.rotate(this.yellowSide, true);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.yellowSide, false);
                this.rotate(this.sides[(3 + i) % 4], true);
                this.rotate(this.sides[(2 + i) % 4], true);
                this.rotate(this.sides[(2 + i) % 4], true)
                // console.log(19);
            }

            if (pos['side'] === this.yellowSide && pos['index'] === movingYellowIndices[i][0]) {
                this.rotate(this.yellowSide, false);
                this.rotate(this.sides[i % 4], false);
                this.rotate(this.sides[i % 4], false);
                // console.log(20);
            }

            if (pos['side'] === this.yellowSide && pos['index'] === movingYellowIndices[i][1]) {
                this.rotate(this.yellowSide, false);
                this.rotate(this.yellowSide, false);
                this.rotate(this.sides[i % 4], false);
                this.rotate(this.sides[i % 4], false);
                // console.log(21);
            }

            if (pos['side'] === this.yellowSide && pos['index'] === movingYellowIndices[i][2]) {
                this.rotate(this.sides[i % 4], false);
                this.rotate(this.sides[i % 4], false);
                // console.log(22);
            }

            if (pos['side'] === this.yellowSide && pos['index'] === movingYellowIndices[i][3]) {
                this.rotate(this.yellowSide, true);
                this.rotate(this.sides[i % 4], false);
                this.rotate(this.sides[i % 4], false);
                // console.log(23);
            }
            // console.log(this.whiteSide.stickers);

        }
        this.reRenderCube();
    }

    whiteCorners() {
        let movingIndices = [[6, 0], [0, 2], [2, 8], [8, 6]];
        let movingWhiteIndices = [[2, 0, 6], [8, 2, 0], [6, 8, 2], [0, 6, 8]];
        let pos;

        let rotations = '';

        let phaseTitle = 'Fehér sarkok kirakása';
        // console.log('Fehér sarkok kirakása');

        for (let i = 0; i < 4; i++) {
            pos = this.getStickerPosition(new Sticker('rgb(255, 255, 255)', CORNER_CUBE, new Set([this.sides[i].getMiddleColor(), this.sides[(i + 1) % 4].getMiddleColor()])));

            if (pos['side'] !== this.whiteSide && pos['side'] !== this.yellowSide) {
                for (let j = 0; j < 4; j++) {
                    if (pos['side'].getMiddleColor() === this.sides[j].getMiddleColor()) {
                        switch (pos['index']) {
                            case movingIndices[j][0]:
                                // console.log('C-1');
                                this.rotate(this.sides[j], true);
                                this.rotate(this.yellowSide, true);
                                this.rotate(this.sides[j], false);
                                break;
                            case movingIndices[j][1]:
                                // console.log('C-2');
                                this.rotate(this.sides[j], false);
                                this.rotate(this.yellowSide, false);
                                this.rotate(this.sides[j], true);
                                break;
                        }
                    }
                }
            }
            /*
                        if (pos['side'] !== this.whiteSide && pos['side'] !== this.yellowSide && pos['index'] === movingIndices[i][0]) {
                            console.log('C-1');
                            this.rotate(this.sides[(1 + i) % 4], false);
                            this.rotate(this.yellowSide, true);
                            this.rotate(this.sides[(1 + i) % 4], true);
                        }

                        if (pos['side'] !== this.whiteSide && pos['side'] !== this.yellowSide && pos['index'] === movingIndices[i][1]) {
                            console.log('C-2');
                            this.rotate(this.sides[(4 + i -1) % 4], true);
                            this.rotate(this.yellowSide, false);
                            this.rotate(this.sides[(4 + i -1) % 4], false);
                        }*/

            if (pos['side'] === this.whiteSide && pos['index'] === movingWhiteIndices[i][0]) {
                console.log('C-3');
                this.rotate(this.sides[(4 + i - 1) % 4], true);
                this.rotate(this.yellowSide, true);
                this.rotate(this.sides[(4 + i - 1) % 4], false);
            }

            if (pos['side'] === this.whiteSide && pos['index'] === movingWhiteIndices[i][1]) {
                // console.log('C-4');
                this.rotate(this.sides[(i + 2) % 4], true);
                this.rotate(this.yellowSide, true);
                this.rotate(this.sides[(i + 2) % 4], false);
            }

            if (pos['side'] === this.whiteSide && pos['index'] === movingWhiteIndices[i][2]) {
                // console.log('C-5');
                this.rotate(this.sides[(i + 2) % 4], false);
                this.rotate(this.yellowSide, true);
                this.rotate(this.sides[(i + 2) % 4], true);
            }

            if (pos['side'] === this.yellowSide) {
                // console.log('C-6');
                let flag2 = false;
                while (flag2 === false) {

                    pos = this.getStickerPosition(new Sticker('rgb(255, 255, 255)', CORNER_CUBE, new Set([this.sides[i].getMiddleColor(), this.sides[(i + 1) % 4].getMiddleColor()])));

                    let index = getPosOnTop(pos['index']);
                    if (this.whiteSide.stickers[index].color !== WHITE) {
                        let sideToTurn;
                        switch (pos['index']) {
                            case 0:
                                sideToTurn = this.greenSide;
                                break;
                            case 2:
                                sideToTurn = this.redSide;
                                break;
                            case 6:
                                sideToTurn = this.orangeSide;
                                break;
                            case 8:
                                sideToTurn = this.blueSide;
                                break;
                        }
                        this.rotate(sideToTurn, false);
                        this.rotate(this.yellowSide, true);
                        this.rotate(sideToTurn, true);
                        flag2 = true;
                        break;
                    }

                    /*if (pos['index'] === movingYellowIndices[i][1] && this.whiteSide.stickers[movingBlankWhiteIndices[i][1]].color.toString() !== 'rgb(255, 255, 255)') {
                        this.rotate(this.sides[i % 4], false);
                        this.rotate(this.yellowSide, true);
                        this.rotate(this.sides[i % 4], true);
                        flag = true;
                        break;
                    }*/
                    this.rotate(this.yellowSide, false);
                }
            }

            // ekkor már az alsó sorban lesz a megfigyelt sarokkocka, így annak pozícióját a felhelyezéshez előkészítjük
            pos = this.getStickerPosition(new Sticker('rgb(255, 255, 255)', CORNER_CUBE, new Set([this.sides[i].getMiddleColor(), this.sides[(i + 1) % 4].getMiddleColor()])));

            // két leetőség adódik, ez alapján válnak ketté az elvégzendő mozdulatok
            // a fehér matrica (egyelőre mindegy melyik oldalon) a bal alsó sarokban van, vagy pedig a jobb alsóban

            //bal sarokban
            if (pos['side'] === this.blueSide && pos['index'] === 8 || pos['side'] === this.redSide && pos['index'] === 6 || pos['side'] === this.greenSide && pos['index'] === 0 ||
                pos['side'] === this.orangeSide && pos['index'] === 2) {
                // console.log('C-7');
                while (pos['side'] !== this.sides[(4 + i - 1) % 4]) {
                    this.rotate(this.yellowSide, false);
                    pos = this.getStickerPosition(new Sticker('rgb(255, 255, 255)', CORNER_CUBE, new Set([this.sides[i].getMiddleColor(), this.sides[(i + 1) % 4].getMiddleColor()])));
                }
            }

            //jobb sarokban
            if (pos['side'] === this.blueSide && pos['index'] === 2 || pos['side'] === this.redSide && pos['index'] === 8 || pos['side'] === this.greenSide && pos['index'] === 6 ||
                pos['side'] === this.orangeSide && pos['index'] === 0) {
                // console.log('C-8');
                while (pos['side'] !== this.sides[(i + 2) % 4]) {
                    this.rotate(this.yellowSide, true);
                    pos = this.getStickerPosition(new Sticker('rgb(255, 255, 255)', CORNER_CUBE, new Set([this.sides[i].getMiddleColor(), this.sides[(i + 1) % 4].getMiddleColor()])));
                }
            }

            // felhelyezés:
            pos = this.getStickerPosition(new Sticker('rgb(255, 255, 255)', CORNER_CUBE, new Set([this.sides[i].getMiddleColor(), this.sides[(i + 1) % 4].getMiddleColor()])));
            // he a saraokkocka a jobbra eső oldalon helyezkedik el
            if (pos['side'] === this.sides[(4 + i - 1) % 4]) {
                // console.log('C-9');
                this.rotate(this.sides[(1 + i) % 4], false);
                this.rotate(this.yellowSide, true);
                this.rotate(this.sides[(1 + i) % 4], true);
            } else if (pos['side'] === this.sides[(i + 2) % 4]) {
                // console.log('C-10');
                this.rotate(this.sides[i % 4], true);
                this.rotate(this.yellowSide, false);
                this.rotate(this.sides[i % 4], false);
            }
            // console.log(i + 1 + '. oldal megvan');
        }
    }

    colorEdges() {
        let rotations = '';

        let phaseTitle = 'Élkockák kirakása';
        console.log('Élkockák kirakása');
        let pos;
        let oppositeIndexOnYellow = [3, 7, 5, 1];
        let isYellowReplacement = false;
        let posOnSolved;

        for (let i = 0; i < 4; i++) {
            pos = this.getStickerPosition(new Sticker(this.sides[i].getMiddleColor(), EDGE_CUBE, new Set([this.sides[(i + 1) % 4].getMiddleColor()])));
            posOnSolved = solvedCube.getStickerPosition(new Sticker(this.sides[i].getMiddleColor(), EDGE_CUBE, new Set([this.sides[(i + 1) % 4].getMiddleColor()])));

            // az élkocka az i-edik vizsgált oldal színével lehet:
            //                  a) a sárga oldalon
            //                  b) bármely színes oldalon (a szomszédja a sárgán van)
            //                  c) bármely színes oldalon (a szomszédja egy másik színesen van), beékelődve két szín közé

            console.log(i);
            if (posOnSolved['side'].getMiddleColor() === pos['side'].getMiddleColor() && posOnSolved['index'] === pos['index']) console.log(i + '. siker (alapból jó helyen).');
            // c)
            if (posOnSolved['side'].getMiddleColor() !== pos['side'].getMiddleColor() && posOnSolved['index'] !== pos['index'] &&
                (pos['side'] === this.blueSide && pos['index'] === 1 ||
                pos['side'] === this.blueSide && pos['index'] === 7 ||
                pos['side'] === this.redSide && pos['index'] === 3 ||
                pos['side'] === this.redSide && pos['index'] === 5 ||
                pos['side'] === this.greenSide && pos['index'] === 1 ||
                pos['side'] === this.greenSide && pos['index'] === 7 ||
                pos['side'] === this.orangeSide && pos['index'] === 3 ||
                pos['side'] === this.orangeSide && pos['index'] === 5)) {

                console.log('Be van ékelődve valahova az ' + i + '. oldalé.');

                if (pos['side'] === this.blueSide && pos['index'] === 1 ||
                    pos['side'] === this.redSide && pos['index'] === 5 ||
                    pos['side'] === this.greenSide && pos['index'] === 7 ||
                    pos['side'] === this.orangeSide && pos['index'] === 3) {

                    this.rotate(pos['side'], false);
                    this.rotate(this.yellowSide, true);
                    this.rotate(pos['side'], true);

                } else if (pos['side'] === this.blueSide && pos['index'] === 7 ||
                    pos['side'] === this.redSide && pos['index'] === 3 ||
                    pos['side'] === this.greenSide && pos['index'] === 1 ||
                    pos['side'] === this.orangeSide && pos['index'] === 5) {

                    this.rotate(pos['side'], true);
                    this.rotate(this.yellowSide, false);
                    this.rotate(pos['side'], false);
                }
                this.whiteCorners();

                /*for (let j = 0; j < 9; j++) {

                    // a két if-ben biztosan találunk egy citromsárga matricát tartalmazó élkockát. Ezután megkapjuk a sárga matrica helyét a pos változóban.
                    if (this.yellowSide.stickers[j].type === EDGE_CUBE && this.yellowSide.stickers[j].color === YELLOW) {
                        // pos = this.getStickerPosition(new Sticker(YELLOW, EDGE_CUBE, this.yellowSide.stickers[j].neighbors));
                        isYellowReplacement = true;
                        break;
                    }
                    if (this.yellowSide.stickers[j].type === EDGE_CUBE && this.yellowSide.stickers[j].neighbors.has(YELLOW)) {
                        // pos = this.getStickerPosition(new Sticker(YELLOW, EDGE_CUBE, new Set([this.yellowSide.stickers[j].color.toString()])));
                        isYellowReplacement = true;
                        break;
                    }
                    // ekkor jön az a) vagy b) eset, igazából teljesen mindegy melyik, a sárgát tartalmazó élkocka bekerül a megfelelő helyre
                }*/
            }
            pos = this.getStickerPosition(new Sticker(this.sides[i].getMiddleColor(), EDGE_CUBE, new Set([this.sides[(i + 1) % 4].getMiddleColor()])));

            // a)
            if (pos['side'] === this.yellowSide) {
                console.log(i + '. siker (sárgáról).')
                while (pos['index'] !== oppositeIndexOnYellow[i]) {
                    this.rotate(this.yellowSide, false);
                    pos = this.getStickerPosition(new Sticker(this.sides[i].getMiddleColor(), EDGE_CUBE, new Set([this.sides[(i + 1) % 4].getMiddleColor()])));
                }
                this.rotate(this.sides[i], true);
                this.rotate(this.yellowSide, false);
                this.rotate(this.sides[i], false);
                this.whiteCorners();
            } else if (pos['side'] === this.blueSide && pos['index'] === 5 ||
                pos['side'] === this.redSide && pos['index'] === 7 ||
                pos['side'] === this.greenSide && pos['index'] === 3 ||
                pos['side'] === this.orangeSide && pos['index'] === 1) {
                console.log(i + '. siker (színesről).')

                // b)

                while (pos['side'] !== this.sides[(4 + i - 1) % 4]) {
                    this.rotate(this.yellowSide, false);
                    pos = this.getStickerPosition(new Sticker(this.sides[i].getMiddleColor(), EDGE_CUBE, new Set([this.sides[(i + 1) % 4].getMiddleColor()])));
                }
                this.rotate(this.sides[(i + 1) % 4], false);
                this.rotate(this.yellowSide, true);
                this.rotate(this.sides[(i + 1) % 4], true);
                this.whiteCorners();
            } else {
                console.log('HIBA.');
            }
            console.log('control');
        }
    }

    yellowCross() {
        console.log('*** SÁRGA KERESZT ***')
        if (this.yellowSide.stickers[1].color.toString() !== YELLOW ||
        this.yellowSide.stickers[3].color.toString() !== YELLOW ||
        this.yellowSide.stickers[5].color.toString() !== YELLOW ||
        this.yellowSide.stickers[7].color.toString() !== YELLOW) {
            // itt három lehetőség adott:
            //      a) nincs egyáltalán sárga élmatrica a sárga oldalon
            //      b) kettő szomszédos van (L alak)
            //      c) kettő ellentétes van (I alak)

            // megjegyzés: az L alak után a lépéssorozat I alakot hoz létre, melyből + lesz megegy iteráció után.

            let affectedStickers = [this.yellowSide.stickers[5], this.yellowSide.stickers[1], this.yellowSide.stickers[3], this.yellowSide.stickers[7]];

            if (affectedStickers[0].color.toString() !== YELLOW &&
                affectedStickers[1].color.toString() !== YELLOW &&
                affectedStickers[2].color.toString() !== YELLOW &&
                affectedStickers[3].color.toString() !== YELLOW) {

                console.log('0 van a sárga oldalon.')
                // a)
                this.rotate(this.sides[0], false);
                this.rotate(this.sides[1], false);
                this.rotate(this.yellowSide, false);
                this.rotate(this.sides[1], true);
                this.rotate(this.yellowSide, true);
                this.rotate(this.sides[0], true);
            }

            affectedStickers = [this.yellowSide.stickers[5], this.yellowSide.stickers[1], this.yellowSide.stickers[3], this.yellowSide.stickers[7]];

            for (let i = 0; i < 4; i++) {
                if (affectedStickers[i % 4].color.toString() === YELLOW && affectedStickers[(i + 1) % 4].color.toString() === YELLOW) {
                    // b) L alak esete:
                    console.log('L alak van a sárga oldalon.')
                    this.rotate(this.sides[(i + 2) % 4], false);
                    this.rotate(this.sides[(i + 3) % 4], false);
                    this.rotate(this.yellowSide, false);
                    this.rotate(this.sides[(i + 3) % 4], true);
                    this.rotate(this.yellowSide, true);
                    this.rotate(this.sides[(i + 2) % 4], true);
                    break;
                }
            }

            affectedStickers = [this.yellowSide.stickers[5], this.yellowSide.stickers[1], this.yellowSide.stickers[3], this.yellowSide.stickers[7]];

            for (let i = 0; i < 4; i++) {
                if (affectedStickers[i % 4].color.toString() === YELLOW && affectedStickers[(i + 2) % 4].color.toString() === YELLOW) {
                    console.log('I alak van a sárga oldalon.')
                    // c) I alak esete:
                    this.rotate(this.sides[(i + 1) % 4], false);
                    this.rotate(this.sides[(i + 2) % 4], false);
                    this.rotate(this.yellowSide, false);
                    this.rotate(this.sides[(i + 2) % 4], true);
                    this.rotate(this.yellowSide, true);
                    this.rotate(this.sides[(i + 1) % 4], true);
                    break;
                }
            }
        }
        this.reRenderCube();
    }

    yellowEdges() {
        let affectedIndices = [5, 7, 3, 1];
        for (let k = 0; k < 4; k++) {
            let maxOfStickersInGoodPlace = 0;
            let countOfRightStickers = [0, 0, 0, 0];
            let maxIndex = 0;

            if (this.blueSide.stickers[5].color === BLUE) countOfRightStickers[0]++;
            if (this.redSide.stickers[7].color === RED) countOfRightStickers[0]++;
            if (this.greenSide.stickers[3].color === GREEN) countOfRightStickers[0]++;
            if (this.orangeSide.stickers[1].color === ORANGE) countOfRightStickers[0]++;

            this.rotate(this.yellowSide, false);
            if (this.blueSide.stickers[5].color === BLUE) countOfRightStickers[1]++;
            if (this.redSide.stickers[7].color === RED) countOfRightStickers[1]++;
            if (this.greenSide.stickers[3].color === GREEN) countOfRightStickers[1]++;
            if (this.orangeSide.stickers[1].color === ORANGE) countOfRightStickers[1]++;

            this.rotate(this.yellowSide, false);
            if (this.blueSide.stickers[5].color === BLUE) countOfRightStickers[2]++;
            if (this.redSide.stickers[7].color === RED) countOfRightStickers[2]++;
            if (this.greenSide.stickers[3].color === GREEN) countOfRightStickers[2]++;
            if (this.orangeSide.stickers[1].color === ORANGE) countOfRightStickers[2]++;

            this.rotate(this.yellowSide, false);
            if (this.blueSide.stickers[5].color === BLUE) countOfRightStickers[3]++;
            if (this.redSide.stickers[7].color === RED) countOfRightStickers[3]++;
            if (this.greenSide.stickers[3].color === GREEN) countOfRightStickers[3]++;
            if (this.orangeSide.stickers[1].color === ORANGE) countOfRightStickers[3]++;
            this.rotate(this.yellowSide, false);

            for (let i = 0; i < countOfRightStickers.length; i++) {
                if (countOfRightStickers[i] > maxOfStickersInGoodPlace) {
                    maxOfStickersInGoodPlace = countOfRightStickers[i];
                    maxIndex = i;
                }
            }

            switch (maxIndex) {
                case 1:
                    this.rotate(this.yellowSide, false);
                    break;
                case 2:
                    this.rotate(this.yellowSide, false);
                    this.rotate(this.yellowSide, false);
                    break;
                case 3:
                    this.rotate(this.yellowSide, true);
                    break;
            }
            for (let i = 0; i < 4; i++) {
                if (this.sides[i].stickers[affectedIndices[i]].color !== this.sides[i].getMiddleColor() &&
                    this.sides[(i + 2) % 4].stickers[affectedIndices[(i + 2) % 4]].color !== this.sides[(i + 2) % 4].getMiddleColor()) {
                    this.changeYellowEdges(i, 1);
                    break;
                }
            }

            for (let i = 0; i < 4; i++) {
                if (this.sides[i].stickers[affectedIndices[i]].color !== this.sides[i].getMiddleColor() &&
                    this.sides[(i + 3) % 4].stickers[affectedIndices[(i + 3) % 4]].color !== this.sides[(i + 3) % 4].getMiddleColor()) {
                    this.changeYellowEdges(i ,1);
                    break;
                }
            }
        }
        console.log('yellowEdges() stopped.')
        this.reRenderCube();
    }

    yellowCornerPosition() {
        // Lehetosegek: a) 4 helytelen van
        //              b) 3 helytelen van
        // b) utan mindig helyreall a sarkok elhelyezkedese (már ha jó helyen futtatjuk az algoritmust ???)

        let cornersToCheck = [2, 0, 6, 8]
        let rightStickerPos = 0;
        let countOfRightStickers = 0;
        let string = '';

        while(countOfRightStickers !== 4) {
            rightStickerPos = 0;
            countOfRightStickers = 0;

            for (let i = 0; i < 4; i++) {
                this.yellowSide.stickers[cornersToCheck[i]].neighbors.forEach(value => string += value);
                console.log(string);
                string = '';
                console.log(this.sides[i % 4].getMiddleColor());
                console.log(this.sides[(i + 1) % 4].getMiddleColor());
                console.log(cornersToCheck[i]);
                if ((this.yellowSide.stickers[cornersToCheck[i]].color === YELLOW && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(this.sides[i % 4].getMiddleColor()) && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(this.sides[(i + 1) % 4].getMiddleColor())) ||
                    (this.yellowSide.stickers[cornersToCheck[i]].color === this.sides[i % 4].getMiddleColor() && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(YELLOW) && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(this.sides[(i + 1) % 4].getMiddleColor())) ||
                    (this.yellowSide.stickers[cornersToCheck[i]].color === this.sides[(i + 1) % 4].getMiddleColor() && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(YELLOW) && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(this.sides[i % 4].getMiddleColor()))) {
                    // sarokkocka megfelelő helyen van
                    console.log('sarga oldalon az ' + i + ' indexu sarokkocka van a helyen.');
                    console.log(this.sides[i % 4].getMiddleColor());
                    console.log(this.sides[(i + 1) % 4].getMiddleColor());
                    countOfRightStickers++;
                    console.log(countOfRightStickers);
                    rightStickerPos = cornersToCheck[i];
                }

                if (this.yellowSide.stickers[cornersToCheck[i]].color === YELLOW && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(this.sides[i % 4].getMiddleColor()) && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(this.sides[(i + 1) % 4].getMiddleColor())) {
                    console.log('CASE-1');
                }

                if (this.yellowSide.stickers[cornersToCheck[i]].color === this.sides[i % 4].getMiddleColor() && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(YELLOW) && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(this.sides[(i + 1) % 4].getMiddleColor())) {
                    console.log('CASE-2');
                }

                if (this.yellowSide.stickers[cornersToCheck[i]].color === this.sides[(i + 1) % 4].getMiddleColor() && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(YELLOW) && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(this.sides[i % 4].getMiddleColor())) {
                    console.log('CASE-3');
                }
            }

            if (countOfRightStickers === 0) {
                console.log('Nincs egy sarga sarok sem a helyen.');
                this.changeYellowCorners();
            } else if (countOfRightStickers < 4) {
                console.log('1 sarok biztosan a helyen van.');
                switch (rightStickerPos) {
                    case 2:
                        this.changeYellowCorners(2);
                        console.log('this.sides[2]');
                        break;
                    case 0:
                        this.changeYellowCorners(3);
                        console.log('this.sides[3]');
                        break;
                    case 6:
                        this.changeYellowCorners(0);
                        console.log('this.sides[0]');
                        break;
                    case 8:
                        this.changeYellowCorners(1);
                        console.log('this.sides[1]');
                        break;
                }
            } else {
                console.log('Minden sarok a helyen van.');
            }
        }
        console.log('yellowCornerPosition() ended.');
    }

    yellowCornerRotation() {
        console.log('yellowCornerRotation() started.');
        let cornersToCheck = [2, 0, 6, 8]
        let moveThisSide = 0;
        let entryIndex = -1;

        for (let i = 0; i < 4; i++) {
            if (this.yellowSide.stickers[cornersToCheck[i]].color !== YELLOW) {
                entryIndex = i;
                console.log(entryIndex);
                break;
            }
        }

        if (entryIndex >= 0) {
            // sarokkocka nincs megfeleloen beofrgatva
            while (!this.isYellowSideSolved()) {
                    console.log(this.yellowSide.stickers[cornersToCheck[entryIndex]].color);
                    this.rotateYellowCorners(entryIndex + 1);
                    console.log('alg fut.')
                    if (this.yellowSide.stickers[cornersToCheck[entryIndex]].color === YELLOW) {
                        this.rotate(this.yellowSide, false);
                        console.log('sargat forgatta.')
                    }

            }
        }
        console.log('yellowCornerRotation() ended.');

        this.yellowToSolve();
    }

    changeYellowEdges(actualSideIndex, param) {
        this.rotate(this.sides[(actualSideIndex + param) % 4], false);
        this.rotate(this.yellowSide, false);
        this.rotate(this.sides[(actualSideIndex + param) % 4], true);
        this.rotate(this.yellowSide, false);
        this.rotate(this.sides[(actualSideIndex + param) % 4], false);
        this.rotate(this.yellowSide, false);
        this.rotate(this.yellowSide, false);
        this.rotate(this.sides[(actualSideIndex + param) % 4], true);
    }

    changeYellowCorners(sideIndex = 0) {
        this.rotate(this.sides[sideIndex % 4], false);
        this.rotate(this.yellowSide, true);
        this.rotate(this.sides[(sideIndex + 2) % 4], true);
        this.rotate(this.yellowSide, false);
        this.rotate(this.sides[sideIndex % 4], true);
        this.rotate(this.yellowSide, true);
        this.rotate(this.sides[(sideIndex + 2) % 4], false);
        this.rotate(this.yellowSide, false);
    }

    rotateYellowCorners(sideIndex) {
        this.rotate(this.sides[sideIndex % 4], true);
        this.rotate(this.whiteSide, false);
        this.rotate(this.sides[sideIndex % 4], false);
        this.rotate(this.whiteSide, true);
    }

    isYellowSideSolved() {
        for (let i = 0; i < 9; i++) {
            if (this.yellowSide.stickers[i].color !== this.yellowSide.getMiddleColor()) {
                return false;
            }
        }
        return true;
    }

    yellowToSolve() {
        while (!this.isSolved()) {
            this.rotate(this.yellowSide, false);
        }
    }

    /*
    copyCube() {
        let newCube = new Cube(
            new Side(WHITE, [
                new Sticker(this.whiteSide.stickers[0].color.toString(), 2, new Set()),
                new Sticker(this.whiteSide.stickers[1].color.toString(), 1, new Set()),
                new Sticker(this.whiteSide.stickers[2].color.toString(), 2, new Set()),
                new Sticker(this.whiteSide.stickers[3].color.toString(), 1, new Set()),
                new Sticker(this.whiteSide.stickers[4].color.toString(), 0, new Set()),
                new Sticker(this.whiteSide.stickers[5].color.toString(), 1, new Set()),
                new Sticker(this.whiteSide.stickers[6].color.toString(), 2, new Set()),
                new Sticker(this.whiteSide.stickers[7].color.toString(), 1, new Set()),
                new Sticker(this.whiteSide.stickers[8].color.toString(), 2, new Set())]),
            new Side(RED, [
                new Sticker(this.redSide.stickers[0].color.toString(), 2, new Set()),
                new Sticker(this.redSide.stickers[1].color.toString(), 1, new Set()),
                new Sticker(this.redSide.stickers[2].color.toString(), 2, new Set()),
                new Sticker(this.redSide.stickers[3].color.toString(), 1, new Set()),
                new Sticker(this.redSide.stickers[4].color.toString(), 0, new Set()),
                new Sticker(this.redSide.stickers[5].color.toString(), 1, new Set()),
                new Sticker(this.redSide.stickers[6].color.toString(), 2, new Set()),
                new Sticker(this.redSide.stickers[7].color.toString(), 1, new Set()),
                new Sticker(this.redSide.stickers[8].color.toString(), 2, new Set())]),
            new Side(GREEN, [
                new Sticker(this.greenSide.stickers[0].color.toString(), 2, new Set()),
                new Sticker(this.greenSide.stickers[1].color.toString(), 1, new Set()),
                new Sticker(this.greenSide.stickers[2].color.toString(), 2, new Set()),
                new Sticker(this.greenSide.stickers[3].color.toString(), 1, new Set()),
                new Sticker(this.greenSide.stickers[4].color.toString(), 0, new Set()),
                new Sticker(this.greenSide.stickers[5].color.toString(), 1, new Set()),
                new Sticker(this.greenSide.stickers[6].color.toString(), 2, new Set()),
                new Sticker(this.greenSide.stickers[7].color.toString(), 1, new Set()),
                new Sticker(this.greenSide.stickers[8].color.toString(), 2, new Set())]),
            new Side(ORANGE, [
                new Sticker(this.orangeSide.stickers[0].color.toString(), 2, new Set()),
                new Sticker(this.orangeSide.stickers[1].color.toString(), 1, new Set()),
                new Sticker(this.orangeSide.stickers[2].color.toString(), 2, new Set()),
                new Sticker(this.orangeSide.stickers[3].color.toString(), 1, new Set()),
                new Sticker(this.orangeSide.stickers[4].color.toString(), 0, new Set()),
                new Sticker(this.orangeSide.stickers[5].color.toString(), 1, new Set()),
                new Sticker(this.orangeSide.stickers[6].color.toString(), 2, new Set()),
                new Sticker(this.orangeSide.stickers[7].color.toString(), 1, new Set()),
                new Sticker(this.orangeSide.stickers[8].color.toString(), 2, new Set())]),
            new Side(BLUE, [
                new Sticker(this.blueSide.stickers[0].color.toString(), 2, new Set()),
                new Sticker(this.blueSide.stickers[1].color.toString(), 1, new Set()),
                new Sticker(this.blueSide.stickers[2].color.toString(), 2, new Set()),
                new Sticker(this.blueSide.stickers[3].color.toString(), 1, new Set()),
                new Sticker(this.blueSide.stickers[4].color.toString(), 0, new Set()),
                new Sticker(this.blueSide.stickers[5].color.toString(), 1, new Set()),
                new Sticker(this.blueSide.stickers[6].color.toString(), 2, new Set()),
                new Sticker(this.blueSide.stickers[7].color.toString(), 1, new Set()),
                new Sticker(this.blueSide.stickers[8].color.toString(), 2, new Set())]),
            new Side(YELLOW, [
                new Sticker(this.yellowSide.stickers[0].color.toString(), 2, new Set()),
                new Sticker(this.yellowSide.stickers[1].color.toString(), 1, new Set()),
                new Sticker(this.yellowSide.stickers[2].color.toString(), 2, new Set()),
                new Sticker(this.yellowSide.stickers[3].color.toString(), 1, new Set()),
                new Sticker(this.yellowSide.stickers[4].color.toString(), 0, new Set()),
                new Sticker(this.yellowSide.stickers[5].color.toString(), 1, new Set()),
                new Sticker(this.yellowSide.stickers[6].color.toString(), 2, new Set()),
                new Sticker(this.yellowSide.stickers[7].color.toString(), 1, new Set()),
                new Sticker(this.yellowSide.stickers[8].color.toString(), 2, new Set())]),
        );

        newCube.whiteSide.stickers[0].neighbors.add(newCube.orangeSide.stickers[6].color.toString()).add(newCube.greenSide.stickers[2].color.toString());
        newCube.whiteSide.stickers[1].neighbors.add(newCube.orangeSide.stickers[7].color.toString());
        newCube.whiteSide.stickers[2].neighbors.add(newCube.orangeSide.stickers[8].color.toString()).add(newCube.blueSide.stickers[0].color.toString());
        newCube.whiteSide.stickers[3].neighbors.add(newCube.greenSide.stickers[5].color.toString());
        newCube.whiteSide.stickers[5].neighbors.add(newCube.blueSide.stickers[3].color.toString());
        newCube.whiteSide.stickers[6].neighbors.add(newCube.greenSide.stickers[8].color.toString()).add(newCube.redSide.stickers[0].color.toString());
        newCube.whiteSide.stickers[7].neighbors.add(newCube.redSide.stickers[1].color.toString());
        newCube.whiteSide.stickers[8].neighbors.add(newCube.redSide.stickers[2].color.toString()).add(newCube.blueSide.stickers[6].color.toString());

        newCube.blueSide.stickers[0].neighbors.add(newCube.orangeSide.stickers[8].color.toString()).add(newCube.whiteSide.stickers[2].color.toString());
        newCube.blueSide.stickers[1].neighbors.add(newCube.orangeSide.stickers[5].color.toString());
        newCube.blueSide.stickers[2].neighbors.add(newCube.orangeSide.stickers[2].color.toString()).add(newCube.yellowSide.stickers[8].color.toString());
        newCube.blueSide.stickers[3].neighbors.add(newCube.whiteSide.stickers[5].color.toString());
        newCube.blueSide.stickers[5].neighbors.add(newCube.yellowSide.stickers[5].color.toString());
        newCube.blueSide.stickers[6].neighbors.add(newCube.whiteSide.stickers[8].color.toString()).add(newCube.redSide.stickers[2].color.toString());
        newCube.blueSide.stickers[7].neighbors.add(newCube.redSide.stickers[5].color.toString());
        newCube.blueSide.stickers[8].neighbors.add(newCube.redSide.stickers[8].color.toString()).add(newCube.yellowSide.stickers[2].color.toString());

        newCube.orangeSide.stickers[0].neighbors.add(newCube.greenSide.stickers[0].color.toString()).add(newCube.yellowSide.stickers[6].color.toString());
        newCube.orangeSide.stickers[1].neighbors.add(newCube.yellowSide.stickers[6].color.toString());
        newCube.orangeSide.stickers[2].neighbors.add(newCube.yellowSide.stickers[8].color.toString()).add(newCube.blueSide.stickers[2].color.toString());
        newCube.orangeSide.stickers[3].neighbors.add(newCube.greenSide.stickers[3].color.toString());
        newCube.orangeSide.stickers[5].neighbors.add(newCube.blueSide.stickers[1].color.toString());
        newCube.orangeSide.stickers[6].neighbors.add(newCube.greenSide.stickers[2].color.toString()).add(newCube.whiteSide.stickers[0].color.toString());
        newCube.orangeSide.stickers[7].neighbors.add(newCube.whiteSide.stickers[1].color.toString());
        newCube.orangeSide.stickers[8].neighbors.add(newCube.whiteSide.stickers[2].color.toString()).add(newCube.blueSide.stickers[0].color.toString());

        newCube.greenSide.stickers[0].neighbors.add(newCube.orangeSide.stickers[0].color.toString()).add(newCube.yellowSide.stickers[6].color.toString());
        newCube.greenSide.stickers[1].neighbors.add(newCube.orangeSide.stickers[3].color.toString());
        newCube.greenSide.stickers[2].neighbors.add(newCube.orangeSide.stickers[6].color.toString()).add(newCube.whiteSide.stickers[0].color.toString());
        newCube.greenSide.stickers[3].neighbors.add(newCube.yellowSide.stickers[3].color.toString());
        newCube.greenSide.stickers[5].neighbors.add(newCube.whiteSide.stickers[3].color.toString());
        newCube.greenSide.stickers[6].neighbors.add(newCube.yellowSide.stickers[0].color.toString()).add(newCube.redSide.stickers[6].color.toString());
        newCube.greenSide.stickers[7].neighbors.add(newCube.redSide.stickers[3].color.toString());
        newCube.greenSide.stickers[8].neighbors.add(newCube.whiteSide.stickers[6].color.toString()).add(newCube.redSide.stickers[0].color.toString());

        newCube.redSide.stickers[0].neighbors.add(newCube.greenSide.stickers[8].color.toString()).add(newCube.whiteSide.stickers[6].color.toString());
        newCube.redSide.stickers[1].neighbors.add(newCube.whiteSide.stickers[7].color.toString());
        newCube.redSide.stickers[2].neighbors.add(newCube.whiteSide.stickers[8].color.toString()).add(newCube.blueSide.stickers[6].color.toString());
        newCube.redSide.stickers[3].neighbors.add(newCube.greenSide.stickers[7].color.toString());
        newCube.redSide.stickers[5].neighbors.add(newCube.blueSide.stickers[7].color.toString());
        newCube.redSide.stickers[6].neighbors.add(newCube.yellowSide.stickers[0].color.toString()).add(newCube.greenSide.stickers[6].color.toString());
        newCube.redSide.stickers[7].neighbors.add(newCube.yellowSide.stickers[1].color.toString());
        newCube.redSide.stickers[8].neighbors.add(newCube.yellowSide.stickers[2].color.toString()).add(newCube.blueSide.stickers[8].color.toString());

        newCube.yellowSide.stickers[0].neighbors.add(newCube.redSide.stickers[6].color.toString()).add(newCube.greenSide.stickers[6].color.toString());
        newCube.yellowSide.stickers[1].neighbors.add(newCube.redSide.stickers[7].color.toString());
        newCube.yellowSide.stickers[2].neighbors.add(newCube.blueSide.stickers[8].color.toString()).add(newCube.redSide.stickers[8].color.toString());
        newCube.yellowSide.stickers[3].neighbors.add(newCube.greenSide.stickers[3].color.toString());
        newCube.yellowSide.stickers[5].neighbors.add(newCube.blueSide.stickers[5].color.toString());
        newCube.yellowSide.stickers[6].neighbors.add(newCube.orangeSide.stickers[0].color.toString()).add(newCube.greenSide.stickers[0].color.toString());
        newCube.yellowSide.stickers[7].neighbors.add(newCube.orangeSide.stickers[1].color.toString());
        newCube.yellowSide.stickers[8].neighbors.add(newCube.blueSide.stickers[2].color.toString()).add(newCube.orangeSide.stickers[2].color.toString());

        return newCube;

    }*/

    getTargetPosition(solvedCube, sticker) {
        console.log('getTargetPosition() - A kérdéses matrica:');
        console.log(sticker);
        // console.log(solvedCube.getStickerPosition(sticker));
        return solvedCube.getStickerPosition(sticker);
    }
}

const eqSet = (xs, ys) =>
    xs.size === ys.size &&
    [...xs].every((x) => ys.has(x));

function getPosOnTop(paramPos) {
    if (paramPos === 0) return 6;
    if (paramPos === 2) return 8;
    if (paramPos === 6) return 0;
    if (paramPos === 8) return 2;
}
