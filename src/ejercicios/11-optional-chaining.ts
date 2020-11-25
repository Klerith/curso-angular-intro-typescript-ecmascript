/*
    ===== Código de TypeScript =====
*/
interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando',
    hijos: ['Natalia', 'Gabriel']
}

const pasajero2: Pasajero = {
    nombre: 'Juan',
}


function imprimeHijos( pasajero: Pasajero ) {

    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log( cuantosHijos );
}


imprimeHijos( pasajero1 );
imprimeHijos( pasajero2 );










