function calculateTax(income, expenses) {
    if (expenses > income || income < 0 || expenses < 0) {
        return "Invalid Input"
    }
    let difference = income - expenses;
    let taxReturn = difference * .20;
    return taxReturn;
}



function sendNotification(email) {
    if(email.includes("@") !== true){
        return "Invalid Email";
    }
    let emailParts = [];
    emailParts = email.split("@");
    let notification = emailParts[0] + " sent you an email from " + emailParts[1];
    return notification;
}



function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }
    let result = false;
    let letters = name.split("");
    for(let letter of letters){
        if(!isNaN(letter)){
           result = true;
        }
    }
    return result;
}



function calculateFinalScore(obj) {
    if (typeof obj !== "object") {
        return "Invalid Input"
    }
    let totalMarks = obj.testScore + obj.schoolGrade
    if (obj.isFFamily === true) {
        totalMarks = totalMarks + 20;
    }
    if (totalMarks >= 80) {
        return true;
    }
    else {
        return false
    }
}



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
