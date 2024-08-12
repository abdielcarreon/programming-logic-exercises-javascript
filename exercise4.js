// Statement Excercise 4;
//Given a text string, turning theirs characters the other way around, not using javascripts own methods, rather control structures


function inverted(text) {

    let inverted = "";

    for(let letter of text) {
        inverted = letter + inverted;
        console.log(inverted)
    }
    return inverted
    

}

console.log("Texto invertido: ", inverted('Abdiel'));
 
function inverted2(text2) {
    const result = text2.split("").reverse().join("");
    console.log(result);
}

inverted2('Jacobo');