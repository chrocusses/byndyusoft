const isNum = function isNum(el) {
    return typeof Number(el) === 'number' && isFinite(el)
}
module.exports = {isNum}
export default isNum