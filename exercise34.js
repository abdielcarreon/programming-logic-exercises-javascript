//Given two numbers, returning back the basics operations among them (sum, subtraction, multiplication, division)

function operations(num1, num2) {
    let sum = num1 + num2;
    let substraction = num1 - num2;
    let multiplication = num1 * num2;
    let division = num1 / num2;

     return `
     The sum is ${sum}\n
     The substraction is ${substraction}\n
     The multiplication is ${multiplication}\n
     The division is ${division}\n
     `
}

console.log(operations(5, 5)); 


/* class Operation {
    constructructor() {
        this.sum = sum;    
        this.substraction = substraction;    
        this.multiplication = multiplication;    
        this.division = division;    
    }

    sum(num1, num2) {
        return this.sum = num1 + num2 
    }
    substraction(num1, num2) {
        return this.substraction = num1 - num2 
    }
    multiplication(num1, num2) {
        return this.multiplication = num1 * num2 
    }
    division(num1, num2) {
        return this.division = num1 / num2 
    }
}

const operation = new Operation(5, 5)
console.log(operation.sum(5,5), 
operation.substraction(5,5),
operation.multiplication(5,5), 
operation.division(5,5)); */
