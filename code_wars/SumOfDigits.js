// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works:
// Examples:
// digital_root(16)
// => 1 + 6
// => 7

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6

function digital_root(n) {
    while ( n > 9 ){
      n = n.toString().split('').map(num => parseInt(num))
    
      n = n.reduce((total , num) => total + num)
    }
  
    return n;
}

//While the n = number is greater then 9 (first single digit) then it will continue to split the number and add and then check the number again. Once it breaks the while loop then that is the answer.
