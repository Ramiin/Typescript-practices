(()=>{
     

    class Avenger {
        constructor(name = 'No name', power= 0){
            this.name = name
            this.power = power
        }
    }

    class FlyingAvenger extends Avenger {
        constructor(name, power){
            super(name, power) //Llama al constructor del padre con los args que necesita
            this.flying = true
        }
    }

    const hulk = new Avenger('Hulk', 100000)
    console.log(hulk)
    
    const falcon = new FlyingAvenger('Falcon', 100)
    console.log(falcon)

})()