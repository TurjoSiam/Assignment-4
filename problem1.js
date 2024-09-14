function calculateTax(income, expenses) {
    if (expenses > income || income < 0 || expenses < 0) {
        return "Invalid Input"
    }
    let difference = income - expenses;
    let taxReturn = difference * .20;
    return taxReturn;
}
