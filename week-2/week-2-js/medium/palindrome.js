/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlphabet(char) {
  return /^[a-zA-Z]$/.test(char);
}

function isPalindrome(str) {
  let n = str.length;
  let i=0,j=n-1;
  while(i<j)
  {
    if(!isAlphabet(str[i]))
    {
      i++;
    }
    else if(!isAlphabet(str[j]))
    {
      j--;
    }
    else if(str[i].toLowerCase()!=str[j].toLowerCase())
    {
      return false;
    }
    else{
      i++;j--;
    }
    
  }
  return true;
}

module.exports = isPalindrome;
