/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    len = numbers.length
    if(len<=0)
    {
        return -1;
    }
    let maxi = numbers[0];
    for(let i=0;i<numbers.length;i++)
    {
        maxi = Math.max(maxi,numbers[i]);
    }
    return maxi;
}

console.log(findLargestElement([3, 7, 2, 9, 1]));