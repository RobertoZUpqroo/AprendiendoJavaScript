//Declaración de función
function sumar(numero1, numero2) { //numero1, numero2 parametros
    console.log(numero1 + numero2);
}
sumar(10, 10); //Argumentos o valores reales

//Expresión de la función
const sumar2 = function(numero1 = 0, numero2 = 0) {
    console.log(numero1 + numero2);
}

//Parametro por default nos permite ejecutar las funciones sin necesidad de poner todos los argumentos de la función
sumar2(5);
sumar2();