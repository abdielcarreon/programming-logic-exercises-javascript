//Given a numbers array, getting the average of all them
/* 
function average(array) {
    let arrayLength = array.length
    console.log(arrayLength)
    let result = 0;

    for(number of array) {
        result += number / array.length;
    }

    return result;
    
}

console.log(average([1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 98])); */


function average(array) {

    let average = array.reduce((accumulator, number) => {
        return accumulator + number
    }, 0)
    
    return average / array.length;
}

console.log(average([1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 98]));