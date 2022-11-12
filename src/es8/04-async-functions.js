const fnAsync = () => {
  return new Promise((resolve, reject) => { //Promise es una nueva instancia que contiene una arrow function donde se hace la validación.
    (true) 
      ? setTimeout(() => resolve('AsynC!!'), 2000) 
      : reject(new Error ('Error!'))  
  });
}//ternario //"?" si es verdad..resuelve  // ":" sino has esto.

const anotherFn = async() => {
  const something = await fnAsync();  //something va a esperar por fnAsync para ejecutarse 
  console.log(something);
  console.log('hello!');
}

console.log('before');
anotherFn();
console.log('after');