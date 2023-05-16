import './style.css';

import Board from './modules/board.js';

const board = new Board();

const scoreForm = document.querySelector('.score-form');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const refresh = document.querySelector('#refresh');

scoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerName = name.value;
  const playerScore = score.value;
  board.addScore(playerScore, playerName);
  name.value = '';
  score.value = '';
});

const loadScores = async () => {
  await board.getScores();
  board.displayScores();
};

refresh.addEventListener('click', () => {
  loadScores();
});

window.onload = async () => {
  loadScores();
};
