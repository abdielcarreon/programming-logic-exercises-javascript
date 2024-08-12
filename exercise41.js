//Given a number, showing up a asterisks triangle according to number specified in the function parameter

/* function asterisksTriangle(number) {

    let result = '';

    for(i = 1; i <= number - number + 1; i++) {
        result += '*'
    }
    console.log('    ' + result + '    ' + '\n' );

    for(i = 1; i <= number - number + 2; i++) {
        result += '*'
    }
    console.log('   ' + result + '   ' + '\n' );

    for(i = 1; i <= number - number + 3; i++) {
        result += '*'
    }
    console.log('  ' + result + '  ' + '\n' );
}

asterisksTriangle(20); */

function asterisksTriangle(number) {
    let half = Math.floor(number - 1);
    let result = '';

    for(let pile = 0; pile < number; pile++) {
        let tier = '';

        for(let column = 0; column < (2 * number - 1); column++) {
            console.log(column)

            console.log(half - pile)
            console.log(half + pile)
            if(half - pile <= column && half + pile >= column) {
                console.log(tier)
                tier += '*';
            } else {
                tier += ' ';
                console.log(tier)
            }

        }
        result += tier + '\n';
    }

    return result
}

console.log(asterisksTriangle(4));
