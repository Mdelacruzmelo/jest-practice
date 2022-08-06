test("Mi primer test", () => {

    const numeros = [1, 2, 3, 4, 5, 6]
    numeros.pop()
    expect(numeros).toEqual([1, 2, 3, 4, 5])
    expect(numeros).toBeDefined()
    expect(numeros).not.toBeUndefined()
    expect(numeros).not.toBeNull()
    expect(numeros).toBeTruthy()
    expect(numeros).not.toBeFalsy()
    expect(numeros.length).toBe(5)
    expect(numeros).toContain(3)

    const value1 = 1
    expect(value1).toBe(1)

    const valueDivision = 2 / 4
    expect(valueDivision).toBeCloseTo(0.504, 2)

    const miPrimeraFuncion = (arr) => {
        if (arr.length >= 5)
            throw new Error("Este array tiene más de 4 elementos")
    }

    expect(() => miPrimeraFuncion(numeros)).toThrow()
    expect(() => miPrimeraFuncion(numeros)).toThrow("Este array tiene más de 4 elementos")
    expect(() => miPrimeraFuncion(numeros)).toThrow(Error)

})