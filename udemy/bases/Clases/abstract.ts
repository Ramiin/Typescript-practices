(()=>{

    //Las clases abstractas sirven para crear otras clases o asegurarnos de que otras clases impkementen lo que nosotros necesitamos

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){
            
        }
    }

    //Se pueden usar las clases como si fueran un type:
    // const wolverine: Mutante = new Mutante('Wolverine', 'Logan');

    // const wolverine = new Mutante('Wolverine', 'Logan'); -> Tira error porque abstract solo es para crear otra clase a partir de Mutante


    class Xmen extends Mutante {
        salvarMundo(){
            return 'Mundo a salvo'
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    console.log(wolverine.salvarMundo())


    class Villain extends Mutante {
        conquistarMundo(){
            return 'Mundo conquistado'
        }
    }
    const magneto = new Villain('Magneto', 'Magnus')
    console.log(magneto.conquistarMundo())





//Acá la ayuda nos muestra las propiedades/metodos/etc que tenemos disponibles en la clase abstracta Mutante.
    const printName = (character: Mutante)=>{
        console.log(character.realName)
    }

    printName(wolverine)





})()