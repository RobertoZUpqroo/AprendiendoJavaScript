//Fetch API

//Permite enviar información al servidor u obtener información en tiempo real

//Puedes obtener un archivo local o una respuesta de un servidor Texto o JSON

//JSON Es JavaScript Object Notation (Lenguaje de transporte de datos)
//Se consume por medio de Fetch API, por lo tanto sin importar el lenguaje back end
//Se pueden enviar datos JSON desde el backend para que lo consuma JS

async function obtenerEmpleados(){
    
    const archivoURL= 'Empleados.json';

    // fetch(archivoURL)
    //     .then( resultado => resultado.json())
    //     .then ( datos => {
    //         const { empleados } = datos;
            
    //         empleados.forEach( empleado => {
    //         console.log(empleado);

    //         })
    //     }); 

    const resultado = await fetch(archivoURL);
    const datos = await resultado.json();
    console.log(datos);

}

obtenerEmpleados();