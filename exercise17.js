//Given a number, showing up the numbers from 1 to number
//But for three's multiples print "buzz" instead of the number
//And for the five's multiples print "lightyear".
//And for three's and five's multiples print "BuzzLightYear"

/* function print(number) {
    
    logic(number);
}

function logic(number) {

    let result = '';

    for(i = 1; i <= number; i++) {
        if(i % 5 === 0 && i % 3 === 0) {
            result = `${i} - FizzBuzz`;
        } 
        else if(i % 3 === 0) {
            result = `${i} - Buzz`;
    
        } else if(i % 5 === 0) {
            result = `${i} - Fizz`;
        } else {
            result = `${i} - NOT`;
        }

        console.log(result);
    } 
    
     console.log(result);
}

print(100); */

function logic(number) {
    let result = '';

    if(number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if(number % 3 === 0 ) {
        result = "Buzz";
    } else if(number % 5 === 0) {
        result = "Fizz"
    } else {
        return number;
    }
    console.log(number)
    console.log(result)
    return result;
}

console.log(logic(15));

function print(number) {
    for(i = 1; i <= number; i++) {
        console.log(logic(i));
    }
}
print(15);