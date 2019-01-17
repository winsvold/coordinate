import Coordinate from "./Coordinate";

class PolarCoordinate {
    public length: number;
    public angle: number;

    constructor(length: number = 0, angle: number = 0) {
        this.length = length;
        this.angle = angle;
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
        return this.getCartesianCoordinate().addCoordinate(coordinate).getPolarCoordinate();
    }

    muliplyLengthBy(scalar: number) {
        return new PolarCoordinate(this.length * scalar, this.angle);
    }

    getRelativePositionTo(coordinate: Coordinate | PolarCoordinate) {
        return this.getCartesianCoordinate().getRelativePostitionTo(coordinate).getPolarCoordinate();
    }

    withDegrees(angleDegrees: number) {
        return new PolarCoordinate(this.length, angleDegrees * Math.PI / 180);
    }

    rotateRadians(rotateRadians: number) {
        return new PolarCoordinate(this.length, this.angle + rotateRadians);
    }

    rotateDegrees(angle: number) {
        return this.rotateRadians(angle * Math.PI / 180);
    }

    addToLength(addLength: number) {
        return new PolarCoordinate(this.length + addLength, this.angle);
    }

    getCartesianCoordinate() {
        return new Coordinate(this.getX(), this.getY());
    }

    toString() {
        return `length: ${this.length.toFixed(3)} \tangle (radians): ${this.angle.toFixed(3)}`;
    }
}

export default PolarCoordinate;