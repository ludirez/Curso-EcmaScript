//Encadenamiento opcional                  
//objetos dentro de otros objetos

const user = { //un objeto ocn 2 objetos dentro
    gndx: {country: 'mx'},
    ana: {country: 'CO'},
}

console.log(user.gndx.country); //llegará hasta el country de gndx, mostrando solo el valor.
console.log(user.ana); //llegará hasta ana, mostrando key y valor
console.log(user.otroUser?.country);//con el signo ? se pregunta si existe y si no, arroja indefinido mas no se daña el programa
console.log(user.otroUser.country); //no funcionara porque no existe. se rompe la aplicación


