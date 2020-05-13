// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    A = A.sort();
    let stack = [];
  
    for(let i = 0; i < A.length; i++){
      if(stack.includes(A[i])){
        stack.pop()
      } else {
        stack.push(A[i])
      }
    }
  
    return stack[0]
  }

  //Example 1:
  //input
  //[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5] 
  //output would be 5

  //Emaple 2: 
  //Input
  //[1,1,2,-2,5,2,4,4,-1,-2,5]
  //Output would be -1