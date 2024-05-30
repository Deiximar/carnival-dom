import { Game } from './game.js';

const nivel1 = {
  nivel: 1,
  score: 50,
  time: 60
}

const nivel2 = {
  nivel: 2,
  score: 70,
  time: 30
}

const nivel3 = {
  nivel: 3,
  score: 100,
  time: 30
}
function starGame(level = 1) {
  const myGame = new Game(level);
  showText(myGame);
  myGame.start();
}

function showText(game) {
  const title = document.querySelector('.level-text');
  const level = document.querySelector('.level-number');
  const description = document.querySelector('.description');
  const targeScore = document.querySelector('.target-score');
  const limitTime = document.querySelector('.limit-time');

  level.innerHTML = game.level
  targeScore.innerHTML = `${game.targetScore} puntos`;
  limitTime.innerHTML = `${game.time_limit} segundos`;

  const start = Date.now();
  description.style.opacity = 1;
  title.style.opacity = 1;

  setTimeout(() => {
    setInterval(() => {
      let timePassed = Date.now() - start;
      if (timePassed >= 2100) {
        clearInterval(timer); // terminar la animación después de 2 segundos
        return;
      }
      opacity(title, description);
    }, 10)
  }, 1000)

  setTimeout(() => {
    title.style.visibility = 'hidden';
    description.style.visibility = 'hidden';
  }, 2100)
}

function opacity(title, description) {
  description.style.opacity -= 0.01;
  title.style.opacity -= 0.01;
}


starGame(2);

