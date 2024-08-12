//Given a string, returning back all susbstrings possible

function allSubstringsPossible(word) {

    let substrings = [];

    for(let letter in word) {
        let starting = parseInt(letter)
        console.log(starting)

        for(let i = 1; i <= word.length - starting; i++) {
            let ending = starting + i;
            console.log(ending)
            substrings.push(word.substring(starting, ending))
        }
    }
    return substrings.filter(element => element.length >= 1);
}

console.log(allSubstringsPossible('Word'));