//Given a text string, trimming the string and show the first characters according to number indicated



function trim(text, number) {
    let result = '';

    if(text === '') {
         return result = 'We are very sorry, the text is empty';
    } else if(!isNaN(text)) {
        return result = 'The argument "text" its a number';
    } else if(isNaN(number) || number === '') {
         return result = 'The argument "number" its not a number or needs be specified';
    } 
    // Or substr() instead of slice()
    return result = text.slice(0, number).trim();
}

console.log(trim('Abdiel Carreon', ''))