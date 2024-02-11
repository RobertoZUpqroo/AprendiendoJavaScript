//Objetos

const producto = {
    nombreProducto : 'Monitor 21" Pulgadas',
    precio : 300,
    disponible : true
}

// const precioProducto = producto.precio;
// const nombreProducto = producto.nombre;

// console.log(precioProducto);
// console.log(nombreProducto);

//Destructuring objects

const {precio, nombreProducto} = producto;


console.log(precio);
console.log(nombreProducto);