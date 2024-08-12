//Given a text string, becoming on uppercase or lowercase according if there's more uppercase than lowercase or the other way around 

function toUppercaseOrToLowercase(text) {
    let result = '';
    let counterLowerCase = 0;
    let counterUpperCase = 0

    for(let letter of text) {
        console.log(letter)


        if(/[A-Z]/.test(letter)) {
             counterUpperCase++;
        } else {
            counterLowerCase++;
        }
    }

    if(counterUpperCase > counterLowerCase) {
        result = text.toUpperCase();
    } else {
        result = text.toLowerCase();
    }

   return result;
}

console.log(toUppercaseOrToLowercase('MAyusculas'));