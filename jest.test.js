const sumMinNumbers = require('./modules/sumMinNumbers.mjs')


test('Should returns sum of two minimum numbers', () => {
    expect(sumMinNumbers([4, 0, 3, 19, 492, -10, 1])).toBe(-1)
})