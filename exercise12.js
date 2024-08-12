// Given a number, showing all the numbers from parameter number to 0

/* function fromNumbertoCero(number) {

    for(i = 100; i >= number - number; i--) {
    
        if(i % 8 === 0) {
            console.log(i);
        } else if(i % 100 === 0) {
            console.log(i);
        }
      
    }
}

fromNumbertoCero(100); */

function fromNumbertoCero(number) {
    
    let result ='';

    while(number > 0) {
        result += `${number}\n`;
        number -= 8;
        console.log(result);

    }
}

console.log(fromNumbertoCero(100));

