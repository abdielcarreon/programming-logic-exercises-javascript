//Given a text string, returning the item more used 

function itemRepeater(text) {

    let textModified = text.replace(/[¡!,.-]/gi, '');
    let letterMap = [];
    let repsMax = 0;
    repeaterLetter = '';

    for(letter of textModified) {
        console.log(letter)
        if(!letterMap[letter]) {
            letterMap[letter] = 1;
            console.log(letterMap[letter])

        } else {
            letterMap[letter]++;
            console.log(letterMap[letter])

        }
    }
    console.log(letterMap);

    for(letter in letterMap) {

        if(letterMap[letter].toString().trim().length === 1 && letterMap[letter] > repsMax) {
            repsMax = letterMap[letter];
            repeaterLetter = letter;
        }

    }

    return repeaterLetter
    
}

console.log("The repeater letter is:", itemRepeater('Mi!    nombre es Abdiel, estudio una especialidad, programing'));