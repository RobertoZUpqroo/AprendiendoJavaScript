//This

const reservacion = {
    nombre : 'Roberto',
    apellido : 'Zetina',
    total : 5000,
    pagado : false,
    informacion : function(){
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}

reservacion.informacion();