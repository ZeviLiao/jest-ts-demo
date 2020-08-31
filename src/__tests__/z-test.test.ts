import zjson from '../z-test';

type ajson = {
  a: Number
}

test('z json file', () => {
  let expected: ajson = {
    'a': 1
  };

  // Act
  let actual: ajson = zjson();

  // Assert
  expect(actual).toEqual(expected);
});