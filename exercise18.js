// Given a number, showing up all its the divisor numbers

function divisors(number, divisor) {

    let result;
    if(number % divisor === 0) {
         result = divisor;
    } else {
        return 0
    }
     
    return result;
}

function print(number) {

    for(let i = 1; i <= number; i++) {
        let isDivisor = divisors(number, i);
    
        if(isDivisor) {
            console.log(isDivisor);
        }
    }

}

print(20);