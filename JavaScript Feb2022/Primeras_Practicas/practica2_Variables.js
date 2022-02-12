//Variables

var saida;
var reyes;

console.log('############################   Variables dinamicas  ')
//Variables dinamicas
console.log(typeof saida);

saida = "Saida";
console.log(typeof saida);

saida = true;
console.log(typeof saida);

saida = 4213;
console.log(typeof saida);

saida = [32,4]
console.log(typeof saida);

saida = {casa:4}
console.log(typeof saida);

//Constantes
const accesorio = "mouse";
console.log("Constante: ", accesorio)
console.log(accesorio + 67)
console.log("Constante: ", accesorio)
console.log("Longitud Constante: ", accesorio.length)

let ancho = 16;
let y = 1234e5;
let x = 1234e-5;
let lastName = 'Johnson';

console.log(ancho,y,x,lastName)
console.log(ancho+2,y+2,x+y,lastName+x)
console.log(ancho,y,x,lastName)

let respuesta1 = "It's alright";
console.log (respuesta1)
respuesta1 ='It"s alright';
respuesta1 ='It\'s %·$&&/$"·$%&&/)($%alright';

//Expresiones regulares
console.log (respuesta1)
// No es correcto = respuesta1 ="It"s alright";

let num = 4;
console.log(++num)
console.log(num)


//Arrays

var dogs = ['boxer','Rex','Toby',9];
console.log(dogs)

dogs = true;

console.log(dogs)

dogs = ['boxer','Rex','Toby',9,98,,true];
console.log(dogs)

console.log(dogs[0])
console.log(dogs[5])

dogs.push('Solovino')
dogs.push(78)
console.log(dogs)

dogs.pop()
dogs.pop()
dogs.pop()
console.log(dogs)

dogs.shift()
console.log(dogs)
console.log(dogs[0])
console.log(dogs[8])
console.log(dogs)

var dosPerritos = dogs.splice(0,1)
console.log(dogs)
console.log(dosPerritos)

dogs[8] = true
console.log(dogs)
dogs[6] = true
console.log(dogs[6])

console.log(dogs.length)
console.log(dogs[0].length)

//ejemplo
var arreglo23 = []
arreglo23[5] = 8
console.log(arreglo23.shift())
arreglo23.push(2)
arreglo23[0] = 87
console.log("1: ", arreglo23)
arreglo23.unshift(5)
console.log("2: ", arreglo23)
console.log(arreglo23[0])
console.log(arreglo23)

//Variables Null

var emptyVar;
var undefinedVar;
console.log(emptyVar)
emptyVar = null;
console.log(emptyVar)

console.log(1 + null);
console.log(1 + emptyVar);
console.log(1 + undefined);
console.log(1 + undefinedVar);


//NaN = not-A-Number


