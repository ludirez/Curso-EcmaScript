//para trabajar con regex (expresiones regulares)
//filtrando cosas generando reglas con validaciones 


const regex = /\b(Apple)+\b/g; //buscamos Apple

const frutas = 'Mango, Apple, Piña, Más, Apple';

for (const coincidencias of frutas.matchAll(regex)) {
    console.log(coincidencias);
}






