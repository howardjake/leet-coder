/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (!s.trimEnd().includes(' ')) {
      return s.trimEnd().length
    }
    s= s.trimEnd()
    let len = 0 
    for (let i = s.length-1; i > 0; i--) {
      console.log(s[i])    
      if (s[i] === ' ') {
        break
      } else {
        len++
      }
    }
    return len
};