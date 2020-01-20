// Observe that its base and height are both equal to 'n', and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size 'n'.
//Print a staircase of size n using # symbols and spaces.
//Note: The last line must have 0 spaces in it

function staircase(n) {
    let size = n, counter = 0, space = " ", hashtag = "#", 
    numOfHashtags = 1;

    while( counter < size ){
        console.log(space.repeat(size-1) + hashtag.repeat(numOfHashtags))
        size--;
        numOfHashtags++;
    }
}
