//Clases

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto: ${this.nombre} \nTiene un precio de: $${this.precio}`;
    }

    obtenerPrecioProducto(){
        return `Precio del producto: $${this.precio}`;
    }
}

const producto = new Producto('Monitor Curvo de 49"', 800);
const producto2 = new Producto('Laptop"', 800);

console.log(producto);
console.log(producto2);

console.log(producto.formatearProducto());

//Herencia
class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()}\nISBN es: ${this.isbn}`;
    }
}

const libro = new Libro('JavaScript la Revolución', 120, 817263123);
console.log(libro.formatearProducto());