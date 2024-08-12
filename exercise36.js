//Given a text, returning back how many consonants and how many vocals has it one

/* function seekerConsonantAndVocal(string) {
    let matchVocals = string.match(/[aeiou]/gi)
    let matchConsonants = string.match(/[bcdfghjklmnñpqrstvwxyz]/gi)

        if(matchVocals) {
            matchVocals.length
        }

        if(matchConsonants) {
            matchConsonants.length
        }
    
    return `Were founded ${matchVocals.length} vocals and ${matchConsonants.length} consonants in the text`
}
console.log(seekerConsonantAndVocal('Abdiel Carreon')) */

function seekerConsonantAndVocal(string) {
    let consonants = 0;
    let vocals = 0;
    let cleanString
    cleanString = string.split("").filter(letter => {
        if(/[áéíóú^\w]/gi.test(letter) && isNaN(letter)) {
            return letter
        }
    })
    cleanString.join("")

    for(letter of cleanString) {
        
        if(/[aeiouáéíóú]/gi.test(letter)) {
            vocals++
        } else {
            consonants++
        }
    }

    return [string, consonants, vocals]
}

const result = seekerConsonantAndVocal('Abdiel Carreon');
console.log("The text =>", result[0],"... have", result[1], "consonants and", result[2], "vocals")
