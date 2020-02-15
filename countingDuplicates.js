// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(text){
    let ltrs = {}, duplicates = 0;
    
    text.toLowerCase().split('').forEach(ltr => {
      if(ltrs[ltr]){
        ltrs[ltr]++;                //ADDING 1 IF THE LTR EXISTS IN THE HASH
        if(ltrs[ltr] === 2) duplicates ++;      //IF THE SIZE IS 2 THEN DUPLICATES COUNTER WILL GO UP
      } else {
        ltrs[ltr] = 1;      //Initializing the number in the hash
      }
    })
    
    return duplicates;      //returning the duplicate counter
  }

//EXAMPLE INPUTS

duplicateCount("")
duplicateCount("abcde")
duplicateCount("aabbcde")
duplicateCount("aabBcde")
duplicateCount("Indivisibility")
duplicateCount("Indivisibilities")

//ANOTHER SOLUTION WHICH I LIKE 
function duplicateCount(text){
    var count = text.toLowerCase().split('').reduce((accum, curr) => {
      accum[curr] ? accum[curr] += 1 : accum[curr] = 1;
      return accum;
    }, {});
    return Object.keys(count).filter(key => count[key] > 1).length;
  }

  //Similiar to my solution but less code and using the object keys at the end to determine the amount of duplicates instead of keeping a counter.