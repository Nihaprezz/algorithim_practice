// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

//EXAMPLE 1:
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

//EXAMPLE 2: 
// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

var plusOne = function(digits) {
    //we will go from right to left in the array and add 1 to the digit if its under 9. 
    for(let i = digits.length - 1; i >= 0; i--){  
        if(digits[i] < 9){          //checking to see if number is less then 9 and if soo we add 1 and return the array. 
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0;  //if number is greater then 9 then we change it to 0 and continue to go through the loop until
                            //we hit a number less then 9 and add 1 to it.
        }
    }
    
    digits.unshift(1)   //handling an edge case if all values in the array turn into 0 then we add 1 to the beginning of
                        //the array and return the value.
    return digits;
};

// Edge case example
// input: [9,9]
// after it goes through the loop it will be [0,0]
// so we will have to add a 1 to the begin using unshift. 
// and return digits.