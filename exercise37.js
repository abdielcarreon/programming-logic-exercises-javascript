//Given an array or a text, returning back the more frequently element show up
function elementMoreRepeated(element) {
    let maping = {};
    let result = '';
    let elementMoreRepeated = '';
    let timesMoreRepeated = 0;

    if(typeof element === "string") {
        element = element.split(" ");
    }

    for(let value of element) {
        if(maping[value]) {// "maping[value]" => Adding one property to 'let maping = {};'
            maping[value]++ 

        }else {
            maping[value] = 1 
        }
    }

    console.log(maping);

    for(let element in maping) {
        console.log(element)
        
        if(maping[element] > timesMoreRepeated) {
            console.log(maping[element])
            timesMoreRepeated = maping[element]
            elementMoreRepeated = element
            result = `The elements ${elementMoreRepeated} showing it up ${timesMoreRepeated} times`;
        } else if(timesMoreRepeated === maping[element]) {
            console.log(maping[element])
            console.log(timesMoreRepeated)
            timesMoreRepeated = maping[element]
            result = `The elements showing it up the same times`;
        }
    }
    
    return result
}

console.log(elementMoreRepeated('Abdiel Abdiel Programing Programing'))

