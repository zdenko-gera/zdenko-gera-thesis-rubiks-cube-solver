export class Sticker {
    color = null;
    neighbors;
    type;
    side;
    // 0 - MIDDLE_CUBE
    // 1 - EDGE_CUBE
    // 2 - CORNER_CUBE
    static get WHITE() { return 'rgb(255, 255, 255)'; }
    static get BLUE() { return 'rgb(162, 191, 254)'; }
    static get RED() { return 'rgb(219, 88, 86)'; }
    static get GREEN() { return 'rgb(134, 213, 134)'; }
    static get ORANGE() { return 'rgb(255, 150, 65)'; }
    static get YELLOW() { return 'rgb(255, 255, 153)'; }

    constructor(color, type = 3, neighbors = new Set([])) {
        this.color = color;
        this.neighbors = neighbors;
        this.type = type;
        this.side = null;
    }

    getColor() {
        return this.color;
    }
}
