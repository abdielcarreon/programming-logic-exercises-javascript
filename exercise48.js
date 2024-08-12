//Given a string, returning back which ones are the letters that show just once and which letter is the first

function wordJustShowedOnce(words) {
    let wordsDivided = words.split("");
    let letterShowJustOnce = {};
    let result = [];
    
    console.log(wordsDivided)

    for(let letter of wordsDivided) {
       console.log(letter)
        if(!letterShowJustOnce[letter]) {
            letterShowJustOnce[letter] = 1
        } else {
            letterShowJustOnce[letter]++

        }

        console.log(letterShowJustOnce)
    }
    console.log(letterShowJustOnce)

    for(let value in letterShowJustOnce) {
        console.log(letterShowJustOnce[value])
         if(letterShowJustOnce[value] >= 2) {
            delete letterShowJustOnce[value]
         } else {
            result.push(value)
         }
    }
    
    return [result, result[0]]
    
};

console.log(wordJustShowedOnce("phrase phrase phrase tomorrow today today"));