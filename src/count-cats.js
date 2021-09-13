import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let count = 0;
  const arr = matrix.flat(Infinity)
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === '^^') 
    count++
  }
  return count;
  // remove line with error and write your code here
}
