/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newString = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
    return newString.split("").reverse().join("") === newString;
};
