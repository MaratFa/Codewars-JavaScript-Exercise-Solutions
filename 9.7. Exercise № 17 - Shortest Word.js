/*
 
  -- Description --   
  
  Simple, given a string of words, return the length of the shortest word(s).

  String will never be empty and you do not need to account for different data types.
    
*/



/*  -- Solution № 1 --  */

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}



/*  -- Solution № 2 --  */

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}



/*  -- Solution № 3 --  */

function findShort(s){
  let array = s.split(' ');
  let smallerLength = array[0].length;
  for (let i = 1; i < array.length; i++) {
    if (array[i].length < smallerLength) {
      smallerLength = array[i].length;
    }
  }
  return smallerLength;
}
