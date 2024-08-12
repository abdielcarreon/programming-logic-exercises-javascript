
/* function odd(number) {
    for(i = 1; i <= number; i++) {

        if(i % 2 === 0) {
            console.log(`${i} - even`);
        } else {
            console.log(`${i} - odd`);
        }
    }
}

odd(50); */


function odd(number) {
    let counter = 0;
 
    for(i = 1; i <= number; i++) {
        
        if(i % 2 !== 0) {
            counter++;
            console.log(`In the position ${counter} - there's the odd number ${i}`);
        }
    }
    return counter;
}

odd(100);