export class Side {
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
