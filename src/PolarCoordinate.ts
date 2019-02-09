import Coordinate from "./Coordinate";

class PolarCoordinate {
    public length: number;
    public angle: number;

    constructor(length: number = 0, angle: number = 0) {
        this.length = length;
        this.angle = angle;
    }

    clone() {
        return new PolarCoordinate(this.length, this.angle);
    }

    getX() {
        return this.length * Math.cos(this.angle);
    }

    getY() {
        return this.length * Math.sin(this.angle);
    }

    getDegrees() {
        return this.angle * 180 / Math.PI;
    }

    addCoordinate(coordinate: PolarCoordinate | Coordinate) {
        const newCoordinate = this.getCartesianCoordinate().addCoordinate(coordinate).getPolarCoordinate();
        this.length = newCoordinate.length;
        this.angle = newCoordinate.angle;
        return this;
    }

    muliplyLengthBy(scalar: number) {
        this.length *= scalar;
        return this;
    }

    getRelativePositionTo(coordinate: Coordinate | PolarCoordinate) {
        return this.getCartesianCoordinate().getRelativePostitionTo(coordinate);
    }

    withDegrees(angleDegrees: number) {
        this.angle = angleDegrees * Math.PI / 180;
        return this;
    }

    withRadians(angleRadians: number) {
        this.angle = angleRadians;
        return this;
    }

    withLength(length: number) {
        this.length = length;
        return this;
    }

    rotateRadians(rotateRadians: number) {
        this.angle += rotateRadians;
        return this;
    }

    rotateDegrees(angle: number) {
        return this.rotateRadians(angle * Math.PI / 180);
    }

    addToLength(addLength: number) {
        this.length += addLength;
        return this;
    }

    getCartesianCoordinate() {
        return new Coordinate(this.getX(), this.getY());
    }

    toString() {
        return `length: ${this.length.toFixed(3)} \tangle (radians): ${this.angle.toFixed(3)}`;
    }
}

export default PolarCoordinate;