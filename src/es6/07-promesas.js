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
	.catch (err => console.log(err));			//sino