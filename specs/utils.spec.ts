import { expect, it } from '@jest/globals';

import utils from '../lib/utils';

it('should return fixed value with two decimals', () => {
  expect(utils.toFixed(1.1111, 2)).toBe('1.11');
  expect(typeof utils.toFixed(1.1111, 2)).toBe('string');
  expect(utils.toFixed(1.100, 2)).toBe('1.1');
  expect(utils.toFixed(1.00, 2)).toBe('1');
  expect(utils.toFixed(1.000)).toBe('1');
  expect(utils.toFixed(0)).toBe('0');
  expect(utils.toFixed(0.00000, 2)).toBe('0');

  expect(utils.toFixed('1')).toBe('1');
  expect(utils.toFixed('1.100', 2)).toBe('1.1');
  expect(utils.toFixed('1.00', 2)).toBe('1');
  expect(utils.toFixed('1.000', 2)).toBe('1');
  expect(utils.toFixed('undefined')).toBe(null);
  expect(utils.toFixed('')).toBe('0');
  expect(utils.toFixed('0')).toBe('0');
});
