// Statement Excercise 2;
//Given a text string, evaluating if it's a palindrome or not
// One palindrome its a word that is reading the same way both left to right and the other way around

palindrome("otto");

function palindrome(name) {
   
    let inverted = name.split("") // What is inside the parentheses on split method point it out the gap
                        .reverse() 
                        .join(""); // Don't forgetting that inside the parentheses have to declare the quote-unquote and here could go the separator especified
    
    console.log(inverted);
    

    if(inverted === name) {
        console.log('The Palindrome have the same value than "let invertido"');
    } else {
        console.log('Not');

    }
    
}