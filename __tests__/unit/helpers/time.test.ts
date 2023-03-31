import { msToTime, secondsToTime, timeFormat } from './../../../src';

describe('"time" helpers', () => {
  test('timeFormat - Check is correct format', () => {
    expect(timeFormat({
        min: 10, seconds: 50
    })).toBe('00:10:50');
  });

  test('secondsToTime', () => {
    expect(secondsToTime(20)).toEqual({
        hours: 0,
        min: 0,
        seconds: 20,
        ms: 0,
      })
  });

  test('msToTime', () => {
    expect(msToTime(20222)).toEqual({
        hours: 0,
        min: 0,
        seconds: 20,
        ms: 2,
      })
  })
});
