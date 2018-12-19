// =============================================================================
// Number Guesser Functions
// =============================================================================


// Dom Variables
// =============================================================================

var minRangeInput = document.getElementById('js-min-range-input');
var maxRangeInput = document.getElementById('js-max-range-input');
var updateRange = document.getElementById('js-update-range-btn');
var player1NameInput = document.getElementById('js-player1-name-input');
var player2NameInput = document.getElementById('js-player2-name-input');
var player1GuessInput = document.getElementById('js-player1-guess-input');
var player2GuessInput = document.getElementById('js-player2-guess-input');
var submitGuessBtn = document.getElementById('js-submit-guess');
var resetGameBtn = document.getElementById('js-reset-game');
var clearGameBtn = document.getElementById('js-clear-game');
var minRangeDisplay = document.getElementById('js-min-range-display');
var maxRangeDisplay = document.getElementById('js-max-range-display');
var resultsPlayer1Name = document.getElementById('js-results-name1');
var resultsPlayer2Name = document.getElementById('js-results-name2');
var resultsPlayer1Guess = document.getElementById('js-results-guess1');
var resultsPlayer2Guess = document.getElementById('js-results-guess2');
var resultsPlayer1Msg = document.getElementById('js-results-message1');
var resultsPlayer2Msg = document.getElementById('js-results-message2');


// Inner Ints
// =============================================================================

var minRange = 1;
var maxRange = 100;
var randNum = getRandomInt(minRange, maxRange);
var p1Name = null;
var p2Name = null;
var p1Guess = null;
var p2Guess = null;


// Random Int
// =============================================================================

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// 'Update Range' Button
// =============================================================================

updateRange.addEventListener('click', function() {
  minRange = parseInt(minRangeInput.value, 10);
  maxRange = parseInt(maxRangeInput.value, 10);

  minRangeDisplay.innerText = minRange;
  maxRangeDisplay.innerText = maxRange;

  randNum = getRandomInt(minRange, maxRange);
  console.log(randNum);
})


// 'Submit Guess' Button
// =============================================================================

submitGuessBtn.addEventListener('click', function() {
  p1Guess = parseInt(player1GuessInput.value, 10);
  p2Guess = parseInt(player2GuessInput.value, 10);
  p1Name = player1NameInput.value;
  p2Name = player2NameInput.value;

  // Game Logic
  if (p1Guess > randNum) {
    resultsPlayer1Msg.innerText = `that's too high`;
  } else if (p1Guess < randNum) {
    resultsPlayer1Msg.innerText = `that's too low`;
  }

  if (p2Guess > randNum) {
    resultsPlayer2Msg.innerText = `that's too high`;
  } else if (p2Guess < randNum) {
    resultsPlayer2Msg.innerText = `that's too low`;
  }

  if (p1Guess === randNum) {
    resultsPlayer1Msg.innerText = `BOOM!`;
    resetGame();
  }

  if (p2Guess === randNum) {
    resultsPlayer2Msg.innerText = `BOOM!`;
    resetGame();
  }


  // Results Card
  resultsPlayer1Name.innerText = p1Name;
  resultsPlayer2Name.innerText = p2Name;
  resultsPlayer1Guess.innerText = p1Guess;
  resultsPlayer2Guess.innerText = p2Guess;

})


// 'Clear' Button
// =============================================================================

clearGameBtn.addEventListener('click', function() {
  player1NameInput.value = '';
  player2NameInput.value = '';
  player1GuessInput.value = '';
  player2GuessInput.value = '';

  disableCheck();
});


// 'Reset' Button
// =============================================================================

resetGameBtn.addEventListener('click', resetGame);


// Disable Buttons
// =============================================================================

function disableCheck() {
  if (player1NameInput.value == '' && player2NameInput.value == '' &&
    player1GuessInput.value == '' && player2GuessInput.value == '') {
    resetGameBtn.disabled = true;
    clearGameBtn.disabled = true;
    resetGameBtn.classList.add('btn--disabled');
    clearGameBtn.classList.add('btn--disabled');
  } else {
    resetGameBtn.disabled = false;
    clearGameBtn.disabled = false;
    resetGameBtn.classList.remove('btn--disabled');
    clearGameBtn.classList.remove('btn--disabled');
  }
};

player1NameInput.addEventListener('keyup', disableCheck);
player2NameInput.addEventListener('keyup', disableCheck);
player1GuessInput.addEventListener('keyup', disableCheck);
player2GuessInput.addEventListener('keyup', disableCheck);


// Game Reset
// =============================================================================

function resetGame() {
  player1NameInput.value = '';
  player2NameInput.value = '';
  player1GuessInput.value = '';
  player2GuessInput.value = '';

  randNum = getRandomInt(minRange, maxRange);
  console.log(randNum);

  disableCheck();
}