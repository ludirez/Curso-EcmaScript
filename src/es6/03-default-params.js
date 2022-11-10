//para parámetros por defecto

function newUser(name, age, country) {  //(parámetros que va a recibir)
    var name = name || 'luis'       //para el parametro po defecto colocamos operador 'or' que son las dos barras '||'
    var age = age || 32
    var country = country || 'Colombia'
    console.log(name, age, country)
}

newUser();
newUser('David', 30, 'México');

//arrow =>
const newUser2 = (name, age, country) => {
    var name = name || 'luis'
    var age = age || 32
    var country = country || 'Colombia'
    console.log(name, age, country)
}
newUser2()
newUser('David', 30, 'México');

//es6
const newAdmin = (name = 'luis', age = 32, country = 'CO') => {
    console.log(name, age, country)
}
newAdmin()
newAdmin('David', 30, 'México');