async function* anotherGenerator() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
    }
    
    const item = anotherGenerator()
    item.next().then(respuesta => console.log(respuesta.value))
    item.next().then(respuesta => console.log(respuesta.value))
    item.next().then(respuesta => console.log(respuesta.value))
    console.log('hello')

async function arrayOfNames(array) {
    for await (let cosa of array)
    console.log(cosa)
}

const names = arrayOfNames(['luis', 'Maria', 'Ethan'])
console.log('After')