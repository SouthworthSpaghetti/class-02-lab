
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

var testAnswer = '';
if(questionArray.length !== simpleAnswerArray.length){
  alert('MISMATCHED Q/A LENGTH');
}
for(let y = 0; y < questionArray.length; y++){
  testAnswer = prompt(questionArray[y]);
  if(testAnswer.charAt(0).toLowerCase() === simpleAnswerArray[y]){
    alert('Correct!');
    answerCount++;
  }else{
    alert('That is incorrect.');
  }
}

/*
// 5 yes/no questions <done>
var dogName = prompt('Morgan\'s had a dog named \'Ramen\': Y/N?');
var schoolCount = prompt('Morgan only attended 4 schools in Bellingham: Y/N');
var japanTime = prompt('Morgan lived in Japan: Y/N');
var previousWork = prompt('Morgan has worked in software before: Y/N');
var tabletop = prompt('Morgan hates all things related to dragons and the dungeons they inhabit: Y/N');

var answerCount = 0;
var questionCount = 0;

questionCount++; //question 1
if(dogName.toLowerCase() === 'n' || dogName.toLowerCase() === 'no'){
  alert('Your animal guess was correct! Morgan\'s dog was named \'Noodles\'');
  answerCount++;
}else if (dogName.toLowerCase() === 'y' || dogName.toLowerCase() === 'yes'){
  alert('Morgan did not have a pet named \'Ramen\'');
}else{
  alert('I\'m only capable of understanding Yes/No for an answer about Morgan\'s dog.');
}

questionCount++; //question 2
if(schoolCount.toUpperCase() === 'N' || schoolCount.toUpperCase() === 'no'){
  alert('You were correct about schools! Morgan attended a silly amount of schools.');
  answerCount++;
}else if (schoolCount.toUpperCase() === 'Y' || schoolCount.toUpperCase() === 'YES'){
  alert('Morgan attended more than twice as many schools as that.');
}else{
  alert('I\'m only capable of understanding Yes/No for an answer about Morgan\'s school history.');
}

questionCount++; //question 3
if(japanTime.toLowerCase() === 'n' || japanTime.toLowerCase() === 'no'){
  alert('違う - Chigau! Morgan spent nearly 2 years in beautiful Fukuyama.');
}else if (japanTime.toLowerCase() === 'y' || japanTime.toLowerCase() === 'yes'){
  alert('それは正しいです - That is correct! Morgan did live in Japan!');
  answerCount++;
}else{
  alert('I\'m only capable of understanding Yes/No for an answer about Japan.');
}

questionCount++; //question 4
if(previousWork.toLowerCase() === 'n' || previousWork.toLowerCase() === 'no'){
  alert('You were incorrect about Morgan\'s work history. He has spent several ' +
  'years as a software tester, amongst other roles.');
}else if (previousWork.toLowerCase() === 'y' || previousWork.toLowerCase() === 'yes'){
  alert('You were right! Morgan has worked in softare for nearly 8 years.');
  answerCount++;
}else{
  alert('I\'m only capable of understanding Yes/No for an answer about Morgan\'s work history.');
}

questionCount++; //question 5
if(tabletop.toLowerCase() === 'n' || tabletop.toLowerCase() === 'no'){
  alert('You nailed your spot check! Morgan obsessses about D&D to an unhealthy degree!');
  answerCount++;
}else if (tabletop.toLowerCase() === 'y' || tabletop.toLowerCase() === 'yes'){
  alert('CRY HAVOC! Morgan is insulted about your perception of his hobbies and will fight you over it!');
}else{
  alert('I\'m only capable of understanding Yes/No for an answer regarding Morgan\'s obsession.');
}
*/

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
