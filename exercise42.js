//Given two numbers, showing aleatory a number between them  

function aleatoryNumber(num1, num2) {
    let result;

    if(num1 === num2) {
        return result = `The numbers cannot haven't the same value, try again with others values`;
    } else if(num1 < num2) {
        return result = Math.ceil(Math.random() * num2);
    } else if(num1 > num2) {
        return result = Math.ceil(Math.random() * num1);
    }

    return result = `The aleatory number is ${result}`
}

console.log(aleatoryNumber(1, 100));