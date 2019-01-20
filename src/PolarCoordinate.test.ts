import PolarCoordinate from "./PolarCoordinate";
import Coordinate from "./Coordinate";

test('creating a polar coordinate returns object with length and angle', () => {
   const result = new PolarCoordinate(1, Math.PI);

   expect(result.length).toEqual(1);
   expect(result.angle).toEqual(Math.PI);
});

test('calling getX() returns x-position of polar coordinate', () => {
    let result = new PolarCoordinate(1, 0);
    expect(result.getX()).toEqual(1);

    result = new PolarCoordinate(2, Math.PI);
    expect(result.getX()).toEqual(-2);
});

test('calling getX() returns x-position of polar coordinate', () => {
    let result = new PolarCoordinate(1, 0);
    expect(result.getY()).toEqual(0);

    result = new PolarCoordinate(2, Math.PI / 2);
    expect(result.getY()).toEqual(2);
});

test('getDegrees() returns angle in degrees', () => {
    let result = new PolarCoordinate(2, Math.PI).getDegrees();
    expect(result).toEqual(180);

    /* How should this be handled ?
    result = new PolarCoordinate(2, Math.PI * 3).getDegrees();
    expect(result).toEqual(180);
    */
});

test('addCoordinate() adds two coordinates', () => {
    let result = new PolarCoordinate(1, 0).addCoordinate(new PolarCoordinate(1, 0));
    expect(result).toEqual(new PolarCoordinate(2, 0));

    result = new PolarCoordinate(1, 0).addCoordinate(new Coordinate(-3, 0));
    expect(result).toEqual(new PolarCoordinate(2, Math.PI));
});

test('multiplyLengthBy() multiplies length by supplied argument', () => {
    const result = new PolarCoordinate(2, Math.PI / 4).muliplyLengthBy(4);

    expect(result).toEqual(new PolarCoordinate(8, Math.PI / 4));
});

test('getRelativePositionTo() returns relative position to supplied coordinate', () => {
    const result = new PolarCoordinate(1, 0).getRelativePositionTo(new PolarCoordinate(3, 0));

    expect(result).toEqual(new Coordinate(2, 0));
});

test('withDegrees() returns polar coordinate with angle supplied in degrees', () => {
    const result = new PolarCoordinate(0, 0).withDegrees(180);

    expect(result.angle).toEqual(Math.PI);
});

test('rotateDegrees() rotates coordinate by angle supplied in degrees', () => {
    const result = new PolarCoordinate(1, Math.PI / 2).rotateDegrees(-90);

    expect(result).toEqual(new PolarCoordinate(1, 0));
});

test('addToLength() adds supplied length to coordinate', () => {
    const result = new PolarCoordinate(2, 0).addToLength(2);

    expect(result).toEqual(new PolarCoordinate(4, 0));
});
