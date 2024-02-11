//Programación Orientada a Objetos

//Objeto literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
//Prototype crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
}

Producto.prototype.obtenerPrecio = function(){
    return `${this.nombre} Precio del producto es de: ${this.precio}`
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop"', 800);
const producto4 = new Producto('Monitor Curvo de 49"', 800);



console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto3.obtenerPrecio());

