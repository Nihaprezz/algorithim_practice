// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    const arrayOfWords = s.split(' ')
    let shortest = arrayOfWords[0].length;
  
    arrayOfWords.forEach(word => {
      if(word.length < shortest){
        shortest = word.length
      }
    })
  
    return shortest 
  }