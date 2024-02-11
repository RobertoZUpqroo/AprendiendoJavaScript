//Metodos exclusivos de arreglos

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
const arreglo1 = carrito.forEach(producto => producto.nombre);



//Map  Crear un nuevo arreglo
const arreglo2 = carrito.map(producto => `Nombre del producto: ${producto.nombre} - Precio: ${producto.precio}`);

console.log(arreglo1);
console.table(arreglo2);