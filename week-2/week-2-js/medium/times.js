/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 0;
    let time_before_start = Date.now();
    for(let i=1;i<=n;i++)
    {
        sum+=i;
    }
    let after_calculation = Date.now();
    console.log('Time Elapsed in Milliseconds', after_calculation - time_before_start);
    return sum;
}

console.log(calculateTime(100000000));