//Given a object array, returning back which elements are the favorites for the fans
/* const users = [
    {name: 'Israel', fondness: ["computing", "cinema", "videogames"]},
    {name: 'Daniel', fondness: ["computing", "cinema", "videogames"]},
    {name: 'Isaías', fondness: ["computing", "cinema", "videogames"]},
    {name: 'David', fondness: ["computing", "cinema", "videogames"]},
    {name: 'Moisés', fondness: ["computing", "cinema", "videogames"]},
    {name: 'Ezequiel', fondness: ["computing", "cinema", "videogames"]},
];

function fondness(array) {
    let resultComputing = '';
    let resultCinema = '';
    let resultVideogames = '';
    let counterComputing = 0;
    let counterCinema = 0;
    let counterVideoGames = 0;


    for(object of array) {

        if(object.fondness[0] === 'computing') {
            counterComputing++
        } if(object.fondness[1] === 'cinema') {
            counterCinema++
        } if(object.fondness[2] === 'videogames') {
            counterVideoGames++
        }
        resultComputing = object.fondness[0] + " " + ":" + " " + counterComputing;
        resultCinema = object.fondness[1] + " " + ":" + " " + counterComputing;
        resultVideogames = object.fondness[2] + " " + ":" + " " + counterComputing;
    }
    return `${resultComputing}, ${resultCinema}, ${resultVideogames}`
}

console.log(fondness(users)); */

const users = [
    {name: 'Israel', fondness: ["computing", "cinema", "videogames"]},
    {name: 'Daniel', fondness: ["camping", "futbol", "videogames"]},
    {name: 'Isaías', fondness: ["tenis", "cinema", "videogames"]},
    {name: 'David', fondness: ["cycling", "cinema", "basketball"]},
    {name: 'Moisés', fondness: ["hiking", "cinema", "camping"]},
    {name: 'Ezequiel', fondness: ["futbol", "box"]}
];

function fondness(arrayObj) {
   
    let maping = {}

    for(let object of arrayObj) {
        
        
        for(let fondness of object.fondness) {
            if(!maping[fondness]) {
                maping[fondness] = 1;
            } else {
                maping[fondness]++;
            }
        }
    }

    return maping
}

console.log(fondness(users));