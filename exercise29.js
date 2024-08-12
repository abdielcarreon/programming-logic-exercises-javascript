//Given a number, indicating if it's a capicua number or not
//The capicua numbers are interpreted the same way from left to right than right to left

/* function capicua(number) {
    let toString = number.toString();
    let result = toString.split('').reverse().join('');
    let toNumber = parseInt(result);
    console.log(toNumber);

    if(number === toNumber) {
        return true;
    } 

    return false;
}

console.log(capicua(101)); */

function capicua(number) {
    
    let result = '';
    let toString = number.toString().split('');
    console.log(toString)


    for(element of toString) {
        console.log(element);

       if(number) {
        result = element + result
        console.log(result);
       }
    }
    result =  parseInt(result); console.log(result)
    
    if(number === result) {
        return true;
    }

    return false;
}

console.log(capicua(101));