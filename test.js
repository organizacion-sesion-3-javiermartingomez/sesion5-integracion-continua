const esPar = require('./par');

test('El número 2 es par', () => {
    expect(esPar(2)).toBe(true);
});

test('El número 3 no es par', () => {
    expect(esPar(3)).toBe(false);
});

test('El número 0 es par', () => {
    expect(esPar(0)).toBe(true);
});