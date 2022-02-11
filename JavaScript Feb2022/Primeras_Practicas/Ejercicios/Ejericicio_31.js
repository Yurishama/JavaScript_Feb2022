function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generarNumeros() {

    let elementos;

    let opcionesGeneradas = "";

    for (let i = 0; i < 10; i++) {
        opcionesGeneradas += " " + getRandomInt(1, 100) + " ";
    }

    elementos = opcionesGeneradas;
    return elementos;

}

console.log(generarNumeros())