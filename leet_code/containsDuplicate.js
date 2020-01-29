// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
//Example 1 :
// Input: [1,2,3,1]
// Output: true

//Example 2 : 
// Input: [1,2,3,4]
// Output: false

var containsDuplicate = function(nums) {
    let numObj = {}     //empty object will be used to store how many of the same numbers are in the array. Ex {1: 1, 2: 1, 3:1}

    for(let i = 0; i < nums.length; i++){ //for loop to go through all numbers in array
      if(numObj[nums[i]]){          //when it finds the num key in the object then it will break loop in return true
        return true
      } else {
        numObj[nums[i]] = 1     //initializes the key/value pair in the object with 1 
      }
    }
  
    return false            //if the for loop goes through sucessfully without finding any duplicates then it will return false. No duplicated values.
};

//Advanced Solution to run faster

var containsDuplicate = function(nums) {
    let set = new Set(nums);        //Set creates an object that stores unique values. So for example 1 it will return {1, 2, 3}
    return (set.size < nums.length);    //If set size which in this case is 3 is greater then nums which in this case is 4 then return true.
                                        //So if set size which is only unique values is less then nums array length then that means there is duplicates.
};