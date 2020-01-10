
'use strict';

// html page with CSS and JS
// short biography <done>

// use .toUpperCase() or .toLowerCase()
/* console.log() for if the answer is correct or not
replace with alerts at the end */

// ask user for name via prompt()
var user = prompt('What is your name?');
// custom greeting for coming to site
alert('Hi ' + user + '! Welcome to the Morgan Quiz! I\'ve gota  few questions for you:');


var questionArray = ['Morgan\'s had a dog named \'Ramen\': Y/N?',
  'Morgan only attended 4 schools in Bellingham: Y/N',
  'Morgan lived in Japan: Y/N',
  'Morgan has worked in software before: Y/N',
  'Morgan hates all things related to dragons and the dungeons they inhabit: Y/N'];

var simpleAnswerArray = ['n', 'n', 'y', 'y', 'n'];

var answerCount = 0;
//BRANDON ANTHONY LAB04... 
//CYCLE THRU BOTH ARRAYS, STARTING WITH QUESTION ARRAY
//PASS ARRAYS INTO FUNCTIONS, INCREMENT THRU THEM INDIVIDUALLY
//
//
//

function riddler(questions, answers) {
  for (let y = 0; y < questions.length; y++) {
    var testAnswer = prompt(questions[y]);
    if (testAnswer.charAt(0).toLowerCase() === answers[y]) {
      alert('Correct!');
      answerCount++;
    } else {
      alert('That is incorrect.');
    }
  }
}

//var testAnswer = '';
if(questionArray.length !== simpleAnswerArray.length){
  alert('MISMATCHED Q/A LENGTH');
}
riddler(questionArray, simpleAnswerArray);

//LAB-04
// for(let y = 0; y < questionArray.length; y++){
//   testAnswer = prompt(questionArray[y]);
//   if(testAnswer.charAt(0).toLowerCase() === simpleAnswerArray[y]){
//     alert('Correct!');
//     answerCount++;
//   }else{
//     alert('That is incorrect.');
//   }
// }//LAB-04

//generates a random number to guess
var numMin = 1;
var numMax = 100;
var targetNumber = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
var numberGuess = '';
var guessNumberAttempts = 4;

//questionCount++; //question 6
for (let x = 0; x < guessNumberAttempts; x++){
  numberGuess = prompt('I\' thinking of a number between ' + numMin + ' and ' + numMax + '. What is your guess?');
  //this needs to check for only equal as the input may be caught as string
  // eslint-disable-next-line eqeqeq
  if(numberGuess == targetNumber){
    alert('Correct! Great Job! That only took you ' + (x + 1) + 'trie(s)!');
    answerCount++;
    break;
  }else if( numberGuess < targetNumber){
    alert('My number is HIGHER than that. ' + (guessNumberAttempts - x - 1) + ' attempts remain.');
  }else if( numberGuess > targetNumber){
    alert('My number is LOWER than that ' + (guessNumberAttempts - x - 1) + ' attempts remain.');
  }

  if(x >= (guessNumberAttempts - 1)){
    alert('You have failed to guess my number, which was ' + targetNumber);
  }
}


//questionCount++; //question7
//makes a normalized answer array based on answer array
var answerArray = ['Los Angeles', 'Fukuyama', 'Bellingham', 'Seattle', 'Pullman'];
var normalizedAnswerArray = [];
for(var q = 0; q < answerArray.length; q++){
  normalizedAnswerArray.push(answerArray[q].toLowerCase());
}
var guessAnswerAttempts = 6;
var possibleAnswer = '';

for (var x = 0; x < guessAnswerAttempts; x++) {
  possibleAnswer = prompt('Name a place Morgan has lived before.');

  if (normalizedAnswerArray.includes(possibleAnswer.toLowerCase())) {
    alert('Congrats! You guessed correctly!');
    answerCount++;
    console.log('hmm');
    break;
  }else{
    alert('Morgan has not lived in ' + possibleAnswer + '. You have ' + (guessAnswerAttempts - x - 1) + ' attempts remaining.');
  }// end if

  var locationString = '';

  if( x >= guessAnswerAttempts - 1){
    for (let y = 0; y < answerArray.length; y++){
      locationString += answerArray[y];
      if(y < answerArray.length - 1){
        locationString += ', ';
      }// end if
    }// end for
    alert('You did not guess where Morgan has lived before. Here is a list of possible answers: ' + locationString);
  }// end if


} //end for

// display back in final message
alert('You got ' + answerCount + ' questions correct out of ' + (answerArray.length + 2) + '. See Morgan\'s bio for answers and more!');
