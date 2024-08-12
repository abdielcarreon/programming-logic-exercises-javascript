// Given a number, returning back how many loops has it 


function detectingBucles(number) {
    
    let arrayNumbers = number.toString().split('')
    console.log(arrayNumbers)
    let bucles = 0;
    for(number of arrayNumbers) {
        number = parseInt(number)
        
        if(number === 0 || number === 6 || number === 9) {
            bucles++;
        } else if(number === 8) {
            bucles+= 2;
        }
    }
    return bucles
}


console.log(detectingBucles(8008000096));