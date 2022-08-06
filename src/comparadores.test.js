
test('null', () => {

    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('asignación de un objeto', () => {
    const datos = { uno: 1 };
    datos['dos'] = 2;
    expect(datos).toEqual({ uno: 1, dos: 2 });
});

test('dos mas dos', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);

    // toBe y toEqual son equivalentes para números enterios
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('agregando números de punto flotante', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); // Esto NO funciona, 3.000004
    expect(value).toBeCloseTo(0.3); // Esto funciona.
});

test('no hay I en Team', () => {
    expect('team').not.toMatch(/I/);
});

test('hay "stop" en Christoph', () => {
    expect('Christoph').toMatch(/stoph/);
});

const listaDeCompras = [
    'pañales',
    'pañuelos',
    'bolsas de basura',
    'toallas de papel',
    'leche',
];

test('la leche se encuentra en la lista de compras', () => {
    expect(listaDeCompras).toContain('leche');
    expect(new Set(listaDeCompras)).toContain('leche');
});

function compilarCódigoAndroid() {
    throw new Error('Usted está usando el código incorrecto');
}

test('La compilacion de android va por buen camino', () => {
    expect(() => compilarCódigoAndroid()).toThrow();
    expect(() => compilarCódigoAndroid()).toThrow(Error);

    // Puede usar también el mensaje de error exacto o una expresión regular
    expect(() => compilarCódigoAndroid()).toThrow('Usted está usando el código incorrecto');
    expect(() => compilarCódigoAndroid()).toThrow(/Usted/);
});