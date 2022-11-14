const user = {username: 'luis', age: 32, country:'CO'}
const {username, ...values} = user;  //... quiere decir las demás cosas del objeto y el value quiere decir a donde asl quieres guardar.

console.log(username)
console.log(values) //donde se guardo age y country
console.log(user)



