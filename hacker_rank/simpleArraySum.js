// Given an array of integers, find the sum of its elements.

// For example, if the array ar = [1,2,3], 1 + 2 + 3 = 6, so return 6.

function simpleArraySum(ar) {
    //reduce function will add all the numbers in the array together. Takes in a function.
    return ar.reduce((total, num) => {
        return total + num
    })
}
