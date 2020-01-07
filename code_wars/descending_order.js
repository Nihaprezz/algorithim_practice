// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

//Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// ----------------------------------------

function descendingOrder(n){
    //turning given number into a string using toString. Splitting the string into an array using split().
    //sorting through the array of numbers using sort(). Joining the array to one single string.
    let descendingNum = n.toString().split('').sort((a,b) => {
       return a > b ? -1 : 1
     }).join('')
     
     //changing the descendingNum variable from an array type to a number type
     return parseInt(descendingNum)
}


//More advance solution : 
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}

