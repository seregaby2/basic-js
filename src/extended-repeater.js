import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);
  //if(!options.addition) options.addition = '';
  if (options.addition || options.addition === null) options.addition = String(options.addition);
  if(!options.repeatTimes) options.repeatTimes = 1;
  if(!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if(!options.separator) options.separator = '+';
  if(!options.additionSeparator) options.additionSeparator = '|';
  let arr = [];
  let arrInside = [];
  let result = '';
  for(let i = 0; i < options.additionRepeatTimes; i++) {
    arrInside.push(options.addition);
    arrInside.push(options.additionSeparator)
  }
  arrInside.pop(options.additionSeparator)
  for(let j = 0; j < options.repeatTimes; j++) {
    arr.push(str)
    arr.push(arrInside)
    arr.push(options.separator)
  }
  arr.pop(options.separator)
  result = arr.flat().join('');
  return result
}