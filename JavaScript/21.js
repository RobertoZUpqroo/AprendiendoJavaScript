
//Arrow functions
const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)


aprendiendo('JavaScript');


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

//ForEach
    meses.forEach( (mes) => {
        if(mes == 'Marzo'){
            console.log('Marzo sí existe');
        }
    });

let resultado;

//Some ideal para arreglo de objetos
    resultado = carrito.some( producto => producto.nombre === 'Celular');
    

//Reduce nos sirve para sumar el total de todos los productos
    resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
    

//Filter
resultado =  carrito.filter (producto => producto.precio>400 );


resultado =  carrito.filter(producto => producto.nombre !== 'Celular');

console.table(resultado)