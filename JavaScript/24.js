
//For loop
// for( let i = 0; i < 10; i++){
//     console.log(i);
// }

// for( let i = 1; i <= 100; i++){
//     if( i % 2 === 0 ){
//         console.log(`El numero ${i} es par`)
//     } else{
//         console.log(`El numero ${i} es impar `)
//     }
// }

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

// for(let i = 0; i < carrito.length; i++){
//     console.log(carrito[i])
// }

//While loop

// let i = 0; //Indice

// while(i < carrito.length) { //Condición

//     console.log(carrito[i].nombre)
    
//     i++ //Incremento
// }


//Do While loop

let i = 0;

do {

    console.log(i)
    i++; 

}while( i < 10);