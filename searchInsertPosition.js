// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// EX1: 
// Input: [1,3,5,6], 5
// Output: 2

// EX2: 
// Input: [1,3,5,6], 2
// Output: 1

// EX3:
// Input: [1,3,5,6], 7
// Output: 4

// EX4:
// Input: [1,3,5,6], 0
// Output: 0

var searchInsert = function(nums, target) {
    let search = nums.findIndex((num) => num === target)
    
    //checking to see if the findIndex found the number in the array if not it will return -1;
    if(search !== -1){
        return search 
    } else {
      for(let i = 0; i < nums.length; i++){     //checking through sorted array
        if(nums[i] > target)  return i;     
      } 

      // end of for loop which means target is greater then all numbers in array. 
      return nums.length
    }
};

// OTHER SOLUTION
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] >= target){
            return i;
        }
    }
    return nums.length
};
