(()=>{

    /* 
    NOTAS:
    No se puede extender de interfaces, solo implementar una interface.
    */

    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number): string
    }

    interface Human {
        age: number;
    }

    //Se usa implements diciendole que propiedades va a llevar la clase, si vamos a implementar mas de una interface se separa por comas como en el ejemplo de abajo
    //Se puede observar como lleva las propiedades de Human y Xmen, si falta alguna va arrojar error
    class Mutant implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;

        mutantPower( id: number ){
            return this.name + ' ' + this.realName
        }
    }

})()