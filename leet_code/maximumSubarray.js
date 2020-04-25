// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6

var maxSubArray = function(nums) {
    // We default to say the best maximum seen so far is the first element. 
    // And we also default the max ending to the first element as well.
    
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    
    //checking all the elements after index 1.
    for(let i = 1; i < nums.length; i++){
        
        //Math.max does the comparison for us and selects the larger number from the parameters it takes.

        // We have 2 choices:
        // maxEndingHere + nums[i] (extend the previous subarray best whatever it was)
        //   1.) Let the item we are sitting at contribute to this best max we achieved
        //   ending at index i - 1.
        // nums[i] (start and end at this index)
        //   2.) Just take the item we are sitting at's value
        maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i])
        
        // Did we beat the 'maxSoFar' with the 'maxEndingHere'?
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    // returns the best maxSoFar after going through the whole array
    return maxSoFar;
};