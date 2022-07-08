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

btnCheck.addEventListener('click', () =>{
    console.log('random', random);
    if (!inputGuess.value) {
      message.textContent = '⛔️ No Number!';
    } else {
      checkNumber(+inputGuess.value);
    }
});

btnAgain.addEventListener('click', () =>{

});

function checkNumber(number) {
    let i = 20;

    if (number < random) {
        message.textContent = 'the number is bigger!';
        scoreDecr(labelScore);
    } else if (number > random) {
        message.textContent = 'the number is lower!';
        scoreDecr(labelScore);
    } else if (number === random) {
        qustionMarkBlock.textContent = random;
        message.textContent = '🎉 congratulations!';
        document.body.style.backgroundColor = '#60b347';
        highScore.innerHTML = scoreDecr(labelScore);
    }
};

function scoreDecr(score) {
  return score.innerHTML -= 1;;
}