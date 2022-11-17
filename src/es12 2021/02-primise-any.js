const promesa1 = new Promise((resolve, reject)=> reject('Reject')) ;
const promesa2 = new Promise((resolve, reject)=> resolve('resolve')) ;
const promesa3 = new Promise((resolve, reject)=> reject('Reject')) ;

Promise.any([promesa1, promesa2, promesa3])
    .then(response => console.log(response)); 
    //regresa la primera que resuelva true