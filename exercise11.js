//Given a text, looking for a censured word 

function seeker(text ='', word = '') {

    let result;
    let textCleaned = text.toLowerCase().replace(/[¡!,.-]/gi, ' '); 
    console.log(textCleaned);
    

    if(textCleaned === '' || word === '' || !isNaN(textCleaned) || !isNaN(word)){
        console.log("No se puede identificar el texto o la palabra a buscar");
        return;

    } else {
        result = textCleaned.replace(new RegExp(word, 'gi'), "[-CENSURADO]-");
    }

    return result;
}

console.log(seeker('censurado censurado, NOT', 'NOt'));