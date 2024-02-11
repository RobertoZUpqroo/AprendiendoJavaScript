//Array Methods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'monitor 20" Gamer', precio: 500},
    { nombre: 'Televisión 50" OLED', precio: 700},
    { nombre: 'Tablet Gamer', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Celular', precio: 800},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Bocinas', precio: 100},
    { nombre: 'Laptop', precio: 1100},
];

//forEach
// meses.forEach(function(mes){
//     if(mes == 'Marzo'){
//         console.log('Marzo sí existe');
//     }
// });

//Includes
// const resultado = meses.includes('Marzo');
// console.log(resultado);

//Some ideal para arreglo de objetos
// resultado = carrito.some(function(producto){
//     return producto.nombre === 'Celular'
// });

//Reduce nos sirve para sumar el total de todos los productos
// resultado = carrito.reduce(function(total, producto){
//     return total + producto.precio
// }, 0);

//Filter
resultado =  carrito.filter(function(producto){
    return producto.precio>400
});

resultado2 =  carrito.filter(function(producto){
    return producto.nombre !== 'Celular'
});

console.table(resultado2);
