//Given two numbers, indicating which one its bigger 

function comparator(number1, number2) {
    let result = '';
    if(number1 < number2) {
         result = `The bigger number its ${number2} and ${number1} its the smaller`
    } else if(number1 === number2) {
         result = `The numbers are the same`
    } else if(number1 > number2) {
         result = `The smaller number its ${number2} and ${number1} its the bigger`
    }

    return result
    
}

console.log(comparator(15, 10));