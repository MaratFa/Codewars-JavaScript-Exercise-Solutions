/*
    -- Description--
   
    Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
   
*/



/*  -- Solution № 1--  */

evenOrOdd = (number) => (number%2 === 0) ? "Even" : "Odd";



/*  -- Solution № 2--  */

function evenOrOdd(number) {
  if (number%2 == 0) {
     return "Even"
   } else {
     return "Odd"
   }  
}