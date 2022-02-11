
let lista = " ";

function insertarNombre(nombre) {

    let opcion;

    if (nombre == "" || nombre == null) {
        console.log("El nombre no puede estar vacio");
        opcion = " ";
    } else {
        opcion = "  " + nombre + " ";
        lista += opcion;
        console.log("Se ha insertado un nombre");
    }

    return ("La lista es: ", lista);
}

console.log(insertarNombre())
console.log(insertarNombre("Casa"))
console.log(insertarNombre("Luisa"))
console.log(insertarNombre('Jose'))