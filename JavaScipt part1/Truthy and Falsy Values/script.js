console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 300;
if(money){
    console.log("Don't spent it all" );
}else{
  console.log('You should get a job!');
}

let height;
if (height){
    console.log('YAY height is defined');
}else{

  console.log("height is undefined")
}