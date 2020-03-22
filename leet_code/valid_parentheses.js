// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

var isValid = function(s) {
    if (s === null || s.length <= 0) return true;
    var arr = s.split('') //seperates into an array
    var stack = [] //initialize empty array
    
    for (chr of arr){
      console.log('stack', stack)
      console.log('chr', chr)
      if (chr === "[") stack.push(']');
      else if (chr === "{") stack.push('}');
      else if (chr === "(") stack.push(')');
      else if (stack.length === 0 || chr !== stack.pop()) return false
    }
  
    if(stack.length === 0) return true;
    return false
};

//else if (stack.length === 0 || chr !== stack.pop()) return false
//Line above checks to see if the next symbol in the array matches the last symbol and if it does then you have a mathing pair if not then its false....
