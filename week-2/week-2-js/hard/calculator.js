/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor()
  {
    this.result = 0;
  }

  add(num)
  {
    this.result+=num;
  }
  subtract(num)
  {
    this.result-=num;
  }
  multiply(num)
  {
    this.result*=num;
  }
  divide(num)
  {
    if(num==0)
    {
      throw new Error('Division by 0 not allowed');
    }
    this.result=this.result/num;
  }
  clear()
  {
    this.result = 0;
  }
  getResult()
  {
    return this.result;
  }
  calculate(expression)
  {
    let len = expression.length,i=0;
    let res = 0;
    let open=0,close=0;
    while(i<len)
    {
        while(expression[i]==' ')
          i++;
        while(expression[i] >= '0' && expression[i] <= '9') {

        }
        
        if(expression[i]!='/' && expression[i]!='*' && expression[i]!='+' && expression[i]!='-' && expression[i]!=' '&& expression[i]!='(' && expression[i]!=')')
        {
          throw new Error('Invalid Character');
        }
        else if(expression[i]==')'&&open==0)
        {
          throw new Error('Invalid Character');
        }
        i++;
    }
    if(open==0 && close==0)
    {
      return 1;
    }
    else{
      throw new Error('Invalid Character');
    }
    return 1;
  }
}

module.exports = Calculator;
