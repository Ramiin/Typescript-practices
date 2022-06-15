(()=>{

    //La interface no lleva logica al definir un metodo (ver el metodo getFullAdress de la interface Client. Solo indica "como debe lucir" ese metodo
    //El orden de las adress va de principal a secundarias o anidadas, en este caso parece que la usamos antes de definirla pero funciona:

    interface Client {
        name: string;
        age?: number;
        adress: Adress;
        getFullAdress( id: string ): void
    }

    interface Adress {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'Oscar',
        age: 25,
        adress: {
            id: 124,
            zip: 'KY2 C',
            city: 'México'
        },
        getFullAdress( id: string ){
            return this.adress.city
        }
    }

    const client2: Client = {
        name: 'Melisa',
        age: 30, 
        adress: {
            city: 'Toronto',
            id: 120,
            zip: 'HOLA'
        },
        getFullAdress( id: string ){
            return this.adress.city
        }
    }


    



})()