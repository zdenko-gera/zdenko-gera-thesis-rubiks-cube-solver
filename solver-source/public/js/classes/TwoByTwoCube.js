import {WHITE, RED, GREEN, ORANGE, BLUE, YELLOW, CORNER_CUBE} from "../constants.js";
import { eqSet } from "../constants.js";
import {Cube} from "./Cube.js";
import {Sticker} from "./Sticker.js";

export class TwoByTwoCube extends Cube {

    constructor(whiteSide, redSide, greenSide, orangeSide, blueSide, yellowSide) {
        super(whiteSide, redSide, greenSide, orangeSide, blueSide, yellowSide);

        // Matricák szomszédsági viszonyának megadása oldalanként:
        this.whiteSide.stickers[0].neighbors.add(this.orangeSide.stickers[2].color.toString()).add(this.greenSide.stickers[1].color.toString());
        this.whiteSide.stickers[1].neighbors.add(this.orangeSide.stickers[3].color.toString()).add(this.blueSide.stickers[0].color.toString());
        this.whiteSide.stickers[2].neighbors.add(this.greenSide.stickers[3].color.toString()).add(this.redSide.stickers[0].color.toString());
        this.whiteSide.stickers[3].neighbors.add(this.redSide.stickers[1].color.toString()).add(this.blueSide.stickers[2].color.toString());

        this.blueSide.stickers[0].neighbors.add(this.orangeSide.stickers[3].color.toString()).add(this.whiteSide.stickers[1].color.toString());
        this.blueSide.stickers[1].neighbors.add(this.orangeSide.stickers[1].color.toString()).add(this.yellowSide.stickers[3].color.toString());
        this.blueSide.stickers[2].neighbors.add(this.whiteSide.stickers[3].color.toString()).add(this.redSide.stickers[1].color.toString());
        this.blueSide.stickers[3].neighbors.add(this.redSide.stickers[3].color.toString()).add(this.yellowSide.stickers[1].color.toString());

        this.orangeSide.stickers[0].neighbors.add(this.greenSide.stickers[0].color.toString()).add(this.yellowSide.stickers[2].color.toString());
        this.orangeSide.stickers[1].neighbors.add(this.yellowSide.stickers[3].color.toString()).add(this.blueSide.stickers[1].color.toString());
        this.orangeSide.stickers[2].neighbors.add(this.greenSide.stickers[1].color.toString()).add(this.whiteSide.stickers[0].color.toString());
        this.orangeSide.stickers[3].neighbors.add(this.whiteSide.stickers[1].color.toString()).add(this.blueSide.stickers[0].color.toString());

        this.greenSide.stickers[0].neighbors.add(this.orangeSide.stickers[0].color.toString()).add(this.yellowSide.stickers[2].color.toString());
        this.greenSide.stickers[1].neighbors.add(this.orangeSide.stickers[2].color.toString()).add(this.whiteSide.stickers[0].color.toString());
        this.greenSide.stickers[2].neighbors.add(this.yellowSide.stickers[0].color.toString()).add(this.redSide.stickers[2].color.toString());
        this.greenSide.stickers[3].neighbors.add(this.whiteSide.stickers[2].color.toString()).add(this.redSide.stickers[0].color.toString());

        this.redSide.stickers[0].neighbors.add(this.greenSide.stickers[3].color.toString()).add(this.whiteSide.stickers[2].color.toString());
        this.redSide.stickers[1].neighbors.add(this.whiteSide.stickers[3].color.toString()).add(this.blueSide.stickers[2].color.toString());
        this.redSide.stickers[2].neighbors.add(this.yellowSide.stickers[0].color.toString()).add(this.greenSide.stickers[2].color.toString());
        this.redSide.stickers[3].neighbors.add(this.yellowSide.stickers[1].color.toString()).add(this.blueSide.stickers[3].color.toString());

        this.yellowSide.stickers[0].neighbors.add(this.redSide.stickers[2].color.toString()).add(this.greenSide.stickers[2].color.toString());
        this.yellowSide.stickers[1].neighbors.add(this.blueSide.stickers[3].color.toString()).add(this.redSide.stickers[3].color.toString());
        this.yellowSide.stickers[2].neighbors.add(this.orangeSide.stickers[0].color.toString()).add(this.greenSide.stickers[0].color.toString());
        this.yellowSide.stickers[3].neighbors.add(this.blueSide.stickers[1].color.toString()).add(this.orangeSide.stickers[1].color.toString());
    }

    /**
     * Part of the cube state validation process. Checks if the corner cubes are validly rotated.
     *
     * @returns {boolean} if the current state of corner cubes are legal
     */
    cornerRotationCheck() {
        let cornerSum = 0;

        // bal felső fehér oldalon
        if (this.greenSide.stickers[1].color === WHITE || this.greenSide.stickers[1].color === YELLOW) {
            cornerSum++;
        } else if (this.orangeSide.stickers[2].color === WHITE || this.orangeSide.stickers[2].color === YELLOW) {
            cornerSum--;
        }

        // jobb felső fehér oldalon
        if (this.orangeSide.stickers[3].color === WHITE || this.orangeSide.stickers[3].color === YELLOW) {
            cornerSum++;
        } else if (this.blueSide.stickers[0].color === WHITE || this.blueSide.stickers[0].color === YELLOW) {
            cornerSum--;
        }

        // jobb alsó fehér oldalon
        if (this.blueSide.stickers[2].color === WHITE || this.blueSide.stickers[2].color === YELLOW) {
            cornerSum++;
        } else if (this.redSide.stickers[1].color === WHITE || this.redSide.stickers[1].color === YELLOW) {
            cornerSum--;
        }

        // bal alsó fehér oldalon
        if (this.redSide.stickers[0].color === WHITE || this.redSide.stickers[0].color === YELLOW) {
            cornerSum++;
        } else if (this.greenSide.stickers[3].color === WHITE || this.greenSide.stickers[3].color === YELLOW) {
            cornerSum--;
        }

        // bal felső sárga oldalon
        if (this.greenSide.stickers[2].color === WHITE || this.greenSide.stickers[2].color === YELLOW) {
            cornerSum++;
        } else if (this.redSide.stickers[2].color === WHITE || this.redSide.stickers[2].color === YELLOW) {
            cornerSum--;
        }

        // jobb felső sárga oldalon
        if (this.redSide.stickers[3].color === WHITE || this.redSide.stickers[3].color === YELLOW) {
            cornerSum++;
        } else if (this.blueSide.stickers[3].color === WHITE || this.blueSide.stickers[3].color === YELLOW) {
            cornerSum--;
        }

        // jobb alsó sárga oldalon
        if (this.blueSide.stickers[1].color === WHITE || this.blueSide.stickers[1].color === YELLOW) {
            cornerSum++;
        } else if (this.orangeSide.stickers[1].color === WHITE || this.orangeSide.stickers[1].color === YELLOW) {
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
            for (let j = 0; j < 4; j++) {
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
     * Decides if the cube is in a solvable state or not using corner rotations, edge parity and permutation parity.
     *
     * @returns {boolean}
     */
    isSolvable() {
        return (this.cornerRotationCheck()/* && this.edgeParityCheck()*/);
    }

    /**
     * Makes a rotational move on the given side of the cube.
     *
     * @param side Side to rotate (clockwise by default).
     * @param backwards Decides if the rotation should be made clockwise or counter-clockwise.
     * @param humanMove If the rotation is started by the user using the rotation buttons.
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
            side.stickers[0] = tmpSide.stickers[2];
            side.stickers[1] = tmpSide.stickers[0];
            side.stickers[2] = tmpSide.stickers[3];
            side.stickers[3] = tmpSide.stickers[1];

            if (side.getMiddleColor() === WHITE) {
                if (i === 0) {
                    this.rotsToDo += 'U';
                }
                this.redSide.stickers[0] = tmpBlueSide.stickers[2];
                this.redSide.stickers[1] = tmpBlueSide.stickers[0];

                this.blueSide.stickers[0] = tmpOrangeSide.stickers[2];
                this.blueSide.stickers[2] = tmpOrangeSide.stickers[3];

                this.orangeSide.stickers[2] = tmpGreenSide.stickers[3];
                this.orangeSide.stickers[3] = tmpGreenSide.stickers[1];

                this.greenSide.stickers[1] = tmpRedSide.stickers[0];
                this.greenSide.stickers[3] = tmpRedSide.stickers[1];
            }

            if (side.getMiddleColor() === RED) {
                if (i === 0) {
                    this.rotsToDo += 'F';
                }
                this.blueSide.stickers[2] = tmpWhiteSide.stickers[2];
                this.blueSide.stickers[3] = tmpWhiteSide.stickers[3];

                this.yellowSide.stickers[0] = tmpBlueSide.stickers[3];
                this.yellowSide.stickers[1] = tmpBlueSide.stickers[2];

                this.greenSide.stickers[2] = tmpYellowSide.stickers[1];
                this.greenSide.stickers[3] = tmpYellowSide.stickers[0];

                this.whiteSide.stickers[2] = tmpGreenSide.stickers[2];
                this.whiteSide.stickers[3] = tmpGreenSide.stickers[3];
            }

            if (side.getMiddleColor() === BLUE) {
                if (i === 0) {
                    this.rotsToDo += 'R';
                }
                this.orangeSide.stickers[1] = tmpWhiteSide.stickers[1];
                this.orangeSide.stickers[3] = tmpWhiteSide.stickers[3];

                this.yellowSide.stickers[1] = tmpOrangeSide.stickers[1];
                this.yellowSide.stickers[3] = tmpOrangeSide.stickers[3];

                this.redSide.stickers[1] = tmpYellowSide.stickers[1];
                this.redSide.stickers[3] = tmpYellowSide.stickers[3];

                this.whiteSide.stickers[1] = tmpRedSide.stickers[1];
                this.whiteSide.stickers[3] = tmpRedSide.stickers[3];
            }

            if (side.getMiddleColor() === ORANGE) {
                if (i === 0) {
                    this.rotsToDo += 'B';
                }
                this.blueSide.stickers[0] = tmpYellowSide.stickers[3];
                this.blueSide.stickers[1] = tmpYellowSide.stickers[2];

                this.yellowSide.stickers[2] = tmpGreenSide.stickers[1];
                this.yellowSide.stickers[3] = tmpGreenSide.stickers[0];

                this.greenSide.stickers[0] = tmpWhiteSide.stickers[0];
                this.greenSide.stickers[1] = tmpWhiteSide.stickers[1];

                this.whiteSide.stickers[0] = tmpBlueSide.stickers[0];
                this.whiteSide.stickers[1] = tmpBlueSide.stickers[1];
            }

            if (side.getMiddleColor() === GREEN) {
                if (i === 0) {
                    this.rotsToDo += 'L';
                }
                this.orangeSide.stickers[0] = tmpYellowSide.stickers[0];
                this.orangeSide.stickers[2] = tmpYellowSide.stickers[2];

                this.yellowSide.stickers[0] = tmpRedSide.stickers[0];
                this.yellowSide.stickers[2] = tmpRedSide.stickers[2];

                this.redSide.stickers[0] = tmpWhiteSide.stickers[0];
                this.redSide.stickers[2] = tmpWhiteSide.stickers[2];

                this.whiteSide.stickers[0] = tmpOrangeSide.stickers[0];
                this.whiteSide.stickers[2] = tmpOrangeSide.stickers[2];
            }

            if (side.getMiddleColor() === YELLOW) {
                if (i === 0) {
                    this.rotsToDo += 'D';
                }
                this.orangeSide.stickers[0] = tmpBlueSide.stickers[1];
                this.orangeSide.stickers[1] = tmpBlueSide.stickers[3];

                this.greenSide.stickers[0] = tmpOrangeSide.stickers[1];
                this.greenSide.stickers[2] = tmpOrangeSide.stickers[0];

                this.redSide.stickers[2] = tmpGreenSide.stickers[0];
                this.redSide.stickers[3] = tmpGreenSide.stickers[2];

                this.blueSide.stickers[1] = tmpRedSide.stickers[3];
                this.blueSide.stickers[3] = tmpRedSide.stickers[2];
            }

            if (i === 0 && backwards) {
                this.rotsToDo += '\'';
            }

            tmpSide = structuredClone(side);
            tmpWhiteSide = structuredClone(this.whiteSide);
            tmpRedSide = structuredClone(this.redSide);
            tmpOrangeSide = structuredClone(this.orangeSide);
            tmpBlueSide = structuredClone(this.blueSide);
            tmpYellowSide = structuredClone(this.yellowSide);
            tmpGreenSide = structuredClone(this.greenSide);
        }

        if (humanMove) {
            this.reRenderCube();
        }
        return this;
    }

    /**
     * First step of solving the cube. Solves the white side of the cube.
     */
    whiteSidePocket() {
        let movingIndices = [[2, 0], [0, 1], [1, 3], [3, 2]];
        let movingWhiteIndices = [[1, 0, 2], [3, 1, 0], [2, 3, 1], [0, 2, 3]];
        let pos = null;

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

            if (pos['side'] === this.whiteSide && pos['index'] === movingWhiteIndices[i][0]) {
                // console.log('C-3');
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
                            case 1:
                                sideToTurn = this.redSide;
                                break;
                            case 2:
                                sideToTurn = this.orangeSide;
                                break;
                            case 3:
                                sideToTurn = this.blueSide;
                                break;
                        }
                        this.rotate(sideToTurn, false);
                        this.rotate(this.yellowSide, true);
                        this.rotate(sideToTurn, true);
                        flag2 = true;
                        break;
                    }

                    this.rotate(this.yellowSide, false);
                }
            }

            // ekkor már az alsó sorban lesz a megfigyelt sarokkocka, így annak pozícióját a felhelyezéshez előkészítjük
            pos = this.getStickerPosition(new Sticker('rgb(255, 255, 255)', CORNER_CUBE, new Set([this.sides[i].getMiddleColor(), this.sides[(i + 1) % 4].getMiddleColor()])));

            // két leetőség adódik, ez alapján válnak ketté z elvégzendő mozdulatok
            // a fehér matrica (egyelőre mindegy melyik oldalon) a bal alsó sarokban van, vagy pedig a jobb alsóban

            //bal sarokban
            if (pos['side'] === this.blueSide && pos['index'] === 3 || pos['side'] === this.redSide && pos['index'] === 2 || pos['side'] === this.greenSide && pos['index'] === 0 ||
                pos['side'] === this.orangeSide && pos['index'] === 1) {
                // console.log('C-7');
                while (pos['side'] !== this.sides[(4 + i - 1) % 4]) {
                    this.rotate(this.yellowSide, false);
                    pos = this.getStickerPosition(new Sticker('rgb(255, 255, 255)', CORNER_CUBE, new Set([this.sides[i].getMiddleColor(), this.sides[(i + 1) % 4].getMiddleColor()])));
                }
            }

            //jobb sarokban
            if (pos['side'] === this.blueSide && pos['index'] === 1 || pos['side'] === this.redSide && pos['index'] === 3 || pos['side'] === this.greenSide && pos['index'] === 2 ||
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
        this.showRots(this.rotsToDo, document.getElementById('state-one').getAttribute('data-bs-original-title'));
    }

    /**
     * Second step of solving the cube. Places the yellow corners of the cube.
     */
    yellowCornerPositionPocket() {
        // Lehetosegek: a) 3 helytelen van (ekkor úgy is lehet forgatni, hogy 2 legyen megfelelő helyen, de az algoritmust 1-helyes állással kell futtatni)
        //              b) nincs helytelen
        // a) pont utan mindig helyreall a sarkok elhelyezkedese (már ha jó helyen futtatjuk az algoritmust)

        let cornersToCheck = [1, 0, 2, 3]
        let rightStickerPos = 0;
        let countOfRightStickers = 0;
        let rightZero = false;
        let rightTwo = false;

        let limit = 0;

        while(countOfRightStickers !== 4) {
            limit++;
            rightStickerPos = 0;
            countOfRightStickers = 0;
            for (let i = 0; i < 4; i++) {
                if ((this.yellowSide.stickers[cornersToCheck[i]].color === YELLOW && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(this.sides[i % 4].getMiddleColor()) && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(this.sides[(i + 1) % 4].getMiddleColor())) ||
                    (this.yellowSide.stickers[cornersToCheck[i]].color === this.sides[i % 4].getMiddleColor() && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(YELLOW) && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(this.sides[(i + 1) % 4].getMiddleColor())) ||
                    (this.yellowSide.stickers[cornersToCheck[i]].color === this.sides[(i + 1) % 4].getMiddleColor() && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(YELLOW) && this.yellowSide.stickers[cornersToCheck[i]].neighbors.has(this.sides[i % 4].getMiddleColor()))) {
                    // sarokkocka megfelelő helyen van
                    countOfRightStickers++;
                    rightStickerPos = cornersToCheck[i];
                }

            }

            console.log('countOfRightStickers: ' + countOfRightStickers);

            if (limit > 15) break;

            if (countOfRightStickers === 0 && !rightZero) {
                rightZero = true;
            } else if (countOfRightStickers === 2 && !rightTwo) {
                rightTwo = true;
            } else if (countOfRightStickers === 0 || countOfRightStickers === 2 || countOfRightStickers === 3) {
                if ((countOfRightStickers === 0 && rightZero) || (countOfRightStickers === 2 && rightTwo)) {
                    this.changeYellowCornersPocket(2); // Nem lényeges, hogy hol futtatjuk, a 2 egy random beégetett érték.
                    this.changeYellowCornersPocket(2);
                }
                this.rotate(this.yellowSide, false);
            } else if (countOfRightStickers === 1) {
                switch (rightStickerPos) {
                    case 0:
                        this.changeYellowCornersPocket(2);
                        break;
                    case 1:
                        this.changeYellowCornersPocket(1);
                        break;
                    case 2:
                        this.changeYellowCornersPocket(3);
                        break;
                    case 3:
                        this.changeYellowCornersPocket(0);
                        break;
                }
            }
        }
        this.showRots(this.rotsToDo, document.getElementById('state-two').getAttribute('data-bs-original-title'));
    }

    /**
     * Third step of solving the pocket cube. Rotates the already placed yellow corner cubicles to the solved state.
     */
    yellowCornerRotationPocket() {
        let cornersToCheck = [1, 0, 2, 3]
        let entryIndex = -1;

        for (let i = 0; i < 4; i++) {
            if (this.yellowSide.stickers[cornersToCheck[i]].color !== YELLOW) {
                entryIndex = i;
                break;
            }
        }

        if (entryIndex >= 0) {
            // sarokkocka nincs megfeleloen beofrgatva
            while (!this.isYellowSideSolvedPocket()) {
                this.rotateYellowCornersPocket(entryIndex);
                if (this.yellowSide.stickers[cornersToCheck[entryIndex]].color === YELLOW) {
                    this.rotate(this.yellowSide, false);
                }

            }
        }

        this.yellowToSolve();
        this.showRots(this.rotsToDo, document.getElementById('state-three').getAttribute('data-bs-original-title'));
    }

    /**
     * Changes the yellow cubicles.
     *
     * @param sideIndex
     */
    changeYellowCornersPocket(sideIndex = 0) {
        this.rotate(this.yellowSide, false);
        this.rotate(this.sides[sideIndex % 4], false);
        this.rotate(this.yellowSide, true);
        this.rotate(this.sides[(sideIndex + 2) % 4], true);
        this.rotate(this.yellowSide, false);
        this.rotate(this.sides[sideIndex % 4], true);
        this.rotate(this.yellowSide, true);
        this.rotate(this.sides[(sideIndex + 2) % 4], false);
    }

    /**
     * Rotates the yellow cubicles.
     *
     * @param sideIndex
     */
    rotateYellowCornersPocket(sideIndex) {
        this.rotate(this.sides[sideIndex % 4], false);
        this.rotate(this.whiteSide, false);
        this.rotate(this.sides[sideIndex % 4], true);
        this.rotate(this.whiteSide, true);
    }

    /**
     * Checks if the yellow side is solved.
     *
     * @returns {boolean}
     */
    isYellowSideSolvedPocket() {
        for (let i = 0; i < 4; i++) {
            if (this.yellowSide.stickers[i].color !== this.yellowSide.getMiddleColor()) {
                return false;
            }
        }
        return true;
    }
}

/**
 * Returns the sticker index on the white side above the given yellow side index.
 *
 * @param paramPos
 * @returns {number}
 */
function getPosOnTop(paramPos) {
    if (paramPos === 0) return 2;
    if (paramPos === 1) return 3;
    if (paramPos === 2) return 0;
    if (paramPos === 3) return 1;
}
