//Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 9 
// 9 8 9

// The left-to-right diagonal = 1 + 5 + 9. The right to left diagonal = 3 + 5 + 9. Their absolute difference is |15 - 17| = 2.

//diagonalDifference takes the following parameter: arr: an array of integers

function diagonalDifference(arr) {
    let secondCount = arr.length - 1 
    let firstSet = []   //storing first diagonal set of numbers
    let secondSet = []  //storing the second set of diagonal numbers

    for (let i = 0; i < arr.length; i++){
        firstSet.push(arr[i][i])
        secondSet.push(arr[i][secondCount-i])
    }

    //Reducing the array of diagonals
    let firstDiag = firstSet.reduce((total, num) => total+num)  

    let secondDiag = secondSet.reduce((total, num) => total+num)

    return Math.abs(firstDiag - secondDiag) //using Math.abs to only return postive/absolute numbers
}