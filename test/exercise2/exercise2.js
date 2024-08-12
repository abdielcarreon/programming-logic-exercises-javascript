

palindrome("otto");

function palindrome(name) {
   
    let inverted = name.split("") // What is inside the parentheses on split method point it out the gap
                        .reverse() 
                        .join(""); // Don't forgetting that inside the parentheses have to declare the quote-unquote and here could go the separator especified
    
    console.log(inverted);
    

    if(inverted === name) {
        return true
    } else {
        return false

    }
    
}

module.exports = palindrome;