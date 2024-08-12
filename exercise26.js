//Given a number showing up the fibonacci serie
//The fibonacci serie it's a numbers order where every number is the sum last and before last one

function fibonacci(number) {
    let serie = [0, 1];
    for(i = 2; i <= number; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    
    return [serie, serie[number]]
}

console.log('The whole Fibonacci Serie',fibonacci(10)[0]);
console.log('Fibonacci Serie Result', fibonacci(10)[1]);