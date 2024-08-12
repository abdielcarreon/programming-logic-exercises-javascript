//According two text strings, creating an algorithm that prove if they are anagrams betwen itself

function cleanText(text) {
    return text.replace(/[^\w]/gi, '')
                .toLowerCase()
                .split('')
                .sort()
                .join()
                
}
console.log(cleanText('AbDiel.'))

function anagram(text1, text2) {
    return cleanText(text1) === cleanText(text2);
}

console.log(anagram('AbDieL..,', 'LeIdBa "!" '));