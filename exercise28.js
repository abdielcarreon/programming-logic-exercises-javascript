//Given a number, returnint their factorial, ergo, the multiplier of all their numbers until to get to the number indicated

function factorial(number) {
    let counter = 0;
    let result = 1;
    for(i = 1; i <= number; i++) {
        counter++;
        result *= counter;
    }
    return result;   
}

console.log("The 5's factorial number it's...", factorial(5));