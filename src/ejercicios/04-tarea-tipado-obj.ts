/*
    ===== Modificaciones de HTML =====
*/



/*
    ===== Código de TypeScript =====
*/

// Crear una interfaz, que nos ayude con el tipado de este objeto
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion,
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais : string;
    ciudad: string;
}


const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY',
    },
    mostrarDireccion() {
        // return this.nombre + ' ' + this.direccion.pais + ', ' + this.direccion.ciudad
        const { ciudad, pais } = this.direccion;
        // const { nombre, direccion:{ ciudad, pais } } = this;
        return `${ this.nombre } ${ ciudad }, ${ pais }`;
    }
}

console.log( superHeroe.mostrarDireccion() );