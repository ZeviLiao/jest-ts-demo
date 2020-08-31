import zjson from '../z-test';

test('z json file', () => {
  let expected: any = {
    'a':1
  };

  // Act
  let actual: any = zjson();

  // Assert
  expect(actual).toEqual(expected);
});