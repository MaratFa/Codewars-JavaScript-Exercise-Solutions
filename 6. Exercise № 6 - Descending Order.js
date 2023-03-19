/*
 
 -- Description--   
  
 Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

 Examples:

 Input: 42145 Output: 54421
 Input: 145263 Output: 654321
 Input: 123456789 Output: 987654321
    
*/



/*  -- Solution № 1--  */

function descendingOrder(n){
  let array = n.toString().split("");  
  let output = [];
  let max = 0;
  let x;
  for (let i = 0; i < array.length + 7; i++) {    
    for (let j = 0; j < array.length; j++) {
      if (array[j] > max) {
        max = array[j];
        x = j;
      }      
    }     
    output.push(max);
    array.splice(x, 1);  
    max = 0;
  }  
  return Number(output.toString().replace(/,/g, ""));
}



/*  -- Solution № 2--  */



