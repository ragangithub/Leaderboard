import { getData, postData } from './api.js';

function Score(score, name) {
  this.score = score;
  this.user = name;
}

export default class Board {
  constructor() {
    this.scores = [];
  }

  addScore = (score, name) => {
    const newScore = new Score(score, name);
    postData(newScore);
  };

  getScores = async () => {
    const scores = await getData();

    this.scores = scores;
  };

  displayScores = () => {
    const container = document.querySelector('.board');
    container.innerHTML = '';
    this.scores.forEach((score) => {
      const li = document.createElement('li');

      li.id = score.id;
      li.textContent = `${score.user}:${score.score}`;
      container.appendChild(li);
    });
  };
}
