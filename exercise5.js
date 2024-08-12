// Getting the One Number percent


function reckon(percent, number) {
    const calculate = number * percent;
    const result = calculate / 100;
    return `The ${percent}% of ${number} is... ${result}`
}

console.log(reckon(12, 897));

