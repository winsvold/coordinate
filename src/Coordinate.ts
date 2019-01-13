class Coordinate {
    public x: number;
    public y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    getLength() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }

    getRadians() {
        return Math.atan2(this.y, this.x);
    }

    getDegrees() {
        return this.getRadians() * 180 / Math.PI;
    }

    addCoordinate(coordinate: Coordinate){
        return new Coordinate(this.x + coordinate.x, this.y + coordinate.y);
    }

    multiplyLengthBy(scalar: number){
        return new Coordinate(this.x * scalar, this.y * scalar);
    }

    getRelativePostitionToCoordinate(coordinate: Coordinate){
        return new Coordinate(coordinate.x - this.x,coordinate.y - this.y);
    }

    withLength(newLength: number) {
        const ratio = newLength / this.getLength();
        return new Coordinate(this.x * ratio, this.y * ratio);
    }

    withRadians(newAngle: number) {
        const length = this.getLength();
        return new Coordinate(length * Math.cos(newAngle),length * Math.sin(newAngle));
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

    toString() {
        return `x: ${this.x.toFixed(3)} \ty: ${this.y.toFixed(3)}`;
    }
}

export default Coordinate;
