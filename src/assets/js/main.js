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

var minRange = null;
var maxRange = null;
var randNum = null;
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

  if (p1Guess === randNum || p2Guess === randNum) {
    // You Win!
  }


  resultsPlayer1Name.innerText = p1Name;
  resultsPlayer2Name.innerText = p2Name;
  resultsPlayer1Guess.innerText = p1Guess;
  resultsPlayer2Guess.innerText = p2Guess;

})