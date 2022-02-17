const impresion =  requiere('./impresion');

Test('Validar que se imprima una cadena de testo', ()=>{
    expect(impresion.holaMundo()).toBe('¡Hola Mundo!');
})