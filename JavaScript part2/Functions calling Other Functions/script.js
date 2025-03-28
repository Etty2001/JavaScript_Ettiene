'use strict'

function cutFruitPieces(fruit){
    return fruit * 4
}


function fruitprocessor(apples, organges){
  const applePieces = cutFruitPieces(apples)   
  const organgesPieces = cutFruitPieces(organges)   
    const juice =`Juice with ${applePieces} pieces of apples and ${organgesPieces} pieces of organge`;
    return juice
}

 console.log(fruitprocessor(2 ,3))