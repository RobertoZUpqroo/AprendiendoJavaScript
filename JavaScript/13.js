//Const
const producto = {
    nombreProducto : 'Monitor 21" Pulgadas',
    precio : 300,
    disponible : true
}

const medidas = {
    peso : '1kg',
    medidad : '1m'
}

//Rest operator
const nuevoProducto = { ...producto, ...medidas};

console.log(producto)
console.log(nuevoProducto)