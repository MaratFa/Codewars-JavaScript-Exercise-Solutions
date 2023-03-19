/*
  
  -- Description--   
  
  Complete the solution so that it reverses the string passed into it.
  'world'  =>  'dlrow'
  'word'   =>  'drow'
    
*/



/*  -- Solution № 1--  */

function solution(str) {
  return str.split("").reverse().join("");
}



/*  -- Solution № 2--  */

const solution = str => str.split('').reverse().join('');
