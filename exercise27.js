//Given a days number, showing up to how many years, months and days are equaling them

function converterFromDays(days) {
    let years = Math.floor(days / 365);
    let daysLeft = (days % 365) // Gotting the left days "%" according to how many times the days passed down as argument are fitting in a year 
    let months = Math.floor(daysLeft / 30);
    daysLeft = daysLeft%30; // Gotting the left days "%" according to how many times 30 days are fitting in a a month 

    console.log(years)
    console.log(months)
    console.log(daysLeft)

    return `${days} days Equals to: ${years} years - ${months} months - ${daysLeft} days`;
} 

console.log(converterFromDays(920));