//String o cadenas de texto

const tweet = "Aprendiendo JavaScript";
const producto2 = String('Monitor de 30"s');
const producto3 = new String('Monitor de 50 pulgadas');
const email = 'correo@correo.com';

console.log(producto2.length)
console.log(producto2)
console.log(producto3)

//IndexOf
console.log(tweet.indexOf("JavaScript"));
console.log(producto2.indexOf("Tablet"));

//Includes retorna true o false
console.log(tweet.includes("JavaScript"));
console.log(producto2.includes("Tablet"));
console.log(email.includes("@"));