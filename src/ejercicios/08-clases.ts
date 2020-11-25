
/*
    ===== Modificaciones de HTML =====
*/



/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    // nombre: string;
    // direccion: string;

    // constructor(){
    //     this.nombre = 'sin nombre';
    //     this.direccion = 'sin direccion';
    // }
    constructor(
        public nombre: string,
        public direccion: string = 'sin direccion'
    ){}
}

class Heroe extends PersonaNormal {
    // public alterEgo: string;
    // public edad: number;
    // private nombreReal: string;

    // constructor( alterEgo: string) {
    //     this.alterEgo = alterEgo;
    //     this.edad = 0;
    //     this.nombreReal = '';
    // }
    constructor( 
        public alterEgo: string,
        public edad: number = 0,
        private nombreReal: string = ''
    ){
        super( nombreReal );
    }
}



const ironman = new Heroe('Ironman', 10, 'Tony Stark');

console.log(ironman)