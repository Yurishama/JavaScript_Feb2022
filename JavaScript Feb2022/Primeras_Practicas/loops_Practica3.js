//Ejercicio avanzado

/*
array al revez

Entrada = [4,5,6,7]
Salida = [7,6,5,4]

** no solo numerico
** 10 elementos

Entrada = [4,true,"hola"]
Salida = ["hola",true,4]
*/

//While

var cervezas = 99;
while (cervezas > 0 ){
    console.log("Aún hay " + cervezas + " en el refri, sigue la fiesta")
    cervezas-=2;
}

//For

for(var i=0;i<=3;i++){
    console.log("valor de i: ", i)
}


for(var i=99; i > 0; i-=2){
    console.log("Aún hay " + i + " en el refri, sigue la fiesta")
}

let arreglo = ['a','b','c']

for(var i=0; i < arreglo.length; i++){
    console.log("El elemento del arreglo es ", arreglo[i], "con indice",i)
}


