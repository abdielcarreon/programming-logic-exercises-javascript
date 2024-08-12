// Statement Excercise 3;
//Given a word, seeking it on a phrase and return it the times show up in the phrase
// The phrase and word must to be funtion's parameters

function seeker(phrase, word) {

    let textClean = phrase.toLowerCase().replace(/[¡!¿?.-]/gi, '');
    console.log(textClean)
    let counter = 0;

    if(textClean.includes(word)) {
        let textDivided = textClean.split(" ");
         let map = {};

        for(let word of textDivided) {

            if(map[word]) {
                map[word]++;
            } 
        
            else {
                map[word] = 1;
                console.log(map[word])
            }
        }

        counter = map[word];
        console.log(counter)

        console.log(textDivided);
        console.log(map)
    } else {
        counter = 0;
    }
     return counter
}

console.log( "Número de coincidencias en la frase:",
    seeker("hola que tal soy Abdiel abdiel hola aprendiendo logica abdiel abdiel", "que")
);
