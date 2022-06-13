(()=>{
    type Avenger = {
        nombre: string,
        weapon: string
    }

    const ironman: Avenger = {
        nombre: 'IronMan',
        weapon: 'Armor suit'
    }

    const capAmerica: Avenger = {
        nombre: 'Capitan America',
        weapon: 'Shield'
    }

    const thor: Avenger = {
        nombre: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ ironman, capAmerica, thor] 

    for (let avenger of avengers){
        console.log(avenger)
    }

})()