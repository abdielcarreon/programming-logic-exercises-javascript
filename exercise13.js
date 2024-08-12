//Given one array, dividing it in sub-arrays according to indicator number


/* function divisor(array) {

    let divided = array.join(",").split(',');
    let subSplit = '';
    let result = '';
    let map = []

    subSplit = divided.map(element => {
        if(divided.length) {
            return map = [element]
        }

    });

    return subSplit;
}

console.log(divisor(['Tv','Monitor', 'Headphones', 'Horn', 'Celphone', 'Keyboard', 'Nuevo elemento'])); */


function divider(arrayMain, elementNumbers) {
    let arrays = [];
    
    for(let element of arrayMain) {

        let late = arrays[arrays.length - 1];

        if(!late || late.length === elementNumbers) {
            arrays.push([element])
        } else {
            late.push(element)
        }
    }

    return arrays;
}

console.log(divider(['Tv','Monitor', 'Headphones', 'Horn', 'Celphone', 'Keyboard', 'Nuevo elemento', 'Nuevo elemento'], 2));