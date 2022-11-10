//arrow function
// Documentación https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 
// Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional,
	//pero es limitada y no se puede utilizar en todas las situaciones.

// Diferencias y limitaciones:

// No tiene sus propios enlaces a this o super y no se debe usar como métodos.
// No tiene argumentos o palabras clave new.target.
// No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
// No se puede utilizar como constructor.
// No se puede utilizar yield dentro de su cuerpo.

function square(num) {  //'palabra clave' 'nombre de la función' (argumento)
	return num * num;  //retorna una acción. en este caso, multiplicar
}

const square = (num) => {  //"se elimina la palabra función" = (argumento1, argumento2) => {bloque de código} | se puede eliminar los () si solo entra 1 argumento
	return num * num;
}

const square = num => num * num; // nombre de la función = solo 1 argumento => permite solo 1 linea de código
								//return implícito, por eso se elimina 