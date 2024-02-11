//3 valores para los promises
//Pending : en espera
// Fulfilled : Ya se cumplió el promise
// Rejected : No se pudo cumplir

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado'); //Se cumple
    } else{
        reject('No se pudo iniciar sesión'); //No se cumple
    }
});

console.log(usuarioAutenticado);

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error));

