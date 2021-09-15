import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let str = n.toString();
  let result = [];
  let arr = str.split('');
    for(let i = 0; i < arr.length; i++) {
      arr.splice(i,1)
      let num = Number(arr.join(''))
      result.push(num) 
      arr = str.split('') 
  }  
  return Math.max.apply(null,result)
}
