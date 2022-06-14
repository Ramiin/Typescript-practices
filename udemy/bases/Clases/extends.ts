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

        get fullName(){
            //Esto es un getter, al llamarlo, no se ejecuta, se usa como propiedad. Ver en los console log de wolverine abajo
            return `${this.name} - ${this.realName}`
        }

        set fullName( name: string ) {
            //Esto es un setter, recibe SOLO UN argumento y no retorna nada, se puede llamar igual que un getter, los diferencia la palabra reservada set/get
            this.name = name

        }

        getFullNameDesdeXmen(){
            console.log(super.getFullName()) //Llamamos al metodo geFullName de la clase "padre" atraves del super... funciona solo si el metodo del padre es protected, si es private solo esta disponible para la clase padre y typescript tiraria error aqui
        }
    }

    /*Diferencia entre protected y private:
    Private solo van a tener acceso dentro de la clase que se define
    Protected tiene acceso a las clases que extiendan de la clase "padre"
    
    */
    const wolverine = new Xmen('Wolverine', 'Logan', true)
    console.log(wolverine.fullName) //GETTER: Es un método pero el getter tiene la caracteristica de que no necesita los () para ejecutarse

    wolverine.fullName = 'Fernando' //Haciendo esta asignación se ejecuta el setter fullName con el valor Fernando

    console.log(wolverine.fullName) // -> Fernando - Logan

    //TANTO AL SETTER COMO AL GETTER SE LE PUEDE APLICAR LOGICA

  



})()