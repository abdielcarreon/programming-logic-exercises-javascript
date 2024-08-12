//Given an object, comproving if exist one specific property
/* const users = [
    {name: 'Israel', fondness: ["computing", "cinema", "videogames"]},
    {name: 'Daniel', fondness: ["camping", "futbol", "videogames"]},
    {name: 'Isaías', fondness: ["tenis", "cinema", "videogames"]},
    {name: 'David', fondness: ["cycling", "cinema", "basketball"]},
    {name: 'Moisés', fondness: ["hiking", "cinema", "camping"]},
    {name: 'Ezequiel', fondness: ["futbol", "box"]}
];

function existProperty(array, property) {

   let result;

    for(object of array) {

        if(property === 'name') {
            return result = true;
        } else if(property === 'fondness') {
            return result = true;
        } else {
            return result = false;
        }
    }
    return result;
}

console.log(existProperty(users, 'fondness')); */

const user = { 
    name: 'Israel', 
    fondness: ["camping", "hiking"]
};

function existProperty(object, property) {

    if(typeof object === 'object' 
        && typeof property === 'string'
        && object.hasOwnProperty(property)) {
            return true
    } 
        return false
}

console.log(existProperty(user, 'weight'));