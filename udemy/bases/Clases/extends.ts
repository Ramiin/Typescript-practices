(()=>{


    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Constructor Avenger llamado.')
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName)
        }

        getFullNameDesdeXmen(){
            super.getFullName() //Llamamos al metodo geFullName de la clase "padre" atraves del super... funciona solo si el metodo del padre es protected, si es private solo esta disponible para la clase padre.
        }
    }

    /*Diferencia entre protected y private:
    Private solo van a tener acceso dentro de la clase que se define
    Protected tiene acceso a las clases que extiendan de la clase "padre"
    
    */
    const ironman = new Avenger('Ironman', 'Tony Stark')
    const wolverine = new Xmen('Wolverine', 'Logan', true)

    console.log(wolverine)



})()