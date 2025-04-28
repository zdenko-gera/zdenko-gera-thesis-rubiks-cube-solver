export class Cube {
    rotsToDo;
    rotsDone;
    rotsCount;

    constructor() {
        this.rotsToDo = '';
        this.rotsDone = '';
        this.rotsCount = 0;
    }

    reRenderCube() {
        throw new Error("Class extending Cube must override reRenderCube.")
    }

    isSolved() {
        throw new Error("Class extending Cube must override isSolved.")
    }

    cornerRotationCheck() {
        throw new Error("Class extending Cube must override cornerRotationCheck.")
    }

    isSolvable() {
        throw new Error("Class extending Cube must override isSolvable.")
    }

    rotate() {
        throw new Error("Class extending Cube must override rotate.")
    }

    getStickerPosition() {
        throw new Error("Class extending Cube must override getStickerPosition.")
    }

    mixCube() {
        throw new Error("Class extending Cube must override mixCube.")
    }

    showRots() {
        throw new Error("Class extending Cube must override showRots.")
    }
}
