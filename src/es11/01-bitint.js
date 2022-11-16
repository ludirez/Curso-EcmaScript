const aBigNum = 45618849131818616n; //la n es la manera anterior de representar un numero grande
const anotherBigNum = BigInt(45618849131818616);

console.log(aBigNum);
console.log(anotherBigNum);

//no cambia mucho pero es una mejor manera de visualizar y manejar el numero

const number1 = 45n
const number2 = BigInt(45)

typeof 45n // 'bigint'

//JavaScript tiene límites numéricos, un máximo 
Number.MAX_SAFE_INTEGER
console.log(max)  // 9007199254740991
//y un mínimo 
Number.MIN_SAFE_INTEGER
console.log(min) // -9007199254740991

// Después de los límites, los cálculos muestran resultados erróneos. 
// Los bigint ayudan a manejar operaciones de enteros fuera de los límites mencionados.

const increment = 2
const number = Number.MAX_SAFE_INTEGER + increment
const bigInt = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(increment)

console.log(number) // 9007199254740992
console.log(bigInt) // 9007199254740993n