//Given an array. creating another one just with the first and the last original element

const numbers = [200, 200, 300, 400, 500, 600, 700, 800];

/* function firstAndLastElement(array) {
    let result = [];
    let firstElement = array.slice(0, 1).toString()
    firstElement = parseInt(firstElement)
    let lastElement;

    for(element of array) {
        lastElement = element
    }
    
    result.push(firstElement)
    result.push(lastElement)
    return result
}

console.log(firstAndLastElement(numbers))  */

function firstAndLastElement(array) {
    let result = [];
    
    result.push(array[0], array[array.length - 1])
    return result
}

console.log(firstAndLastElement(numbers)) 

