//callback .función que recibe como parámetro otra función y la ejecuta según sea el caso

// pasa = resolve = resuelve
// no pasa = reject

const anotherFunction = () =>{
    return new Promise ((resolve, reject) => {
        if (true) {  //con false, pasará al else.
            resolve('hello')
        } else {
            reject('goodbye')
        }
    })
    }
anotherFunction()
    .then (response => console.log(response)) //then traduce algo como entonces
    .catch (err => console.log(err))		//sino
    .finally(()=>console.log('Finalizado'));
    //mostrar algo cunado haya finalizado la promesas









// Cómo utilizar for await
// De la misma manera, for await es un ciclo repetitivo que se maneja asíncronamente. El ciclo siempre debe estar dentro de una función con async.

// El valor es cada elemento del iterable puede tener cualquier nombre, por eso se inicia con let nombre.
async function forAwait() {
    const nombres = ["Alexa", "Oscar", "David"]
    for await (let valor of nombres) {
        console.log(valor,)
    }
    }
    
    forAwait()

//   Generadores asíncronos
//   Los generados asíncronos son semejantes a los generadores que ya conoces, 
//pero combinando sintaxis de promesas.


