//Given two arrays, returning one array with the common elements between both of them

let array1 = ['Tv','Monitor', 'Headphones', 'Horn', 'Celphone', 'Keyboard'];
let array2 = ['Tv','Videogame', 'USB Memory', 'Desk', 'Celphone', 'Keyboard'];

function commonElements(array1, array2) {

    const filtered = array1.filter(element => {
        if(array2.includes(element) === array1.includes(element)) {
            return element;
        }
        
    });
    return filtered;

}

console.log(commonElements(['Tv','Monitor', 'Headphones', 'Horn', 'Celphone', 'Keyboard'], ['Tv','Videogame', 'USB Memory', 'Desk', 'Celphone', 'Keyboard']));