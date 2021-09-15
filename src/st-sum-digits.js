import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default   function getSumOfDigits( n ) {
  let str = n.toString()
  let arr = str.split('').map((e)=> e*1);
  
 let result = arr.reduce(function(sum, current) {
    return sum + current;
  });
  if(result < 10) 
    return result
  else {
   return getSumOfDigits(result)
  }

}
