(()=>{

    //Las interfaces en funciones nos va a servir para limitar una funcion o que luzca de cierta manera

    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let addNumbersFunction: addTwoNumbers;

    addNumbersFunction = (a: number, b: number)=>{
        return 10;
    }

})()