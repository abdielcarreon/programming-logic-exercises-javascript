//Given a numbers array, returning the array without duplicate elements
//And also detecting if ther's some string

function duplicateDetecting(array) {
    let resultArray = []
    let justNumbers = array.filter(element => {
        if(typeof element === "number") {
            return element
        }
    })
    resultObject = new Set(justNumbers);
    
    for(element of resultObject) {
        console.log(element);
        if(resultObject) {
            resultArray.push(element);
        }
    }
    return resultArray;
    
}

console.log(duplicateDetecting([1,2,3,4,5,5,5,6, 'string']));

/* function duplicateDetecting(array) {
    let result = []
    for(element of array) {
        console.log(element);
       
        if(array.includes(String(element))) {
            return result = 'There is NaN element in the array being detected';
            
        } else {
            if(!result.includes(element)) {
                result.push(element);
                console.log(result)
            } 
        }
        
        console.log(result)
    }
    return result;
}

console.log(duplicateDetecting([1,2,3,4,5,5,5,6,6,7,7,8,8])); */