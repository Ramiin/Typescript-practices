//Parametros por defecto
//Los parametros opcionales siempre van "al final"
(()=>{

    const fullName = (firstName:string, lastName?:string, upper: boolean = false): string => {
        if(upper){
        return `${firstName} ${lastName || 'no last name'}`.toLocaleUpperCase()

        }else {
            
            return `${firstName} ${lastName || 'no last name'}`
        }
    }


    const nameWithDefault = fullName('Tony', 'Stark', true)
    const nameWithoutDefault = fullName('Tony', 'Stark')

    console.log(name)
})()