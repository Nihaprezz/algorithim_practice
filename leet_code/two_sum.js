// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
    let numsIndexes = {}
    
    //object to keep track of the numbers array and their indexes
    //for this example the object would be { '2': 0, '7': 1, '11': 2, '15': 3 } 
    nums.forEach((num, index) => numsIndexes[num] = index )

    //console.log('starting off object', numsIndexes)
    
    for (let i = 0; i < nums.length; i++){
      let currentDifference = target - nums[i]
      //console.log('difference in loop', currentDifference)

      //checking to see if currentDifference exsists in the hash table. If it does and it does not match itself then it will return the index of the elements.
      if(numsIndexes[currentDifference] && numsIndexes[currentDifference] !== i ) {
        return [i, numsIndexes[currentDifference]]
      }
    }
};