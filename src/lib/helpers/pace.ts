export function convertSecondsToTimePaceFormat(seconds: number) {
    const paceMins = Math.floor(seconds % 60);
    const paceSeconds = Math.round((seconds - paceMins) * 60);
    return {
        min: paceMins,
        seconds: paceSeconds,
    };
}