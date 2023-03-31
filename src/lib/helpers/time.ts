import { ITime } from "../models/time";

/**
 * 
 * @param time: data with contain fundamental data to format time show 
 * @returns HH:MM:SS.MS . For example: 00:14:25.345
 */
export const timeFormat = ({ hours, min, seconds, ms }: ITime) => {
  return (hours || 0).toString().padStart(2, '0') + ':'
    + (min).toString().padStart(2, '0') + ':'
    + seconds.toString().padStart(2, '0') +
    (ms ? '.' + ms : '');
}

export const msToTime = (duration: number): ITime => {
  const milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  console.log(timeFormat({ hours, min: minutes, seconds, ms: milliseconds }));
  return {
    hours,
    min: minutes,
    seconds,
    ms: milliseconds,
  };
};

export const secondsToTime = (seconds: number) => msToTime(seconds * 1000);

