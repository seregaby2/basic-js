import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
   let array = [];
   for(let i = 0; i < arr. length; i++) {
     if(arr[i] === '--discard-next') {
       i ++
     }
     else if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
       array.pop()
     }
     else if (arr[i] === '--double-next' && arr[i + 2] !== undefined ) {
       array.push(arr[i+1])
       array.push(arr[i+1])
       i++
     }
     else if (arr[i] === '--double-prev' && arr[i - 2] !== '--discard-next' && arr[i-1] !== undefined) {
       array.push(arr[i-1])
     }
     else if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
     array.push(arr[i])
     }
   }
   return array;
 }
