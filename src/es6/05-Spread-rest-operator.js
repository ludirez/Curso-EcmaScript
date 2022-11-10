//para traer de otro arreglo u objeto los datos y formar uno nuevo.

//ofrecen ventaja al trabajar con arreglos , funciones y objetos y los elementos que queremos construir con esa información

//spread operator

let person ={name: 'luis',age: 22}  //objeto
let country = 'MX'                  //variable
let id = ['user256', 'male']                //array

//se puede o no usar los puntos. la diferencia radica en la forma en la que se creara el nuevo objeto
var data1 = {...id, ...person, country}      //en el caos del arreglo (id), se traerá el indice de cada elemento.
var data2 = {id, person, country}           //aquí forma un objeto con cada argumento como key
var data3 = {id, ...person, country}        //aquí, me confunde. no creo que sea asi.. investigar más.

console.log(data1)
console.log(data2)
console.log(data3)


//rest parameter  ->para funciones

function sum(num, ...values) {  //...values van a ser unos valores que sabemos que van a ingresar por ahí
	console.log(values)
	console.log(num + values)
	return num + values[0];     //no mas por hacer el ejemplo con un numero del index
}
sum(1, 4, 6, 3)
//imprime Values como arreglo [4,6,3]
//imprime num (1) + value(4)   ->4 por ser el primero de values de index[0]

//ejercicio
var names;

let json1 = { 
	names: 'luis',
	foot: 'hamburger',
}

let json2 = {
	age: '120',
	color: 'x',
}

function solution(a, json2) {
	var a = json1 || { name: "Mr. Michi", food: "Pescado" };
	var json2 = json2 || { age: 12, color: "Blanco" };
  
	return { ...json1, ...json2 }
  }
console.log(solution(json1, json2))

solution()
