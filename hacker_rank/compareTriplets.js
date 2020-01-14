//Your task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point
//Complete the function compareTriplets. It must return an array of two integers, the first being Alice's score and the second being Bob's.

//Sample Input : 
//alice = [12, 28, 30]
//bob = [99, 16, 8]

function compareTriplets(a, b) {
    let scoreBoard = [0,0] //array will be used to store the scores.

    for(let i = 0; i < a.length; i++){ //for loop used to go through both arrays at the same time with the i counter.
        if (a[i] > b[i]){
            scoreBoard[0] += 1;
        } else if (a[i] < b[i]) {
            scoreBoard[1] += 1;
        }  
    }   //no need to check for the a[i] = b[i] since it doesnt effect the overall score.
  
  return scoreBoard
}
