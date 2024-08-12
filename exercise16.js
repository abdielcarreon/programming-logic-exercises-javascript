//Given a text string, returning how many vowels has it


/* function vowels(text) {
    const vowelsArray = ['a', 'e','i','o','u'];
    let map = [];
    let counter = 0;
    let textToLowerCase = text.toLowerCase();

    for(letter of textToLowerCase) {
       if(vowelsArray.includes(letter)) {
        map.push(letter);
        counter++;
        console.log(map)
       }
    }
     return "The text contain " + counter + ":" + " vowels";
}

console.log(vowels('victorROBLESweb.es')); */


function vowels(text) {
    let matches = text.match(/[aeiou]/gi);

    return matches ? matches.length : 0

}

console.log("The many times to shows up the vowels are:", vowels('victrRBLSwb.s'));