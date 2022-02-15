const suma = require('./suma');

test('Comparar que la suma de 3 y 2 es igual a 5',() =>{
    expect(suma(3,2)).toBe(5);
});

test('Comparar que la suma de 5 y 2 no es igual a 10', () => {
    expect(suma(3, 2)).not.toBe(10);
});

test('validar que la suam de dos numeros el resulado es mayor a un num', () =>{
    expect(suma(2,3)).toBeGreaterThan(4);
    expect(suma(3,9)).toBeGreaterThanOrEqual(12);
});

test('validar la suma de dos numeros es menor que',() =>{
    expect(suma(6,4)).toBeLessThan(11);
    expect(suma(6,8)).toBeLessThan(20);
});