// Drawing one hollow square with asterisks
   
function drawingSquares(sides) {
    let result = '';
  
    // top line
    for (let i = 0; i < sides; i++) {
      result += '* ';
    }
    
    result += '\n';
  
    // left side asterisks
    for (let i = 0; i < sides - 2; i++) {
      result += '*';
      // white spaces between asterisks
      for (let j = 0; j < sides + sides - 3; j++) {
        result += ' ';
      }
      // right side asterisks
      result += '*\n';
    }
  
    // bottom line  
    for (let i = 0; i < sides; i++) {
      result += '* ';
    }
    
    return result;
}
  
console.log(drawingSquares(3));
console.log(drawingSquares(5));
console.log(drawingSquares(7));
console.log(drawingSquares(9));

/* function square(number) {s
    let asterisk = number;
    console.log(asterisk)

    if(asterisk === number) {
        console.log
        (
            `
            ****\n
            *  *\n
            *  *\n
            ****
            `
            
        )

    }

}
square(8); */