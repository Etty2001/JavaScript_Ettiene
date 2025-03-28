'use strict'

function logger() {
console.log('My name is Ettiene');
}
// calling / running / invoking
logger();
logger();
logger();

function fruitprocessor(apples, organges){
    const juice =`Juice with ${apples} apples and ${organges} organges`;
    return juice
}

const Applesjuice= fruitprocessor(5,0);
console.log(Applesjuice);

const appleOrgangJuice = fruitprocessor(2,4);
console.log(appleOrgangJuice);

