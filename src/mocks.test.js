import axios from 'axios';

const mockCallback = jest.fn(x => 42 + x);

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

forEach([0, 1], mockCallback);

// The mock function is called twice
expect(mockCallback.mock.calls.length).toBe(2);

// The first argument of the first call to the function was 0
expect(mockCallback.mock.calls[0][0]).toBe(0);

// The first argument of the second call to the function was 1
expect(mockCallback.mock.calls[1][0]).toBe(1);

// The return value of the first call to the function was 42
expect(mockCallback.mock.results[0].value).toBe(42);

// PROPERTY: .mock
const myMock1 = jest.fn();
const a = new myMock1();
// console.log(myMock1.mock.instances);
// > [ <a> ]

const myMock2 = jest.fn();
const b = {};
const bound = myMock2.bind(b);
bound();
// console.log(myMock2.mock.contexts);
// > [ <b> ]

//////////////// mockReturnValueOnce //////////////// /

const myMock = jest.fn();
// console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

// console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true

const filterTestFn = jest.fn();

// Make the mock return `true` for the first call,
// and `false` for the second call
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

const result = [11, 12].filter(num => filterTestFn(num));

// console.log(result);
// > [11]
// console.log(filterTestFn.mock.calls[0][0]); // 11
// console.log(filterTestFn.mock.calls[1][0]); // 12

///////////// MOCKEAR AXIOS /////////////

jest.mock('axios');

const getUsers = () => {
    return axios.get('/users.json').then(resp => resp.data);
}

test('should fetch users', () => {
    const users = [{ name: 'Bob' }];
    const resp = { data: users };
    axios.get.mockResolvedValue(resp);

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    return getUsers().then(data => expect(data).toEqual(users));
});

///////////// MOCKING PARTIALS /////////////

// foo-bar-baz.js
export const foo = 'foo';
export const bar = () => 'bar';
export default () => 'baz';

// test.js
/* jest.mock('../foo-bar-baz', () => {
    const originalModule = jest.requireActual('../foo-bar-baz');

    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        default: jest.fn(() => 'mocked baz'),
        foo: 'mocked foo',
    };
});

test('should do a partial mock', () => {
    const defaultExportResult = defaultFn();
    expect(defaultExportResult).toBe('mocked baz');
    expect(defaultFn).toHaveBeenCalled();

    expect(foo).toBe('mocked foo');
    expect(bar()).toBe('bar');
}); */

// EXTEND FOR OWN FUNCTION TEST, TAMBIÉN MIRAR EL REPO jest-extended

expect.extend({
    toBeEqualTwo(received) {
        if (received !== 2) {
            return {
                pass: false,
                message: () => `Expected ${received} to be number 2`,
            };
        }
        return {
            pass: true,
        };
    }
});
test("number 2", () => {
    expect(2).toBeEqualTwo();
});