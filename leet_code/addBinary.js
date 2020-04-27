// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101

var addBinary = function(a, b) {
    let sum = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    
    //while loop while continue to check all digits in both
    while(i >= 0 || j >= 0){
        let num1 = a[i] ? a[i] : '0'; //if there is an undefined value then make it 0
        let num2 = b[j] ? b[j] : '0';
        
        //using XOR to determine the sum
        sum = String(num1 ^ num2 ^ carry) + sum;
        
        if(num1 === num2 && num1 !== String(carry)){
            carry = Number(!carry) //if true will be 1, if false will be 0
        }
        
        i--;
        j--;    
    }
    
    //once loop is over and we still have a carry = '1' then we will add it to the sum 
    if(carry){
        sum = String(carry) + sum;
    }
    
    return sum;
};


//USING XOR (^) = same: 0, different: 1
// s = sum , c = carry 
// a b c = s c
// 0 0 0 = 0 0
// 0 0 1 = 1 0 <-- flip carry
// 1 0 0 = 1 0
// 1 0 1 = 0 1
// 1 1 0 = 0 1 <-- flip carry
// 1 1 1 = 1 1

// NOTE binary of 2 = 11;
