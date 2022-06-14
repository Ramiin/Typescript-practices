(()=>{


    // class Avenger {
    //     private name: string;
    //     public team: string;
    //     public realName: string;
    //     static avgAge: number = 35;
    //     constructor(name:string, team:string, realName?: string) {
    //         this.name = name;
    //         this.team = team;
    //         this.realName = realName;

    //     }
    // }

    // const antman: Avenger = new Avenger('Antman', 'Team Cap', 'Scott')
    // console.log(antman) //Tengo acceso a todas las propiedades que esten en public, private y static no.
    // console.log(Avenger.avgAge) // -> 35  las propiedades static se pueden ver haciendo referencia a la CLASE, no a la instancia.


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////FORMA CORTA DE ASIGNAR PROPIEDADES

    class Avenger {
            // private name: string;
            // public team: string;
            // public realName: string;
            static avgAge: number = 35;
            static getAvgAge() {
                return this.name //Name es una propiedad de las clases, basicamente es su nombre, en este caso es Avenger // -> Avenger
            }
            constructor(
                private name:string, 
                private team:string, 
                public realName?: string) {}
                //Si no se coloca private o public, se infiere que es publica la propiedad o metodo, etc.
            bio(){
                return `${this.name} (${this.team})`
            }
        }
    const antman: Avenger = new Avenger('Antman', 'Team Cap', 'Scott')

    console.log(antman.bio) // -> Antman (Team cap)



})()