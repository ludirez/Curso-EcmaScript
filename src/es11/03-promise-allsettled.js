// En alguna situación necesitarás manejar varias promesas y obtener sus resultados. 
// ¿Cómo? Utilizando los métodos Promise.all y Promise.allSettled.

Promise.all

// El método Promise.all sirve para manejar varias promesas al mismo tiempo.
//  Recibe como argumento un array de promesas.

const promesa1 = new Promise((resolve, reject)=> reject('Reject')) ;
const promesa2 = new Promise((resolve, reject)=> resolve('resolve')) ;
const promesa3 = new Promise((resolve, reject)=> reject('Reject')) ;

Promise.allSettled([promesa1, promesa2, promesa3])
    .then(response => console.log(response));
