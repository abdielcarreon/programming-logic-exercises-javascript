// Given an  integer array and one number, detecting if that list its a permutation from 1 to number specified

/* function permutation(array, number) {

    if(number === array.length) {
        console.log('true')
    } else {
        console.log('false')
    }
}

permutation([1, 2, 3, 4, 5], 5); */


function permutation(arrayNumbers, verifier) {
    
    for(let i = 1; i < verifier; i++) {
        

        if(arrayNumbers.indexOf(i + 1) < 0) {
           return false;
        } 
        
    }
    return true
}

console.log(permutation([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));