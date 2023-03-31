import { convertSecondsToTimePaceFormat, timeFormat } from './../../../src';

describe('"min/km" pace', () => {
  test('Without use timeFormat', () => {
    expect(convertSecondsToTimePaceFormat(240)).toEqual({
        min: 4, seconds: 0
    });
  });

  xtest('Use timeFormat', () => {
    expect(timeFormat(convertSecondsToTimePaceFormat(240))).toBe('00:04:00');
  });

  

  
});