//primeras pruebas

test('Validar el texto de una constante',()=>{
    const hola = 'Hola mundo';
    expect(hola).toBe('Hola mundo');
});

test('Pruebas de un objeto', () => {
    const data = { one: 1 };
    data['two'] = 2;
    console.log(data)
    expect(data).toEqual({ one: 1, two: 2 });
});

test('Validaciones usando un for', () =>{
    for(var i=0; i<10 ; i++){
        for(var j=1 ; j<10 ; j++){
            expect(i+j).not.toBe(0)
        }
    }
});

test('Validar la suma de numeros foltantes', () =>{
    var resultado = 0.2 + 0.4;
    console.log(resultado)
    //expect(resultado).toBe(0.6);
    //expect(resultado).toEqual(0.6)
    expect(resultado).toBeCloseTo(0.6)
});

test('Validar que esta cadena no contiene la letra U', () =>{
    expect('Williverto').not.toMatch(/U/);
});

test('Validar que esta cadena es lo esperdo', () => {
    const palabra = 'casa';
    expect(palabra).toMatch('casa');
});

test('Validar que una cadena contenga un texto', ()=>{
    const palabra = 'Computadora';
    expect(palabra).toContain('Comp');
});

const listaDeCompras = ['jabon','arroz','pasta','papel'];

test('Validar que la lista de pruebas contiene arroz', ()=>{
    expect(listaDeCompras).toContain('arroz');
});

test('Validar que la lista de pruebas no contiene azucar', () => {
    expect(listaDeCompras).not.toContain('azucar');
});

test('Validar un valor que no es nullo', () =>{
    var n = null;
    var z = 0;
    var r;

    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
    console.log(r)
    expect(r).toBeUndefined();

    expect(z).not.toBeNull;
    expect(z).not.toBeUndefined();
})