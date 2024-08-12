//Given a number, showing a stairs with steps, using the number for stairs's tiers
/* function stair(number) {
    let result = '';
  
    // Level 1
    for (let i = 0; i < number - 3; i++) {
      result += '[-]';
    }
    
    result += '\n';
    // Level 2
    for (let i = 0; i < number - 2; i++) {
        result += '[-]';
      }
      
    result += '\n';
    // Level 3
    for (let i = 0; i < number - 1; i++) {
    result += '[-]';
    }
    
    result += '\n';
    // Level 4
    for (let i = 0; i < number; i++) {
    result += '[-]';
    }
    
    return result;
}

console.log(stair(4)); */

function stair(number) {

    let stair = '';

    for(let level = 1; level <= number; level++) {

        let steps = '';

        for(let step = 1; step <= level; step++) {
            steps += '[-]';
        }
        stair += steps + '\n';
    }
    return stair;    
}

console.log(stair(5));

/* function bucle(number) {
    let resultado = '';

    for(i=0; i<number; i++) {
        resultado += '* ';
    }
    resultado += '\n';

    for(i=0; i < number - 1; i++) {
        resultado += '*';
        for(j=0; j < number -2; j++) {
            resultado += '  ';
        }
        resultado += ' *\n';
    }

    for(i=0; i<number; i++) {
        resultado += '* ';
    }
    
    return resultado;
}

console.log(bucle(4));

console.log(bucle(8)); */