import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight( arr ) {
  let array = [];
  let arrayNew = [];
  let count = 0;
  arrayNew = arr.filter((e) => e !== -1).sort((a,b) => a-b)
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === -1) {
      array.push(arr[i])
      count++
    }
    else {
      array.push(arrayNew[i - count])
    }
  }
  return array
}