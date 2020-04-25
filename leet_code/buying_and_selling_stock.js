// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:
// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

//USING DYNAMIC PROGRAMMING.
var maxProfit = function(prices) {
    //Start of with the first num in the array as the stock we buy.
    //Start with the maxProfit at 0.
    let boughtStock = prices[0]
    let maxProfit = 0
    
    //Compare the bought stock with the next number in the array. If its less than we will change the boughtStock to that number. 
    for(let i = 1; i < prices.length; i++){
        console.log('boughtStock', boughtStock)

        //if the bought stock is greater then the next value in the array then change the boughtStock value. This will make sure we have the lowest value.
        if(boughtStock > prices[i]){
          boughtStock = prices[i]
        } else {
          // if boughtStock is not larger than the next value in the array than calculate the max profit and compare it to the maxProfit variable.

          //Math.abs used on boughtStock - prices[i] to get the postitive values only.
          maxProfit = Math.max(maxProfit, Math.abs(boughtStock - prices[i]))
        }
        
    }
    
    return maxProfit
    // if no number is less then the value of the boughtStock then the maxprofit will stay at 0 since we could not calculate the maxprofit in the if/else statement and the boughtStock continously changed throughout the array.
};