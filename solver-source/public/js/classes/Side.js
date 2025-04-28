export class Side {
    middleColor;
    stickers;
    oppositeSide;

    constructor(middleColor, stickers) {
        this.middleColor = middleColor;
        if (stickers.length === 0) {
            this.stickers = [null, null, null, null, this.middleColor, null, null, null, null];
        } else {
            this.stickers = [];
            for (let i = 0; i < stickers.length; i++) {
                this.stickers.push(stickers[i]);
            }

        }
        this.oppositeSide = null;
    }

    getMiddleColor() {
        return this.middleColor;
    }
}
