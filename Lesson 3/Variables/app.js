// const add = 7 + 3;
// console.log  (add);
// const sub = 7 - 3;
// console.log (sub);
// const mult = 7 * 3;
// console.log (mult);
// const div = 7 / 3;
// console.log (div);
// const paren = (83 + 92 + 86 + 94) / 4;
// console.log (paren)

// let lives = 3;
// let score = 0;
// console.log ('You have ' + lives + ' lives left with score: ' + score);

//SCORE FUNCTION

// let points = 1023;
// let lives = 3;
// let totalTime = 45;
// let pointsScore = points*15
// let livesScore = lives*100
// let timeScore = totalTime*10
// console.log("Points: " + points);
// console.log("Lives: " + lives);
// console.log("Total Time: " + totalTime + " secs");
// console.log("---------------------------");
// let totalScore = pointsScore + livesScore + timeScore;
// console.log("Your Total Score is: " + totalScore);

//DICE ROLLING
let d6 = Math.floor(Math.random()*6);
let d6Two = Math.floor(Math.random()*6);
console.log ('Rolling the dice!');
console.log ('You rolled a ' + d6);
numTotal = d6 + d6Two ;
console.log ('and a ' + d6Two);
console.log ('for a total of = ' + numTotal);
