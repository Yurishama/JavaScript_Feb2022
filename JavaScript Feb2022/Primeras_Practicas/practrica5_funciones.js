//Funciones

const { functionsIn } = require("lodash");

// Procedimientos o conjunto de declaraciones, para hacer una tarea especifica

var elNombre;
elNombre = 'Yuri';

console.log(miNombre(elNombre))

function miNombre(name){
    return "Hola " + name;
}

function suma(num1,num2){
    return num1+num2;
}
console.log(suma(4,5))


function cuadrado(a){
    return a*a;
}

console.log(cuadrado(2))


function checkNumero(numero){
    if(numero === 40){
        //console.log("Correcto")
        return('correcto')
    } else {
        //console.log('Incorrecto')
        return('incorrecto')
    }
}

console.log(checkNumero(3));
checkNumero(40);


//Funcion que que diga si un numero es impar o par;

function parImpar(num){
    if(num % 2 ==0)
        return 'Es un numero par'
    else
        return 'No es un numero par'
}

console.log(" El mumero 4 es: ", parImpar(4))
console.log(" El mumero -7 es: ", parImpar(-7))

//Tarea: encontrar numeros impares y pares en un arreglo con numeros del 0 al 100

var arreglo = [];
for( var i=0;i<=100;i++){
    arreglo.push(i)
}
//Arreglo lleno con numeros 100 numeros random 

var arreglo2 = [];
for (var i = 0; i <= 100; i++) {
    arreglo2.push(Math.floor(Math.random()*(100-1))+1)
}
console.log(arreglo2)

//  Cambiar el orden de un arreglo input [6,7,8] output [8,7,6]  Usando una funcion ;)



// Tarea: Three company; input asd output aaasssdd   * Usando una funcion

// input yuri output yyyuuurrriii

// chatAt(i)   * separar una ltera de una cadena   cadena.charAt(*la letra que queremos separar)
var cadena = 'yuri';
var n = cadena.charAt(3);
console.log(n)


//Opcionales **

//TAREA: Palindromo "ana", "oso", "casa"

/*
input   output
casa    No es un palindromo
oso     Si es un palindromo
ana     Si es un palindromo
*/


/*Tarea: Crear una funcion que regrese la siguente cadena
input       output
Marcia      una manzana para Marcia y una manzana para mi
Paco        una manzana para Paco y una manzana para mi
""          una manzana para ti y una manzana para mi
87987       Error

*/


//Una funcion dentro de una funcion

function ejecutar(algunaFuncion, valor){
    algunaFuncion(valor);
}

function decir(palabra){
    console.log(palabra);
}

ejecutar(decir,'hola');
