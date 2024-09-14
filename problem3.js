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
