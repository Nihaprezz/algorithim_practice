// Complete the aVeryBigSum function. It must return the sum of all array elements.
// aVeryBigSum has the following parameter(s):
// ar: an array of integers .

// Input Format
// The first line of the input consists of an integer .
// The next line contains  space-separated integers contained in the array.

// Sample Input
// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005

function aVeryBigSum(ar) {
    return ar.reduce((total, number) => total + number)
}


// RUBY SOLUTION 

// def aVeryBigSum(ar)

//     ar.reduce(:+)

// end