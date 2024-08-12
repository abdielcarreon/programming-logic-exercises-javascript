//Given one movies objects array(title, director, seen it),
//showing up all movies pointed out which one you have seen it and which one not yet

/* const movies = [
    { title: "The Lord of The Rings", diector: "Peter Jackson", seen: false},
    { title: "A Unexpected miracle", diector: "Glendyn Ivin", seen: false},
    { title: "The Day After Tomorrow", diector: "Roland Emmerich", seen: true},
    { title: "Ice Age", diector: "Chris Wedge", seen: true}
];

const movieSeen = movies.filter(movie => {
    if(movie.seen === true) {
        return movie.title;
    }
})

if(movieSeen) {
    console.log(`You have seen ${movieSeen[0].title} and ${movieSeen[1].title} you are left for see ${movies[0].title} an ${movies[1].title}`)
} */

/* const movies = [
    { title: "The Lord of The Rings", director: "Peter Jackson", seenIt: false},
    { title: "An Unexpected miracle", director: "Glendyn Ivin", seenIt: false},
    { title: "The Day After Tomorrow", director: "Roland Emmerich", seenIt: true},
    { title: "Ice Age", director: "Chris Wedge", seenIt: true},
];

function print() {

    let moviesSeen = [];
    let moviesSeenNot = [];

    for(let object of movies) {
        
        if(object.seenIt === true) {
            moviesSeen.push(' ' + object.title)
        } 

        if(object.seenIt === false) {
            moviesSeenNot.push(' ' + object.title)
        }

    }
    
    return `You have seen already: ${moviesSeen} - and now you need to see: ${moviesSeenNot}`;
    
}   

console.log(print()); */


function print(movie, boolean = false) {
    if(!movie) {
        console.log('You need add one movie');
    }
    else if(movie && boolean === true) {
        console.log(`${movie} - Seen it`);
    } else {
        console.log('Not seen it');
    }
}

print('Game of Thrones',  );





