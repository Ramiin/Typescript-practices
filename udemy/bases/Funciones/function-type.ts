(()=>{

    const addNumbers = (a:number, b:number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = ()=> `El mundo está salvado!`

    let myFunction: (y:number, z:number) => number;

    // myFunction=10; //Da error porque no es una funcion
    // console.log(myFunction)

    myFunction=addNumbers //Esta es la unica funcion compatible con lo que describimos en myFunction ya que recibe dos number y retorna number
    console.log(myFunction(1 , 2))

    // myFunction=greet   //DA ERROR; NO CUMPLE CONDICIONES
    // console.log(myFunction('Oscar'))

    // myFunction=saveTheWorld //DA ERROR; NO CUMPLE CONDICIONES
    // console.log(myFunction())


})()