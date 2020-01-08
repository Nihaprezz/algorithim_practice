//Given a 32-bit signed integer, reverse digits of an integer. 
// NOTE: Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// Example 1:
// Input: 123
// Output: 321

//Example 2:
// Input: -123
// Output: -321

var reverse = function(x) {
    let number = x  
    //taking the number given, turning it into a string, then splitting the string into an array of numbers.
    //using .reverse to reverse the array of number, joining them back with .join and using parseInt to change string to an integer.
    let reversedInt = parseInt(number.toString().split('').reverse().join('')) 
    let limit = 2147483648      //this is the 32 bit limit
     
    if (reversedInt > limit){   //checking if the reversedInt is greater then the limit then it will return 0
      return 0
    }
    else if (Math.sign(number) === -1) { //checking if the number passed in the function was negative.
      return reversedInt * -1             //if number was negative then we are multiplying it by -1.
    } else {
      return reversedInt            //return reversedInt if its positive and not over the 32 bit limit.
    };
      
  };