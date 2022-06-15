(()=>{


    //Diferencia entre tipos e interfaces:
    //Tipo: no puede extenderse, es fijo, se usa por ej. en Redux cuando sabes que un tipo de dato no va a cambiar
    //Interface se pueden extender o expandir, agregar propiedades, etc

    //Escrito en Type:
    // type Hero = {
    //     name: string;
    //     age?: number;
    //     powers: string[];
    //     getName?: () => string
    // }

    //Escrito en interface
    interface Hero  {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    } //Se establece el tipo de flash automaticamente, por lo que solo recibe las propiedades que se especificaron aqui

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
        getName(){
            return this.name;
        }
    }



})()