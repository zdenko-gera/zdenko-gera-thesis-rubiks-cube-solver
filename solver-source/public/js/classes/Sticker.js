export class Sticker {
    color = null;
    neighbors;
    type;     // 0 - MIDDLE_CUBE, 1 - EDGE_CUBE, 2 - CORNER_CUBE
    side;

    constructor(color, type = 3, neighbors = new Set([])) {
        this.color = color;
        this.neighbors = neighbors;
        this.type = type;
    }

    getColor() {
        return this.color;
    }
}
