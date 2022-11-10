//Objetos literales

//enhanced object literals

function newUser(user, age, country, uID) {
    return{ //regresando un objeto con os valores que hemos pasado
        user: user,  //forma antigua
        age: age,   //forma antigua
        country,    //si no vamos a cambiar el nombre del ato entrante
        id: uID,  //si el id viene de otro argumento como uID. le estamos renombrando el valor  para nuestro arreglo. se usaría para elemento que no controlamos, ej que vengan de una API
    }
}
console.log(newUser('luis', 34, 'mx', 1))