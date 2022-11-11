// se me asemejó a las clases de CSS. se declara en un lado y luego se inserta en otro.

//declarando
class nombreAleatorio{};

//instancia de una clase
const newUser = new nombreAleatorio();

class User {
    //aca van los metodos que se van a usar
    greeting(){
        return 'Holis';
    }
};

const gndx = new User();
console.log(gndx.greeting())

//herencia.  nueva referencia a la clase

const instancia2 = new User();
console.log(instancia2.greeting())


//constructor
class User{
    constructor(){
        console.log('nuevo usuario')
    }
    greeting(){
        return 'Holis';
    }
}

const david = new User();

//this . hace referencia al elemento padre que lo contiene
class user {
    constructor(name){
        this.name = name;
    }
    //metodo
    speak(){
        return 'Holis'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user ('Ana');
console.log(ana.greeting());

