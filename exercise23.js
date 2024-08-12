//Given a string text, becoming to uppercase the first every words letter and return the result

function capitalize(string) {
    let result = ''
    let stringCapitalized = string.split(' ')                    

    for(element of stringCapitalized) {
        let firstWordCapitalized = element.substr(0, 1).toUpperCase();
        let remanent = element.substr(1)
        result +=  firstWordCapitalized + remanent + " ";
    }
   return result.trimEnd();
}

console.log(capitalize('she got her academic doctorate academic degree in the year two thousand twenty two'));