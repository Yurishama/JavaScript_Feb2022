const operaciones = require('./operaciones');

test('Validar que una funcion nos regrese la cadena Hola Mundo', () =>{
    expect(operaciones.holaMundo()).toBe('¡Hola Mundo!')
});

test('Validar que una funcion nos NO regrese la cadena Adios Amigo', () => {
    expect(operaciones.holaMundo()).not.toBe('Adios Amigo')
});

test('Validar que NO tenga el mismo valor de una variable', () => {
    let hi = 'Hi my friend'
    expect(operaciones.holaMundo()).not.toBe(hi)
});

test('Validar que una funcion no nos regrese un valor Null', () => {
    expect(operaciones.holaMundo()).not.toBeNull()
});

test('Validar que una funcion no nos regrese un valor Undefined', () => {
    expect(operaciones.holaMundo()).not.toBeUndefined()
});

test('Validar que una funcion nos regrese una cadena que no contenga la palabra Aloha', () => {
    expect(operaciones.holaMundo()).not.toContain('Aloja')
});

test('Validar que una funcion nos regrese una cadena que contenga la palabra HOLA', () => {
    expect(operaciones.holaMundo()).toContain('Hola')
});

test('Validar que una No regresa el match de la variable', () => {
    let alo = 'alo'
    expect(operaciones.holaMundo()).not.toMatch(alo)
});

test('Validar que una cadena no regresa Numeros', () => {
    expect(typeof(operaciones.holaMundo())).not.toBe('number')
});

test('Validar que una funcion nos regresa un numero de caracteres', () => {
    expect((operaciones.holaMundo()).length).toEqual(12)
});

test('Validar que una No regresa acentos', () => {
    expect(operaciones.holaMundo()).not.toMatch('[áéíóúÁÉÍÓÚ]*')
});

// Ahora en los nuevos requerimientos se debe agregar una funcion que sume dos numeros

test('Validar que la funcion que suma 2 mas 2 regresa el valor de 4', () =>{
    expect(operaciones.suma(2,2)).toBe(4)
})

test('Validar que la funcion que suma 2 mas 2 NO regrese el valor de 7', () => {
    expect(operaciones.suma(2, 2)).not.toBe(7)
})

test('Validar que la funcion que suma 2 mas 2 regresa un numero', () => {
    expect(typeof (operaciones.suma(2, 2))).toBe('number')
})

test('Validar que la funcion que suma 2 mas 2 No regresa un texto', () => {
    expect(typeof (operaciones.suma(2, 2))).not.toBe('string')
})

test('Validar que la funcion que suma 2 mas 2 regresa un numero positivo', () => {
    expect(operaciones.suma(2, 2)).toBeGreaterThan(0);
})

//ahora dentro de los nuevos requerimientos necesitamos una funcion que se le envia un array
//y regrese el numero de caracteres de cada uno de los elementos strings del array

let arrayPrueba = ['Hidrógeno','Helio','Litio','Carbón','Berilio']

test('Probar que una funcion regresa el numero de caracteres de cada elemento del array', () =>{
    expect(operaciones.cuentaLetras(arrayPrueba)).toEqual([9,5,5,6,7])
});

test('Probar que una funcion NO regresa el numero incorrecto de caracteres de cada elemento del array', () => {
    expect(operaciones.cuentaLetras(arrayPrueba)).not.toEqual([8, 6, 7, 4, 9])
});

//Tamaño
//que no regrese un vacio
//que no sea nulo
//que no tenga un elemnto nulo
//que sea un array
//¿que susede si le mando numeros o boleano?  ['Hidrógeno',true,'Litio','Carbón',9.7]


//Dentro de los requerimientos esta mandar a una funcion un usuario y un password
// y que regrese un objeto con el nombre y el password que se le enviaron

var user = {
    nombre: 'Jonh',
    password: 'Smith'
}

test('Validar que una funcion regresa un objeto con usuario y contraseña', () =>{
    expect(operaciones.createUser('Carlos','asd123')).toEqual({nombre: 'Carlos', password : 'asd123'})
})

test('Validar que una funcion NO regresa un objeto con usuario y contraseña de nuestra variable', () => {
    expect(operaciones.createUser('Carlos', 'asd123')).not.toEqual(user)
})


//Probar una funcion que regresa una cadena en minusculas

test('Validar que la funcion regresa letras en minusculas', () =>{
    expect(operaciones.minusculas('aSDs')).toBe('asds')
})

test('Validar que la funcion regresa Solo se acceptan letras, cuando se envian numros', () => {
    expect(operaciones.minusculas(879)).toBe('Solo se aceptan letras')
})

test('Validar que la funcion regresa Solo se acceptan letras, cuando se envian numeros raros', () => {
    expect(operaciones.minusculas('$&%·$%"·$%·')).toBe('Solo se aceptan letras')
})

test('Validar que la funcion regresa letras en minusculas', () => {
    expect(operaciones.minusculas('arew')).toBe('arew')
})

test('Validar que la funcion regresa letras en minusculas con numero', () => {
    expect(operaciones.minusculas('ar3ew')).toBe('ar3ew')
})

test('Validar que la funcion regresa Solo se acceptan letras, cuando se le envia un boleano', () => {
    expect(operaciones.minusculas(true)).toBe('Solo se aceptan letras')
})
