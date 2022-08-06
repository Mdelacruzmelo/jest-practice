

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('peanut butter')
        }, 100)
    })
}

test('el dato es peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('el dato es peanut butter', async () => {
    const data = await fetchData()
    expect(data).toBe('peanut butter')
});

test('the fetch fails with an error', async () => {
    expect.assertions(2)
    try {
        const data = await fetchData()
        expect(data).toBe('peanut butter')
        expect(data).toMatch(/butter/)
    } catch (err) {
        expect(err).toMatch('error')
    }
})

// ------- CALLBACKS -------
// ¡No hagas esto!
/* test('the data is peanut butter', () => {
    function callback(error, data) {
        if (error) {
            throw error;
        }
        expect(data).toBe('peanut butter');
    }
    fetchData(callback);
}); */

// ¡Debes hacer esto! PERO NO FUNCA
/* test('the data is peanut butter', done => {
    function callback(error, data) {
        if (error) {
            done(error);
            return;
        }
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }
    fetchData(callback);
}); */

test('el dato es peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
});

// Para que la promesa falle
/* test('the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error');
  }); */