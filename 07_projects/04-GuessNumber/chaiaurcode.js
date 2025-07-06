let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#gusseField');
const guessSlot = document.querySelector('.gusse');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more than one');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMesssage(`Game over. Random number wad ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber){
  displayMesssage('You gusse it right')
  endGame();
}else if(guess < randomNumber){
  displayMesssage('Number is Too low')
}else if(guess > randomNumber){
  displayMesssage('Number is Too High')
}
}

function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} ` 
}

function displayMesssage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(endGame) {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "new Game"> Start new Game</h2>`;
  startOver.appendChild(p)
  playGame = false;
  newGame()
}

function newGame(newgame) {
  const newGameButton = document.querySelector('#newGamwe')
  newGameButton.addEventListener('click', function(e){
   randomNumber =  parseInt(Math.random() * 100 + 1);
   prevGuess = []
   numGuess = 1 
   guessSlot.innerHTML = ''
   remaining.innerHTML = `${11 - numGuess}  `;
   userInput.removeAttribute('disable')
   startOver.removeChild(p)
   
    playGame =  true
  })
}
