// Statement Excercise 1;
//Given a number, returning their whole multiplication's table.



multiplication(5);
function multiplication(number) {
    let result;

    for(i = 0; i < 11; i++) {
        result = number * i;
        console.log(`The corresponding multiplication's table of the number is...${result}`) 
    }
}


const number1 = 5;
const number2 = 10
let counter = 0
console.log(counter);

multiplication2();
function multiplication2() {
    while(counter < number2) {
        counter++;
        console.log(counter);
        
        const result = counter * number1
       console.log(result);
   }

   console.log(counter);
}
console.log(counter);
   











