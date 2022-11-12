//lecturas: 
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Iterators_and_Generators
//https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript-es


// Los generadores son funciones especiales que pueden pausar su ejecución, 
// luego volver al punto donde se quedaron, recordando su scope y seguir 
// retornando valores.

// Estos se utilizan para guardar la totalidad de datos infinitos, a través
// de una función matemática a valores futuros. De esta manera ocupan poca 
// memoria, con respecto a si creamos un array u objeto.

function* iterate(array){
    for (let value of array){//se lee, has para cada elemento del arreglo:
        yield value;//'yield' palabra reservada que retornara los valores según sea el caso y guarda su valor
    }
}

const it = iterate(['Oscar', 'luis', 'Ana', 'Luises', 'Jenifer' ]);
console.log(it.next().value)
console.log(it.next().value)//recuerda su estado, ya que para esta segunda ocasión imprime luis en me de Oscar
console.log(it.next().value)//con next pasa al siguiente valor. 
console.log(it.next().value)

//ejercicio

// En la guardería de Michis "Michilango", están registrando nuevos michis, pero necesitan una forma de identificarlos.

// Tu tarea será proveer de una función getId() que se encargue de generar dichos identificadores y, a través de un método .next() se pueda pasar al siguiente identificador, y a través de la propiedad .value se pueda obtener el valor del nuevo identificador.

// Cada vez que llame a la función de la siguiente forma debería retornarme un identificador nuevo y completamente diferente:

// const id = getId();
// id.next().value

// El identificador puede ser de cualquier tipo (números o cadenas de texto), la única condición es que cada nuevo identificador que se retorne debe ser completamente diferente a los retornados anteriormente.

// Debes usar generadores de JavaScript para resolver este ejercicio. La solución debería tener un input y output como los siguientes:

// Ejemplo 1:

// Input:

// const id = getId()
// id.next().value
// id.next().value
// id.next().value

// Output:

// 1
// 2
// 3

// Ejemplo 2:

// Input:

// const id = getId()
// id.next().value
// id.next().value
// id.next().value

// Output:

// AX6SF5S
// G7QNW01
// KH3BR02

export function* getId() {
    let lastId = 1;
    while (true) {
      yield lastId++;
    }
  }
  