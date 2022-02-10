//Condicionantes
//If if/else

var texto =  'Servidor ON';

if (texto == 'Servidor OFF'){
    console.log('Test pass')
} else {
    console.log('Test fail')
}

//Ejercicio avanzado = Ordenar un arreglo con burbuja

//¿Qué hace esto?
/*
if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

  if (last=0){
      if (variable =5){
          variable2 = 7
      }
  }

if( num <= num2 && foo > BarProp){
        num = 8
  }

if(num <= num2 || foo > BarProp){
    num = 8
}

if(true){
    num = 8
}

var notTrue =  false
if(notTrue){
    num = 8
}

if(!notTrue){
    num = 8
}
*/

// Switch

var rango = "Coronel";

switch(rango){
    case "Soldado razo":
        console.log("No autorizado")
    case "Comandante":
        console.log("Necesita autorización de su superior")
    case "Capitan":
        console.log("Necesita autorización de su superior capitan")
    case "Coronel":
        console.log("Autorizado")
    case "General":
        console.log("Usuario Autorizado")
    default:
        console.log("Respuesta Usuario no autorizado")
        break;
}

//Tarea

var opciones = 43

switch(this.opciones){
    case '2':
        console.log("No autorizado")
        break;
    case '43':
        console.log("Necesita autorización")
        break;
    case '54':
        console.log("Autorización requerida")
        break;
    default:
        console.log("Respuesta default: Usuario no autorizado")
        break;
}

var dealer = 4
var x = this.dealer;
switch (true) {
    case (x < 5):
        console.log("less than five");
        break;
    case (x < 9):
        console.log("between 5 and 8");
        break;
    case (x < 12):
        console.log("between 9 and 11");
        break;
    default:
        console.log("none");
        break;
}
