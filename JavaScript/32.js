//Async / Await

function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('Descargando Clientes ... espere...');

        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        }, 5000);

    });
}

function descargarUltimoPedidos(){
    return new Promise(resolve => {
        console.log('Descargando Pedidos ... espere...');

        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}

async function app(){
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimoPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimoPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();
