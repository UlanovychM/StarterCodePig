'use strict';

const restartBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const rollDice = document.querySelector('.dice');
const scoreID0 = document.querySelector('#score--0');
const scoreID1 = document.querySelector('#score--1');
const currentID0 = document.querySelector('#current--0');
const currentID1 = document.querySelector('#current--1');

let currentNum = null;
let activePlayer = 0;
let totalScore = [0, 0];
let isPlaying = true;

restartBtn.addEventListener('click', () => {
  isPlaying = true;

  totalScore = [0, 0];
  scoreID0.textContent = 0;
  scoreID1.textContent = 0;
  currentID0.textContent = 0;
  currentID1.textContent = 0;
});

const selectedPlayer = value => document.querySelector(value);
const rollImg = number => {
  switch (number) {
    case 1:
      rollDice.classList.remove('hidden');
      rollDice.src = 'dice1.png';
    case 2:
      rollDice.classList.remove('hidden');
      rollDice.src = 'dice2.png';
      break;
    case 3:
      rollDice.classList.remove('hidden');
      rollDice.src = 'dice3.png';
      break;
    case 4:
      rollDice.classList.remove('hidden');
      rollDice.src = 'dice4.png';
      break;
    case 5:
      rollDice.classList.remove('hidden');
      rollDice.src = 'dice5.png';
      break;
    case 6:
      rollDice.classList.remove('hidden');
      rollDice.src = 'dice6.png';
      break;
  }
};

const switchActivePlayers = () => {
  currentNum = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentNum;
  activePlayer = activePlayer === 0 ? 1 : 0;
  togglePlayer();
};

const togglePlayer = () => {
  selectedPlayer('.player--1').classList.toggle('player--active');
  selectedPlayer('.player--0').classList.toggle('player--active');
};

rollBtn.addEventListener('click', () => {
  if (isPlaying) {
    const riddleNumber = Math.floor(Math.random() * (6 - 1) + 1);

    rollImg(riddleNumber);
    if (riddleNumber !== 1) {
      currentNum += riddleNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentNum;
    } else {
      switchActivePlayers();
    }
  }
  console.log('click');
});

holdBtn.addEventListener('click', () => {
  if (isPlaying) {
    totalScore[activePlayer] += currentNum;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];

    if (totalScore[activePlayer] >= 20) {
      isPlaying = false;
      rollDice.classList.add('hidden');
      document
        .getElementById(`player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .getElementById(`current--${activePlayer}`)
        .classList.add('player--active');
    } else {
      switchActivePlayers();
    }
  }
  console.log(totalScore);
});
