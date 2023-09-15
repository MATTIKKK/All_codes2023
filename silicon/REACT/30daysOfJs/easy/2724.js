/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    const NSort = (a, b) => fn(a) - fn(b);
    return arr.sort(NSort);
};