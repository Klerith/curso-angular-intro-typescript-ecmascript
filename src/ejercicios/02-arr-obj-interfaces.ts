/*
    ===== Modificaciones de HTML =====
*/



/*
    ===== Código de TypeScript =====
*/
// Arreglos
// const habilidades: string[] = ['Bash','Counter','Healing', 123, true, false, 123454];
const habilidades: string[] = ['Bash','Counter','Healing'];
console.table( habilidades );

// Interfaces
// Es un tipo de dato especial de TypeScript
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}


// Objetos
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing'],
    puebloNatal: 'Pueblo Paleta'
}

console.table( personaje );

