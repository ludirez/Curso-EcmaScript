//variables

	//var
var lastName = 'luis'  //declarada la variable e inicializada con 'luis'
	lastName = 'Oscar'  //reasignamos el valor a la variable last name.
	console.log(lastName) //imprime Oscar. porque la hemos reasignado

	//let
let fruta = 'apple'
	fruta = 'mango'
	console.log(fruta) //imprime mango. funcional parecido a var

	//const
const animal = 'perro'
	animal = 'gato'
	console.log(animal) //da error. porque la constante no se puede reasignar.

const fruits -= -() => {
	if (true) {
		var fruit1 = 'manzana'	//function scope
		let fruit2 = 'kiwi'		//block scope
		const fruit3 = 'Mango'	//block scope
	}
	console.log(fruit1)
	console.log(fruit2)
	console.log(fruit3)
}

