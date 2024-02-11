// Objetos

// const nombreProducto = 'Monitor 20 Pulgadas';
// const precioProducto = 300;
// const disponible = true;

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precioProducto : 300,
    disponibleProducto : true
}

console.log(producto);

// console.log(producto.nombreProducto);
// console.log(producto.disponibleProducto);
// console.log(producto.precioProducto);

// console.log(producto["nombreProducto"]);

//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

//Eliminar propiedades
delete producto.disponibleProducto;

console.log(producto.imagen);