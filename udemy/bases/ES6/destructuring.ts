(()=>{
    type Avengers = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    }

    const avengers: Avengers = {
        nick: 'Samuel L Jackson',
        ironman: 'Robert Downey JR',
        vision: 'Paul Bettany',
        activo: true,
        poder: 100.123123
    }

    //Destructuring de parametros:
    //Estoy desestructurando ironman y después el resto del objeto
    const printAvenger = ({ ironman, ...resto }: Avengers):void=>{
        console.log(ironman)
        console.log(resto) // El resto del objeto sin la propiedad ironMan
    }

    printAvenger(avengers)

    //////////////////////////////////////////////

    const avengersArr: string[] = ['Cap America', 'Ironman', 'Hulk'];

    //Destructuring por posicion:
    const [ , ironman, ] = avengersArr
    console.log(ironman)

    const [capitan, , ] = avengersArr
    console.log(capitan)

    const [pos1, pos2, pos3] = avengersArr

    


     

})()