// "use strict"; //Correr JavaScript en modo estricto
//Objetos 
const producto = {
    nombreProducto : 'Monitor 21" Pulgadas',
    precio : 300,
    disponible : true
}

// Object.freeze(producto); congela al objeto para no modificar las clases

Object.seal(producto); //no permite agregar ni quitar nuevas propiedades pero sí deja modificar las existentes

producto.precio = 'Nuevo Precio';

delete producto.precio;

console.log(producto);