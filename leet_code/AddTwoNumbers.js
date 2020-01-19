// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
    //its basically the array of integers added together, so in this case 243 + 564 = 807
    let sum = parseInt(l1.join('')) + parseInt(l2.join('')) 
    let stringResult = sum.toString().split('').reverse() //reversing the 807 to 708 and changing it into an array.
    
    let numberArray = []
    stringResult.forEach(num => numberArray.push(parseInt(num))) //last step, we currently have ['7', '0', '8']
                                                                // we need [7,0,8] in array of integers, so using for each we go through the array, use parseInt on each and push into the numberArray that is going to be returned.
    return numberArray //[7,0,8]
};

addTwoNumbers([2,4,3], [5,6,4])

// TEST CASES
// [2,4,3]
// [5,6,4]