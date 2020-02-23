// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Examples: 
// Input: 121
// Output: true

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function(x) {
    if(Math.sign(x) === -1){
        return false
    } else {
        let reversed = parseInt(x.toString().split('').reverse().join(''))
        return reversed === x ? true : false
    }
};
