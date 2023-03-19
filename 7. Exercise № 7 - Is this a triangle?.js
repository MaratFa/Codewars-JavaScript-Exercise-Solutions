/*
 
  -- Description --   
  
  Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
  (In this case, all triangles must have surface greater than 0 to be accepted).
    
*/



/*  -- Solution № 1 --  */

function isTriangle(a,b,c) {
   return a + b > c && a + c > b && c + b > a;
}



/*  -- Solution № 2 --  */

function isTriangle(a,b,c) {
   let semiPerimeter = (a + b + c)/2;
   let area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
   if (a < 0 || b < 0 || c < 0) {
     return false;
   } else if (area > 0) {
     return true
   } else {
     return false;
   } 
}
