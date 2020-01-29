//Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i]

//Example
// Input:  [1,2,3,4]
// Output: [24,12,8,6]


var productExceptSelf = function(nums) {
    let resultArray = []        //empty array that will hold the products as we go through the array
    let product;                //product will change as we go through for loop

    for(let i = 0; i < nums.length; i++){   //initial for loop to grap the first number in the array
      product = 1;

      for(let j = 0; j < nums.length; j++){     //second for loop that will multiply the number times the product 
        if(i !== j) {                       //if if is not equal to j then it will iterate next code block. 
          console.log('product is: ', product, ' and nums[j] is: ', nums[j]) //console log to vizualize the number and product
            product *= nums[j]      //product times the number that the loop is currently on.
        } 
      }
      resultArray.push(product);    //pushes the end product to the results array.
    }

    return resultArray;
};