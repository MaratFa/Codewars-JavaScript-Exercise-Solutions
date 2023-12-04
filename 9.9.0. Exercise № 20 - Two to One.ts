/*
 
  -- Description --   

  Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

  Examples:
  a = "xyaabbbccccdefww"
  b = "xxxxyyyyabklmopq"
  longest(a, b) -> "abcdefklmopqwxy"

  a = "abcdefghijklmnopqrstuvwxyz"
  longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
      
*/





// JavaScript
// My solution 

function longest(s1, s2) {
  let twoStrings = s1 + s2;
  let longest = '';
  for (let i = 0; i < twoStrings.length; i++) {
    if (longest.includes(Array.from(twoStrings)[i])) {
      continue;
    }
    longest += Array.from(twoStrings)[i];
  }
  return longest = longest.split('').sort().join('');
}



// JavaScript
// Best solution 

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')



// TypeScript
// My solution

export const longest = (s1: string, s2: string): string => {
  let twoStrings: string = s1 + s2;
  let longest: string = '';
  for (let i: number = 0; i < twoStrings.length; i++) {
    if (longest.includes(Array.from(twoStrings)[i])) {
      continue;
    }
    longest += Array.from(twoStrings)[i];
  }
  return longest = longest.split('').sort().join('');
}



// TypeScript
// Best solution 

export const longest = (s1: string, s2: string): string =>
  [...new Set([...s1, ...s2])].sort().join("");

