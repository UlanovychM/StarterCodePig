'use strict';

const restartBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--hold');
const holdBtn = document.querySelector('.btn--roll');

const player0 = null;
const player1 = null;
const riddleNumber = Math.floor(Math.random() * (6 - 1) + 1);

restartBtn.addEventListener('click', () => {
  body.innerHTML = `
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
