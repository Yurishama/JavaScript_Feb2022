//Operadores
//Aritméticos, asignación, de comparacion, binarios, Lógicos, otros.


//Aritméticos
var a = 1;
let b = 45;
var c = 6;
var d;
d = a + b;

console.log(d)
console.log("Resultado de la variable d: ",d)
console.log(a+b)
console.log(8+5)
console.log(a,b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(++a)
console.log(a)
console.log(--a)

console.log("cadena",567 + '9');
//Concatenar
console.log('cadena1'+'cadena2')
console.log('cadena1','cadena2')

const cinco = 5;
const diez = 10;

console.log("Quince es " + (cinco + diez) + ' y no ' + (2 * diez + 2) + '.');

// Operadores de asignación (operadores del signo igual)

var numero = 8;
console.log('Variable: ', numero )
console.log("Suma: ", numero +=2)
numero/= 2  //5  numero = numero / 2
console.log( numero/=2)
console.log(numero*=25)
numero = 5;
console.log(numero %= 10)

let text1 = 'John';
let text2 = 'Smith';
let text3 = text1 + text2;

console.log(text3)

var mycadena = 'alfa';
//mycadena += 'beto'
console.log(mycadena += 'beto')
console.log(mycadena)

let x = 5 + 5; //numerico
let y = '5' + 5;  //candea mas numerico
let z = 'hello' + 5; //candea mas numerico
console.log(x,y,z)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(typeof true)
console.log(typeof 'true')

// Desestructuración

var foo = ['one','two','three','four'];
console.log (foo)

var one = foo[0];
var two = foo[1];
var three = foo[2];
console.log(one,two,three)

var [one,two,three] = foo;
console.log([one,two,three]);
console.log([one])
console.log([three])

//Operadores de comparación

var var1 = 3;
var var2 = 5;

console.log(3 == var1)
console.log("3" == var1)
console.log(3 == '3')
console.log(3 === '3')
console.log(var1 != 4)
console.log(var2 != 3)
console.log(var2 != '3')
console.log(var2 != '5')
console.log(var1 !== '3')
console.log(3 !== '3')
console.log(var1 > var2)
console.log('12'>2)
console.log(var2 >= var1)
console.log(var1>=3)

//Operadores Logicos
console.log ('############################   AND  ')
//AND

console.log( true && true)
console.log( true && false)
console.log(false && false)
console.log(false && (3 ==4))
console.log('gato' && 'perro')  //Tarea: Investigar 
console.log(false && 'gato')
console.log('gato' && false)
console.log('gato' && true)

console.log ('############################   OR ')
//OR
var compara1=true || true

console.log(true || true)
console.log( false || true)
console.log(true || false)
console.log(false || false)
console.log(false || (3==4))
console.log('gato' || 'perro')  //Tarea
console.log(false || 'gato')
console.log('gato' || false)
console.log('gato' || true)

console.log ('############################   NOT ')
//NOT

console.log(!true)
console.log(!false)
console.log(!'gato')

//Pendiente despues de tarea
console.log('gato' || false && !true || 'perro')