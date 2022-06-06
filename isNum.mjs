let isNum = function isNum(el) {
    return typeof Number(el) === 'number' && isFinite(el)
}

export default isNum