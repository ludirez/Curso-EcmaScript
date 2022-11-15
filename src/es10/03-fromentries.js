// Cómo transformar un array de arrays en un objeto
// El método Object.fromEntries devuelve un objeto a 
//partir de un array donde sus elementos son las entries en forma [propiedad, valor].

// Se considera la operación inversa de Object.entries().

const entra = new Map([['nombre', 'luis'],['edad', 32]]);
console.log(entra);
console.log(Object.fromEntries(entra));



//ejemplo 2
const arrayEntries = [
    [ 'name', 'Andres' ],
    [ 'email', 'andres@correo.com' ],
    [ 'age', 23 ]
  ] 
  
  const usuario = Object.fromEntries(arrayEntries) 
  
  console.log(usuario)
  /* {
    name: 'Andres',
    email: 'andres@correo.com',
    age: 23
  }
  */
