//Parametros opcionales
//Se coloca un simbolo de pregunta en el argumento.
(()=>{

    const fullName = (firstName:string, lastName?:string): string => {
        return `${firstName} ${lastName || 'no last name'}`
    }


    const name = fullName('Tony')

    console.log(name)
})()
