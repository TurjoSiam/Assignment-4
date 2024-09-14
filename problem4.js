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
