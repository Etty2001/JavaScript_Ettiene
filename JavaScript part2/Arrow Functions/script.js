//Funtion Decarations
function caklcAge1(birthYear){
    return 2037 - birthYear
}

const age1= caklcAge1(2001);

//Funtion expresoins 

const calcAge2 = function(birthYear){
    return 2037- birthYear;
}
const age2= calcAge2(1994)
console.log(age1,age2);

//arrow funtions
const calcAge3 = birthYear=> 2037- birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName)=> {
    const age= 2037 - birthYear
    const retirement = 65 - age
    return `${firstName} retires in ${retirement} years`
} 
 console.log(yearsUntilRetirement(2001, 'Ettiene'));
 console.log(yearsUntilRetirement(1987, 'Derrick'));





