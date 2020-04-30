// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    string = string.toLowerCase(); //changing all characters to lowercase so capitals dont mess with comparison
    
    for(let i = 0; i < alphabet.length; i++){
      //as soon as a character in the alphabet is not in the string it will break
      if(!string.includes(alphabet[i])){
        return false
      }
      
    }
    
    return true //if it makes it trough the alphabet then it is a panagram
}