//Basicamente es para agrupar "categorias", es como una miniclase, puede llevar cualquier codigo y solo se expone al mundo exterior lo que indiquemos con export
//

namespace Validations {

    export const validateText = ( text: string ): boolean => {
        return (text.length > 3) ? true : false
    }

    const validateDate = (myDate: Date): boolean => {
        return (isNaN( myDate.valueOf() )) ? false : true
    }

}

console.log(Validations.validateText('Hola!"')) //Si validateText no tiene un export antes, daría un error.