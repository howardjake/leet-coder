/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let tArray = Array.from(t).reverse()
  let i = s.length - 1
  while (i >= 0) {
    if (tArray.indexOf(s[i]) >= 0) {
      tArray = tArray.slice(tArray.indexOf(s[i]) + 1)
    } else {
      return false
    }
    i--
  }
  return true
};