//Given a numbers array, returning back the higher and lower value

function lowerAndHigherNumber(numbers) {

    console.log(numbers.sort
        (function(a, b) {
        return a - b
    }));

    console.log(numbers[0])
    console.log(numbers[numbers.length - 1])

    return {
        "Lower number": numbers[0],
        "Higer number": numbers[numbers.length - 1]
    };
}

console.log(lowerAndHigherNumber([3, 23, 12, 1, 80, 5, 25]))
