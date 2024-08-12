//Given a number array, returning the array with their squared numbers 

/* function squared(array) {
    let counter;
    let result = [];
    let justNumbers = array.filter(element => {
        if(typeof element === "number") {
            return element;
        }
    });

    console.log(justNumbers);
    

    for(element of justNumbers) {
        counter = element;
        counter *= element
        
        console.log(counter);
        
        result.push(counter)
        result;
    
        console.log(result)
    }

    return result;
}

console.log(squared([5, 4, 9, ''])); */

function squared(array) {
    
    let result;
    let justNumbers = array.filter(element => {
        if(typeof element === "number") {
            return element;
        }
    });

    console.log(justNumbers);
    
    result = justNumbers.map(x => {
        if(x) {
            return Math.pow(x, 2);
        }
    })

    return result;
}

console.log(squared([10, 7, 6, '']));