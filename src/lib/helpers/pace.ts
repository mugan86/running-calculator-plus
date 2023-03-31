export function convertSecondsToTimePaceFormat(seconds: number) {
    return {
        min: Math.floor(seconds / 60),
        seconds: Math.round((seconds % 60)),
    };
}