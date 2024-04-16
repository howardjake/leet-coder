/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let splits = s.split(' ').filter(e => e !== '')
    let rev = splits.map((item,idx) => splits[splits.length-1-idx])
    return rev.join(' ')
};