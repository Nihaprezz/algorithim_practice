// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

//For example, given the array arr=[1,1,0,-1,-1] there are 5 elements, two positive, two negative and one zero. Their ratios would be 2/5 = 0.400000, 2/5 = 0.400000  and 1/5 = 0.200000 . It should be printed as : 
// 0.400000
// 0.400000
// 0.200000

//Explanation 
// There are 2 positive numbers, 2 negative numbers, and 1 zero in the array.
// The proportions of occurrence are positive: 2/5 , negative: 2/5  and 1/5 zeros: .

function plusMinus(arr) {
    let pos = 0, neg = 0 , zero = 0 , length = arr.length

    arr.forEach(num => { //going through the array with a for Each
        if (num === 0){     //first checking for 0, if it is will we add 1 to the zero counter.
            zero++;
        } else if (Math.sign(num) === 1){   //checking if the number is postivie using Math.sign, updating positive counter.
            pos++;
        } else {    //lastly if the number is not 0 and not positive then it is a negative number, updating negative counter.
            neg++
        }
    })
    console.log( (pos / length).toFixed(6) ) //printing results using .toFixed(6) since answer needs to be a 6 digit decimal.
    console.log( (neg / length).toFixed(6) )
    console.log( (zero / length).toFixed(6) )
}

//Sample Input
//arr = [-4, 3, -9, 0, 4, 1]

//Output Should Be 
// 0.500000
// 0.333333
// 0.166667