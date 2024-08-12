//Given one pupils array (name and grades), showing up how many students are reproved and which ones are aproving
const array = [
    {name: 'Jacob', generalAverage: 9},
    {name: 'Abel', generalAverage: 8},
    {name: 'Caín', generalAverage: 6},
    {name: 'Josué', generalAverage: 8},
    {name: 'Josías', generalAverage: 7},
    {name: 'Bezaleel', generalAverage: 9}
];

const newElement = {name: 'Acab', generalAverage: 5};

array.push(newElement);

function approvedPupils(array) {
    let reprovingStudents = [];
    let result = [];

    for(let object of array) {
        if(object.generalAverage <= 7) {
            reprovingStudents.push(object)      
        }

    }
    reprovingStudents

    for(let object of reprovingStudents) {
        result.push(`The alumn ${object.name} has not be able to accredit the curse with a grade no approving of ${object.generalAverage}`);
    }  

    return result;
}

console.log(approvedPupils(array));