//Given a string find the word provided inside of the string and return the index for when that word starts.
// EX: 'duhdoginubdog'
// OUTPUT: [3,10]

let testString = "acharmundoarmin"
let testWord = "arm"

//searchStr is the long string we are given.
//str is the actual word we are looking for.

function duplicateSubStrings(searchStr, str) {
  let instances = [], searchText = searchStr, startingIndex = 0, found;
  // return searchText.indexOf(str, startingIndex)
  // return searchText.indexOf(str)
  while ((found = searchStr.indexOf(str, startingIndex)) > -1){
    //console.log(found)
    instances.push(found);
    startingIndex = found + str.length
  }
  
  return instances
 
}

duplicateSubStrings(testString, testWord);


//Using .indexOf returns the index of when the substring starts.
//once we have that index. We can use the second parameter that .indexOf
//takes an a index that allows you to choose when to begin the search in that search.

//the variable startingIndex in the above code gets set to 0 in the first 'while' iteration. On the second iteration it is set to 3 + the length of the substring which would be 6. Since we want it to search after the substring. 

//while loop will continue until the it can no longer find the substring within the indexes given and it will return -1.


duplicateIndex(testString, testWord);