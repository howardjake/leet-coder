/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix[0].length < 2) {
    return matrix.flat()
  }
  let size= matrix.flat().length
  let output = []

  while (output.flat().length < size) {
    console.log(matrix)
    output.push(matrix[0])
    matrix.splice(0, 1)
    if(matrix.length > 1) {
      matrix = matrix[0].map((_, colIndex) => matrix.map(row => row[row.length-1-colIndex]));
    } 
    if (matrix.length == 1) {
      matrix[0] = matrix[0].reverse()
    }
  }

  return output.flat()
};
