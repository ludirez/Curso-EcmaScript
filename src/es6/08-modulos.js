//agrupación de código en otro archivo que pueden exportarse a otro archivo

// para trabajar con módulos en js puro, hay que editar el documento package.json
// copiar en la linea siguiente yde la licencia: "type": "module",

import hello from "./08-1-moduloEjemplo.js";

hello();




//ejercicio

import { getData } from "./api";

function solution() {
  return getData().then(movies => movies);
}

solution()