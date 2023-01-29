/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  let xString = x.toString().split("").reverse().join("");
  if(x === parseInt(xString)){
    return true
  }
  return false 
};
