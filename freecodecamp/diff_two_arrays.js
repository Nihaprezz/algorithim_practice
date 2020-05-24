// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note
// You can return the array with its elements in any order.

//Example:
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"]

function diffArray(arr1, arr2) {
    function compare(a, b){
      return a.filter(val => b.indexOf(val) === -1) //helper function to get all the unique values 
    }
  
    return [...compare(arr1, arr2), ...compare(arr2, arr1)] //returning a new array of uniques using the compare helper.
}
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);