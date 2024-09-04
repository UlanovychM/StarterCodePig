'use strict';

const restartBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const rollDice = document.querySelector('.dice');
const scoreID0 = document.querySelector('#score--0');
const scoreID1 = document.querySelector('#score--1');

let currentNum = 0;
let activePlayer = 0;

const totalScore = [0, 0];

const selectedPlayer = value => document.querySelector(value);
const rollImg = number => {
  switch (number) {
    case 2:
      rollDice.src = 'dice2.png';
      break;
    case 3:
      rollDice.src = 'dice3.png';
      break;
    case 4:
      rollDice.src = 'dice4.png';
      break;
    case 5:
      rollDice.src = 'dice5.png';
      break;
    case 6:
      rollDice.src = 'dice6.png';
      break;
    default:
      rollDice.src = 'dice1.png';
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

restartBtn.addEventListener('click', () => {
  document.querySelector('body').innerHTML = `
   <main>
      <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Игрок 1</h2>
        <p class="score" id="score--0">0</p>
        <div class="current">
          <p class="current-label">Текущие очки</p>
          <p class="current-score" id="current--0">0</p>
        </div>
      </section>
      <section class="player player--1">
        <h2 class="name" id="name--1">Игрок 2</h2>
        <p class="score" id="score--1">0</p>
        <div class="current">
          <p class="current-label">Текущие очки</p>
          <p class="current-score" id="current--1">0</p>
        </div>
      </section>

      <img src="dice1.png" alt="Playing dice" class="dice" />
      <button class="btn btn--new">🐷 Новая игра</button>
      <button class="btn btn--roll">🎲 Бросить кубик</button>
      <button class="btn btn--hold">👌 Оставить</button>
    </main>`;
});

rollBtn.addEventListener('click', () => {
  const riddleNumber = Math.floor(Math.random() * (6 - 1) + 1);

  rollImg(riddleNumber);
  if (riddleNumber !== 1) {
    currentNum += riddleNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentNum;
  } else {
    switchActivePlayers();
  }
});

holdBtn.addEventListener('click', () => {
  totalScore[activePlayer] += currentNum;
  document.getElementById(`score--${activePlayer}`).textContent =
    totalScore[activePlayer];

  if (totalScore[activePlayer] >= 100) {
    document
      .getElementById(`player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .getElementById(`current--${activePlayer}`)
      .classList.add('player--active');
  } else {
    switchActivePlayers();
  }
});
