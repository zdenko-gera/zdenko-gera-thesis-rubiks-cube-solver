import { Sticker } from './Sticker.js';

export class Side {
    #middleColor;
    stickers;
    oppositeSide;

    constructor(middleColor, stickers) {
        this.#middleColor = middleColor;
        if (stickers.length === 0) {
            this.stickers = [null, null, null, null, this.#middleColor, null, null, null, null];
        } else {
            this.stickers = [];
            for (let i = 0; i < stickers.length; i++) {
                this.stickers.push(stickers[i]);
            }

        }
        this.oppositeSide = null;
    }

    getMiddleColor() {
        return this.#middleColor;
    }

    deepCopy() {
        let newSide = new Side(this.getMiddleColor(),
            new Sticker(this.stickers[0].getColor(), 2, new Set([])),
            new Sticker(this.stickers[1].getColor(), 1, new Set([])),
            new Sticker(this.stickers[2].getColor(), 2, new Set([])),
            new Sticker(this.stickers[3].getColor(), 1, new Set([])),
            new Sticker(this.stickers[4].getColor(), 0, new Set([])),
            new Sticker(this.stickers[5].getColor(), 1, new Set([])),
            new Sticker(this.stickers[6].getColor(), 2, new Set([])),
            new Sticker(this.stickers[7].getColor(), 1, new Set([])),
            new Sticker(this.stickers[8].getColor(), 2, new Set()));

        return newSide;
    }
}
