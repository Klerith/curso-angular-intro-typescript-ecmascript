/*
    ===== Modificaciones de HTML =====
*/



/*
    ===== Código de TypeScript =====
*/
interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150,
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350,
}



// barrer un arreglo de productos
// y retornará el ISV.... 15%
export function calculaISV( productos: Producto[] ): [number, number] {
    
    let total = 0;
    let ISV   = 0;

    productos.forEach( ({ precio }) => {
        total += precio;
    });

    return [total, total * 0.15];
}

export const productos = [];
productos.push( telefono, tableta )

const [total, ISV] = calculaISV( productos  );
console.log( total ,ISV );