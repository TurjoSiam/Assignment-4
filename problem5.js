function waitingTime(waitingTimes, serialNumber) {
    if(Array.isArray(waitingTimes) !== true || typeof serialNumber !== "number"){
        return "Invalid Input"
    }
    let totalTime = 0;
    for (let time of waitingTimes) {
        totalTime = time + totalTime;
    }
    let avgTime = totalTime / waitingTimes.length;
    let remainingSerial = (serialNumber - 1) - waitingTimes.length;
    let requiredTime = Math.round(avgTime) * remainingSerial;
    return requiredTime;
}
