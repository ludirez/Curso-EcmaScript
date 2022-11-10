//Reestructuración.

//para trabajar con array || arrays destructuring \\buscar en mozila =S

let fruits = ['Apple', 'Banana']
let [a, b] = fruits
console.log(a, fruits[1])


//para trabajar con objetos

let user = {username: 'Oscar', age:23}
let {username, age} = user
console.log (username, age)
console.log (user.username, user.age) //ambas son correctas. se usa depende del caso. hay que investigar más