//Arreglos o Arrays

const numeros = [10,20,30,40,50];

// Acceder a los valores de un array

// console.log(numeros[4]);
// console.log(meses[4]);

//Conocer la extensión de una arreglo

// console.log(meses.length);

//Iterador forEach
// meses.forEach( function(mes){
//     console.log(mes)
// })

// numeros[5] = 60;
// numeros[6] = 70;


numeros.push(60, 70, 80); //Agrega al final del array
numeros.unshift(-10, -20, -30) //Agrega al inicio del arreglo
console.table(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];


//meses.pop(); //Elimina el ultimo elemento de arreglo
//meses.shift(); //Elimina el primero del arreglo


//meses.splice(2, 1); //Borra uno u varios elementos del array a partir del elemento en la posición indicada

console.table(meses);

//Rest Operator or Spread Operator
const nuevoArreglo = [...meses, "Junio", "Julio"]; //Agrega nuevos datos al array
console.table(nuevoArreglo);