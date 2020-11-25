/*
    ===== Código de TypeScript =====
*/
function decoradorClase<T extends {new (...args:any[]):{}}>( constructor: T ) {
    return class extends constructor {
        miSuperPropiedad = 'nueva propiedad desde el decorador';
        saludo = 'Hola Mundo';
    }
}

@decoradorClase
class MiSuperClase {

    imprimir(){
        console.log('Imprimir fue llamado')
    }
}


console.log( MiSuperClase );

// const nuevaInstancia = new MiSuperClase();

// console.log(nuevaInstancia)

