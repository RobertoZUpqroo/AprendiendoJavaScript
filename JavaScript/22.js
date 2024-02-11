// const puntaje = 1000;

// if(puntaje == 1000){
//     console.log('El puntaje es 1000');
// } else{
//     console.log('El numero es diferente de 1000');
// }

// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito){
//     console.log('El usuario puede pagar');
// } else{
//     console.log('Fondos insuficientes');
// }

const rol = 'ADMINISTRADOR';

if(rol === 'ADMINISTRADOR'){
    console.log('Acceso a todo el sistema')
} else if(rol === 'EDITOR'){
    console.log('Eres editor, permisos limitados')
} else {
    console.log('No tienes acceso al sistema')
}