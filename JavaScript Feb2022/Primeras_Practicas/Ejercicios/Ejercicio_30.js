function mayorNum(num1, num2) {
    
    if (num1 && num2) {
        if (num1 >= num2) {
            if (num1 == num2) {
                //console.log("Los numeros son iguales")
                return ("Los numeros son iguales");
            } else {
                //console.log("El num1 es mayor")
                return ("El num1 es mayor");
            }
        } else {
            //console.log("El num2 es mayor")
            return ("El num2 es mayor");
        }
    } else {
        //console.log("Uno o los dos numeros no se relleno")
        return ("Uno o los dos numeros no se relleno");
    }
    //return true;
}

console.log(mayorNum(6,9))
console.log(mayorNum(28, 9))
console.log(mayorNum(7, 9))
console.log(mayorNum())
console.log(mayorNum(2))
console.log(mayorNum(2,2))