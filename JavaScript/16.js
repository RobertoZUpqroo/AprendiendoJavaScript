//Funciones

//Declaración de función

function sumar(){
    console.log(10 + 10);
}
sumar();
//Hoisting significa que JavaScript funciona en dos vueltas
//Etapa creación: Primero se registran las funciones y variables
//Etapa ejecución: Se manda a llamar el codigo


//Expresión de la función

const sumar2 = function(){
    console.log(3 + 3);
}
sumar2();

//IIFE sirven para proteger las variables de las funciones con otros archivos
// (function() {
//     console.log('Esto es una función');
// })();