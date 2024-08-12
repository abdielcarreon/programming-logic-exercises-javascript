// Given a number, showing up a list of the squares every number until get the specified number that has been placed like argument

/* function squares(numbers) {

    let result = []
    for(let i = 1; i <= number; i++) {
        console.log(i);
        result.push(i)
    }
    return result
}

function result(number) {
    let result = []
    for(let value of squares(number)) {
        result.push(Math.pow(value, 2))
    }
    return result;
}

console.log(result(5)) */

function squares(number) {

       return number * number;
}


function showingSquares(number) {
    let result = [];

    for(i = 0; i <= number; i++) {
        console.log(result.push(squares(i)))
    }
    return result

}

console.log(showingSquares(5));