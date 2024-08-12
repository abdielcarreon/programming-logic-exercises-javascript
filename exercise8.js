// Given a entire number, upside it down and return a entire number again


 function inverted(number) {
    let numberString = number.toString();
    console.log(typeof numberString);
    let inverted = parseInt(numberString.split('').reverse().join('')) * Math.sign(number);
    console.log(typeof inverted);

    return inverted;
 }

 console.log(inverted(-16));

