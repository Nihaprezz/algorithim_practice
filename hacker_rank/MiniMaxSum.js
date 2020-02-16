// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// Function Description

// Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

// miniMaxSum has the following parameter(s):

// arr: an array of 5 integers
function miniMaxSum(arr) {
    let min = 0, max = 0;
    arr.sort((a,b) => a > b ? 1 : -1)

    max = [...arr].splice(1).reduce((a, b) => a + b)

    min = arr.slice(0, arr.length - 1).reduce((a, b) => a + b)
    
    console.log(min + " " + max)
}