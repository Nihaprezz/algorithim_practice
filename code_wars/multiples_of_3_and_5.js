// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

function solution(number){
    let sum = 0
    number = number - 1;
    
    for(let i = number; number > 0; number--){
    
      if(number % 5 === 0 || number % 3 === 0){
        sum = sum + number
      }
      
    }
    
    return sum;
  }

  //example
//   solution(10) 
//   will output 23, since the multiples will be (9,6,5,3)