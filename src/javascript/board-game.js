import { Game } from './game.js';


function starGame(level = 1) {
  const myGame = new Game(level);
  showText(myGame);
  document.getElementById('timer').innerHTML = `${myGame.timeLimit}s`;
  setTimeout(() => {
    myGame.updateClock();
  }, 1000);
  myGame.start();
}
let params = new URLSearchParams(document.location.search);
let level = parseInt(params.get("level"), 10);
localStorage.setItem("level", level)// is the number 18
starGame(level);

function showText(game) {
  const title = document.querySelector('.level-text');
  const level = document.querySelector('.level-number');
  const description = document.querySelector('.description');
  const targeScore = document.querySelector('.target-score');
  const limitTime = document.querySelector('.limit-time');

  level.innerHTML = game.level
  targeScore.innerHTML = `${game.targetScore} puntos`;
  limitTime.innerHTML = `${game.timeLimit} segundos`;

  const start = Date.now();
  description.style.opacity = 1;
  title.style.opacity = 1;

  setTimeout(() => {
    setInterval(() => {
      let timePassed = Date.now() - start;
      if (timePassed >= 2100) {
        clearInterval(); // terminar la animación después de 2 segundos
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



