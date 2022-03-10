'use strict'

// Refactoring Our Code


let secretNumber;
let highscore = 0;

function secretNumberGenerator () {
    secretNumber = Math.floor(Math.random() * 21);
}
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
};

secretNumberGenerator()
let score = 20 //document.querySelector('.score').value;

// uncomment code to see secret number
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.guess').value = '';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!')

    document.querySelector('body').style.backgroundColor = '#60b347'; // changes background color when player wins

    document.querySelector('.number').style.width= '30rem' // changes width of secret number

    document.querySelector('.number').textContent = secretNumber; // shows secret number when player wins

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
      }
    }
  });

// coding challenge / coding again button

  document.querySelector('.again').addEventListener('click', function() {
  secretNumberGenerator()
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
})
