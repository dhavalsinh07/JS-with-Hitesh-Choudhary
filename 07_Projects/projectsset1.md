# Project related to DOM
##  Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

``` javascript
console.log('Dhaval');
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
   switch(e.target.id){
     case 'grey':
       body.style.backgroundColor = 'grey';
       break;
       case 'white':
        body.style.backgroundColor = 'white';
        break;
       case 'blue':
        body.style.backgroundColor = 'blue';
        break;
       case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
   }
  });
});


```
## Project 2 Solution

``` javascript
const form = document.querySelector('form');

// This use case will give you an empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the result
    if (bmi < 18.6) {
      results.innerHTML = `<span> ${bmi}0</span> ,Under Weight`;
    }
    else if (bmi >= 18.6 && bmi <= 24.9 ) {
      results.innerHTML = `<span> ${bmi}0</span> ,Normal Range`;
    }
    else if (bmi > 24.9) {
      results.innerHTML = `<span> ${bmi}0</span> ,Overweight`;
    }
  }
});

```

## Project 3 Solution

```javascript
const clock = document.getElementById('clock')
// document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


## Project 4 solution

```javascript 
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesseSlot = document.querySelector('.guesses');
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
    validateGuess(guess, 'dhaval');
  });
}
function validateGuess(guess, x) {
  console.log('guess', guess);
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('please enter number more than 1');
  } else if (guess > 100) {
    alert('please enter number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guesseSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame()
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesseSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;    
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })
}

```