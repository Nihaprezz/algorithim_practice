// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

//EXAMPLE 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

//EXAMPLE 2: 
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

var strStr = function(haystack, needle) {
    if(needle === '') return 0;
    
    for(let i = 0; i < haystack.length; i++){
        let testWord = haystack.substr(i, needle.length)
        if (testWord === needle){
            return i
        }     
    }
    
    return -1 
};

//DO NOT USE INDEXOF