//setters and getters privados con '#'
//para ser accedidos solo en la clase donde se generaron

// Los métodos privados consiste en limitar el acceso a propiedades y métodos 
// agregando el caracter numeral ( #). Por defecto, las propiedades y métodos 
// de una clase en JavaScript son públicas, es decir, se puede acceder a ellos 
// fuera de la clase.


class user{
constructor(name, age){
    this.name = name;
    this.age = age;
}
//método
#speak(){
    return 'Hola'
}
greeting(){
    return `${this.speak()} ${this.name}`
}
//para leer el valor age
get #uAge(){
    return this.age;
}
//set para cambiar un valor
set #uAge(n){
    this.age = n;
}
}

const superUsuario = new user('Salma', 15)

console.log(superUsuario.name)
console.log(superUsuario.uAge)
console.log(superUsuario.uAge = 120)