'use stick'
const yearsUntilRetirement = (birthYear, firstName)=> {
    const age= 2037 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years`
} 
 console.log(yearsUntilRetirement(2001, 'Ettiene'));
 console.log(yearsUntilRetirement(1987, 'Derrick'));

