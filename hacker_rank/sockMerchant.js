// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are n = 7 socks with colors ar = [1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock

let size = 9 
let array = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(n, ar) {
    let pairs = {};  //object that will be manipulated to keep track of the amount of 'colors'/'numbers' in the array
    let pairsCounter = 0; //counter that will be added to if we find a pair.
  
    ar.forEach(num => {
      if (pairs[num]){  //checking to see if the num is a key in the array
        pairs[num] += 1;        //if num is a key in the object we will add 1 to it.
  
        if (pairs[num] == 2){   //checking the object to see if its at 2. If it is then we technicall have a pair.
          pairs[num] = 0            //resetting the object set back to 0
          pairsCounter++            // adding 1 to the pairs counter, since a pair was found.
        }
  
      } else {
        pairs[num] = 1          //creating a object set if the num is not a key already.
      }
    })
  
    return pairsCounter 
}

sockMerchant(size, array)

//DID NOT USE the size parameter so I might have done it wrong but it works... 
