//Given an array numbers, returning back one new array with even and odd numbers inside to him

/* function evenAndOddNumbers(numbers) {
let resultEven = [];
let resultOdd = [];


    for(number of numbers) {
        number = parseInt(number);

        if(number % 2 === 0) {
            resultEven.push(number)
        } else {
            resultOdd.push(number)
        }
    }

    return `{
        Even numbers : ${resultEven},
        Odd numbers: : ${resultOdd}
        
    }`
}      

console.log(evenAndOddNumbers([1,2,3,4,5,6,7,8,9,10])); */

function evenAndOddNumbers(numbers) { 
    
    return {
        even: numbers.filter(num => num % 2 === 0),
        odd: numbers.filter(num => num % 2 !== 0)
    }
         
}  
console.log(evenAndOddNumbers([1,2,3,4,5,6,7,8,9,10, 800, 850]));


