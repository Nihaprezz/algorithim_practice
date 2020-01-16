// During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in altitude. We define the following terms:

//For example, if Gary's path is 8 = [DDUUUUDD] , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike

//The first line contains an integer n, the number of steps in Gary's hike.
//The second line contains a single string 8, of n characters that describe his path.

function countingValleys(n, s) {
    let valleys = 0     //variable will keep track on the valleys. Will go up whenever the path hits 0 on the 'sea lvl'
    let path = 0     //will map out the path by adding 1 or subtracting 1 to it.

    s.split('').forEach(ltr => {    //changing string to array using split and using for each to iterate through.
      if(ltr === 'U'){              //if ltr === U then we will move up on the end path
        path++;
        path === 0 && valleys++      //checks to see when we move up if we have hit the 'sea level' at 0 and if so, adds 1 to
      } else if(ltr === "D") {
        path--;              //will subtract 1 from the path if the ltr matches D
      }
    });
  
    return valleys;     //returns the amount of valleys counted.
}


// Test Cases 
// 1. s = "UDDDUDUU"
// 2. s = "DDUUDDUDUUUD"

countingValleys(8, "UDDDUDUU");