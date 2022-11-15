//devuelve una matriz de una sub matriz


//flat
const array = [1,2,3,4,['a','b','c',['a1','b2','c3']]]  //arreglo de profundidad 3
console.table(array.flat(3)); //para entrar hasta el 3 nivel

//flat map
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(valor => [valor, valor * 2])); //valor, valor*2