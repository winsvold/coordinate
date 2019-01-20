import PolarCoordinate from "./PolarCoordinate";

class Coordinate {
    public x: number;
    public y: number;

    constructor(x: number | Coordinate = 0, y: number = 0) {
        if (x instanceof Coordinate) {
            this.x = x.x;
            this.y = x.y;
        } else {
            this.x = x;
            this.y = y;
        }
    }

    getLength() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    getRadians() {
        return Math.atan2(this.y, this.x);
    }

    getDegrees() {
        return this.getRadians() * 180 / Math.PI;
    }

    addCoordinate(coordinate: Coordinate | PolarCoordinate): Coordinate {
        if (coordinate instanceof PolarCoordinate) {
            return this.addCoordinate(coordinate.getCartesianCoordinate());
        }
        this.x += coordinate.x;
        this.y += coordinate.y;
        return this;
    }

    multiplyLengthBy(scalar: number) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    getRelativePostitionTo(coordinate: Coordinate | PolarCoordinate): Coordinate {
        if (coordinate instanceof PolarCoordinate) {
            return this.getRelativePostitionTo(coordinate.getCartesianCoordinate());
        }
        return new Coordinate(coordinate.x - this.x, coordinate.y - this.y);
    }

    withLength(newLength: number) {
        const ratio = newLength / this.getLength();
        this.x *= ratio;
        this.y *= ratio;
        return this;
    }

    withRadians(newAngle: number) {
        const length = this.getLength();
        this.x = length * Math.cos(newAngle);
        this.y = length * Math.sin(newAngle);
        return this;
    }

    withDegrees(newAngleDegrees: number) {
        return this.withRadians(newAngleDegrees * Math.PI / 180);
    }

    rotateRadians(angle: number) {
        return this.withRadians(this.getRadians() + angle);
    }

    rotateDegrees(angle: number) {
        return this.rotateRadians(angle * Math.PI / 180);
    }

    addToLength(addLength: number) {
        return this.withLength(this.getLength() + addLength);
    }

    getPolarCoordinate() {
        return new PolarCoordinate(this.getLength(), this.getRadians());
    }

    toString() {
        return `x: ${this.x.toFixed(3)} \ty: ${this.y.toFixed(3)}`;
    }
}

export default Coordinate;
