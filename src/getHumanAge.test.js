'use strict';

describe('getHumanAge', () => {
  const { getHumanAge } = require('./getHumanAge');

  test('should be declared', () => {
    expect(getHumanAge)
      .toBeInstanceOf(Function);
  });

  test('should return zeroes if age of animals are zeroes', () => {
    expect(getHumanAge(0, 0))
      .toEqual([0, 0]);
  });

  test('should return zeroes if age of animals are 14', () => {
    expect(getHumanAge(14, 14))
      .toEqual([0, 0]);
  });

  test('should return ones if age of animals are 15', () => {
    expect(getHumanAge(15, 15))
      .toEqual([1, 1]);
  });

  test('should return ones if age of animals are 23', () => {
    expect(getHumanAge(23, 23))
      .toEqual([1, 1]);
  });

  test('should return ones if age of animals are 24', () => {
    expect(getHumanAge(24, 24))
      .toEqual([2, 2]);
  });

  test('should return ones if age of animals are 27', () => {
    expect(getHumanAge(27, 27))
      .toEqual([2, 2]);
  });

  test('should return 3 and 2 if age of animals are 28', () => {
    expect(getHumanAge(28, 28))
      .toEqual([3, 2]);
  });

  test('should return 21 and 17 if age of animals are 100', () => {
    expect(getHumanAge(100, 100))
      .toEqual([21, 17]);
  });
});
