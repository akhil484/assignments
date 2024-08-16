/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let n = str.length;
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0;i<n;i++)
    {
      if(vowels.includes(str[i].toLowerCase()))
      {
        count++;
      }
    }
    return count;
}

console.log(countVowels('raDAree'));