// Given a both string and number, repeating the string as long as according the number 

function repeat(text, repeatTimes) {
    let result ='';
    for(i = 0; i <= repeatTimes - 1; i++) {
        result += `${text}\n`;

    }

    return result;

}

console.log(repeat('Repetición', 8));


//Prototype Function (this)
String.prototype.repeat = function(repeatTimes) {

    let result ='';
    for(i = 0; i <= repeatTimes - 1; i++) {
        result += `${this}\n`;

    }

    return result;

}

console.log(repeat('Repetition2', 8));
