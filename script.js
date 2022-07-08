'use strict'

// let random = Math.floor(Math.random(2) * 20);
let random = Math.trunc(Math.random(2) * 20) + 1;

const inputGuess = document.querySelector('.guess');
const message = document.querySelector('.message');
const btnCheck = document.querySelector('.check');
const qustionMarkBlock = document.querySelector('.number');
const btnAgain = document.querySelector('.again');

const labelScore = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
let decreaseNumber = 20;

btnCheck.addEventListener('click', () =>{
    console.log('random', random);
    if (!inputGuess.value) {
      message.textContent = '⛔️ No Number!';
    } else {
      checkNumber(+inputGuess.value);
    }
});

btnAgain.addEventListener('click', () =>{
    decreaseNumber = 20;
    inputGuess.value = '';
    labelScore.innerHTML = decreaseNumber;
    random = Math.trunc(Math.random(2) * 20) + 1;
    message.textContent = 'Start guessing...';
    document.body.style.backgroundColor = '#222';
});

function checkNumber(number) {
    let i = 20;

    if (number < random) {
        message.textContent = 'the number is bigger!';
        scoreDecrease(labelScore);
    } else if (number > random) {
        message.textContent = 'the number is lower!';
        scoreDecrease(labelScore);
    } else if (number === random) {
        qustionMarkBlock.textContent = random;
        message.textContent = '🎉 congratulations!';
        document.body.style.backgroundColor = '#60b347';
        highScore.innerHTML = decreaseNumber;
        // if(highScore.value < decreaseNumber) {
        //     highScore = decreaseNumber;
        //     console.log(highScore);
        // }
    }
};

function scoreDecrease(score) {
   if (score.innerHTML > 1) {
    score.innerHTML = --decreaseNumber;
   } else {
    score.innerHTML = 'Game Over';
   }

//    if (score.innerHTML < 10) {
//     score.innerHTML = `0${--decreaseNumber}`;
//    }

   if (score.innerHTML <= 3) {
    score.style.color = 'red';
   }
}