function timeToWalk(numberOfSteps, footprint, speedKmH) {
    //Every 500 meters the student rests and takes a 1 minute break.
    const speed = speedKmH * 1000 / 3600;
    const distance = numberOfSteps * footprint;

    const rest = Math.floor(distance / 500) * 60;
    const time = distance / speed + rest;

    const hours = Math.floor(time / 3600).toFixed(0).padStart(2, "0");
    const minutes = Math.floor(time / 60).toFixed(0).padStart(2, "0");
    const seconds = (time % 60).toFixed(0).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
}

console.log(timeToWalk(4000, 0.60, 5));
console.log(timeToWalk(2564, 0.70, 5.5));