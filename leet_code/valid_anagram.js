///Given two strings s and t , write a function to determine if t is an anagram of s.
// Note:
// You may assume the string contains only lowercase alphabets.

var isAnagram = function(s, t) {
    let string1 = s.split('').sort().join('')
    let string2 = t.split('').sort().join('')
    
    return string1 === string2 ? true : false
};


isAnagram("anagram", "nagaram")