const operaciones = {
    holaMundo: () => '¡Hola Mundo!',
    suma: (num1,num2) => num1 + num2,
    cuentaLetras: (array1) => array1.map(s => s.length),
    createUser : (name,pass) =>{
        const user = {nombre:name,password:pass}
        return user
    },
    
    cesarfuncion: (cadena) => {
        if (typeof cadena === 'string' && cadena.match(/^[a-z0-9]+$/i)) {
            cadena = cadena.toLowerCase();
            return cadena;
        } else {
            return cadena = 'Solo se aceptan letras'
        }

    },

    yuri_minusculas : (words) => {
    if ((typeof (words)) == 'number') {
        return 'Solo se aceptan letras'
    } else {
        (words = words.replace(/\s+/g, '-').toLowerCase())
        return words
    }
}

}

module.exports = operaciones