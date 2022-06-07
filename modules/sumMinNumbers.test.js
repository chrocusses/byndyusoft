const sumMinNumbers = require('./sumMinNumbers.mjs')

describe('sumMinNumbers function', () => {
    test('Should return sum of two minimum numbers', () => {
        const input = [4, 0, 3, 19, 492, -10, 1]

        const output = [-10]

        expect(sumMinNumbers(input)).toEqual(output)
    })
})
