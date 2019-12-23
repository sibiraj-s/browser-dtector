import utils from '../lib/utils';

it('should return fixed value with two decimals', () => {
  expect(utils.toFixed(1.1111, 2)).toBe('1.11');
  expect(typeof utils.toFixed(1.1111, 2)).toBe('string');
  expect(utils.toFixed(1.100, 2)).toBe('1.1');
  expect(utils.toFixed(1.00, 2)).toBe('1');
  expect(utils.toFixed(1.000)).toBe('1');
});
