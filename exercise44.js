//Given an array, returning back another with values inside it , whose values are structured with more than two words


function moreThanTwoWords(array) {


    const moreThantwoWords = array.filter(word => {
        console.log(word)
        if(word.includes(' ')) {
            return word;
        }
    });
    return moreThantwoWords;
};

console.log(moreThanTwoWords(['New York', 'San Francisco', 'Kansas', 'Oklahoma', 'Seattle']));