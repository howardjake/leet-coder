/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let most = 0
  let p1 = 0;
  let p2 = height.length - 1;

  while (p1 < p2) {
    let low = Math.min(height[p1], height[p2])
    let calc = (p2 - p1) * low  
    most = calc > most ? calc : most
    height[p1] < height[p2] ? p1++ : p2--
  }

  return most
};