import Coordinate from "./Coordinate";

test('Creating a new coordinate returns an object with the y and x position submitted', () => {
    const result = new Coordinate(1, 2);

    expect(result.x).toEqual(1);
    expect(result.y).toEqual(2);
});

test('Calling getLength() returns the length of the coordinate', () => {
    const result = new Coordinate(1, 2).getLength();

    expect(result.toFixed(2)).toEqual('2.24');
});

test('Calling getRadians() returns the angle of the coordinate in radians', () => {
    let result = new Coordinate(1, 0).getRadians();
    expect(result.toFixed(2)).toEqual('0.00');

    result = new Coordinate(0, 1).getRadians();
    expect(result.toFixed(2)).toEqual('1.57');

    result = new Coordinate(1, 1).getRadians();
    expect(result.toFixed(2)).toEqual('0.79');

    result = new Coordinate(-1, 0).getRadians();
    expect(result.toFixed(2)).toEqual('3.14');

    result = new Coordinate(0, -1).getRadians();
    expect(result.toFixed(2)).toEqual('-1.57');
});

test('getDegrees() returns angle in degrees', () => {
   const result = new Coordinate(0, 1).getDegrees();

   expect(result).toEqual(90);
});

test('addCoordinate() adds a coordinate', () => {
    const result = new Coordinate(1, 1).addCoordinate(new Coordinate(1, 1));

    expect(result).toEqual(new Coordinate(2, 2));
});

test('multiply by scalar multiplies coordinate by scalar', () => {
    const result = new Coordinate(1, 1).multiplyLengthBy(3);

    expect(result).toEqual(new Coordinate(3, 3));
});

test('getRelativePositionToCoordinate returns relative position to another coordinate', () => {
   const result = new Coordinate(2, 2).getRelativePostitionTo(new Coordinate(0, 0));

   expect(result).toEqual(new Coordinate(-2, -2));
});

test('withLength returns new Coordinate with supplied length and same angle', () => {
    const coordinate = new Coordinate(-1, -1);
    const result = coordinate.withLength(4);

    expect(result.getLength().toFixed(2)).toEqual('4.00');
    expect(result.getRadians()).toEqual(result.getRadians());
});

test('withRadians() returns new Coordinate with supplied angle and same length', () => {
    const coordinate = new Coordinate(2, 0);

    let result = coordinate.withRadians(Math.PI);
    expect(coordinate.getLength()).toEqual(result.getLength());
    expect(result.x.toFixed(2)).toEqual( '-2.00');
    expect(result.y.toFixed(2)).toEqual( '0.00');

    result = coordinate.withRadians(Math.PI * 8);
    expect(coordinate.getLength()).toEqual(result.getLength());
    expect(result.x.toFixed(2)).toEqual( '2.00');
    expect(result.y.toFixed(2)).toEqual( '-0.00');

    result = coordinate.withRadians(-Math.PI * 9);
    expect(coordinate.getLength()).toEqual(result.getLength());
    expect(result.x.toFixed(2)).toEqual( '-2.00');
    expect(result.y.toFixed(2)).toEqual( '-0.00');
});

test('withDegrees returns new Coordinate with supplied angle and same length', () => {
   const coordinate = new Coordinate(-2, -2);
   const result = coordinate.withDegrees(180);

   expect(result.getRadians()).toEqual(Math.PI);
   expect(result.getLength()).toEqual(coordinate.getLength());
});

test('rotateRadians() rotates coordinate by supplied angle', () => {
    const result = new Coordinate(0, 1).rotateRadians(Math.PI);

    expect(result.x.toFixed(2)).toEqual('-0.00');
    expect(result.y.toFixed(2)).toEqual('-1.00');
});

test('rotateDegrees() rotates coordinate by supplied angle', () => {
    const result = new Coordinate(0, 1).rotateDegrees(90);

    expect(result.x.toFixed(2)).toEqual('-1.00');
    expect(result.y.toFixed(2)).toEqual('0.00');
});

test('addToLength() adds supplied argument to length', () => {
    const coordinate = new Coordinate(1, 0);
    const result = coordinate.addToLength(2);

    expect(result).toEqual(new Coordinate(3, 0));
});

test('getPolarCoordinate() returns polar coordinate', () => {
    const polar = new Coordinate(2, 2).getPolarCoordinate();

    expect(polar.length.toFixed(2)).toEqual('2.83');
    expect(polar.angle.toFixed(2)).toEqual('0.79');
    expect(polar.getX().toFixed(2)).toEqual('2.00');
    expect(polar.getY().toFixed(2)).toEqual('2.00');
});

test('clone() returns new coordinate with same parameters', () => {
    const coordinate = new Coordinate(2, 2);

    const clone = coordinate.clone();

    expect(clone).not.toBe(coordinate);
    expect(clone).toEqual(coordinate);
});
