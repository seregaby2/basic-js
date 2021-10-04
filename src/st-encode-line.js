import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let count = 1;
  let result1 = '';
  let result = ''
  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i+1]) {
      count++
    }
    else {
      if(count > 1) {
      result1 = count + str.slice(i,i+1);
      }
      else {
        result1 =str.slice(i,i+1);
      }
      count = 1;
      result += result1
    }
  }
  return result.toString();
}