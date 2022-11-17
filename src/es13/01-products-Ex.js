import fetch from "node-fetch";

const responde = await fetch('https://api.escuelajs.co/api/v1/products'); //espera que llegue esta info
const productos = await responde.json(); //transformando lo que trae la API a un json

export { productos };
