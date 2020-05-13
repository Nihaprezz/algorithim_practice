// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    A = A.sort();   //sorting the numbers will make it easier to use a stack
    let stack = []; //we will be adding and removing numbers from this array.
  
    for(let i = 0; i < A.length; i++){
      if(stack.includes(A[i])){ 
        stack.pop()     //if number is in the stack we will pop it off and it should be the last one 
      } else {
        stack.push(A[i])    //if number is not in the stack we will push it to the end.
      }
    }

    //since we are using a stack it is last pushed first to go. 
  
    return stack[0] //we will be left with one digit which was not popped since there was only one
  }

  //Example 1:
  //input
  //[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] 
  //output would be 5

  //Emaple 2: 
  //Input
  //[1,1,2,-2,5,2,4,4,-1,-2,5]
  //Output would be -1