import { Balloon } from './balloon.js'
export class Game {
  constructor(level) {
    this.level = level;
    this.score = 0;
    this.lives = 3;
    this.intervalTime = this.getInterval(this.level);
    this.targetScore = this.setTargetScore(this.level);
    this.timeLimit = this.setTimeLimit(this.level);
  }

  setTimeLimit(level) {
    if (level === 1) {
      return 60;
    } else if (level === 2) {
      return 45;
    } else if (level === 3) {
      return 30;
    }
  }

  setTargetScore(level) {
    if (level === 1) {
      return 200;
    } else if (level === 2) {
      return 350;
    } else if (level === 3) {
      return 500;
    }
  }

  renderBalloon(timeout) {
    setTimeout(() => {
      let balloon = new Balloon(this.level);

      const boardGame = document.getElementById('board-game');
      const balloonContainer = document.createElement('div');
      const positionX = Math.floor(Math.random() * (85 - 10)) + 10;

      balloonContainer.className = 'balloon-container';

      balloonContainer.style.animation = `balloon-ascent ${balloon.speed}s linear`

      balloonContainer.style.left = `${positionX}%`;
      balloonContainer.addEventListener('click', () => this.shootBalloon(balloon.point, balloonContainer));
      balloonContainer.addEventListener('animationend', () => this.balloonMissed(balloonContainer));

      balloonContainer.appendChild(balloon.createBalloonElement());
      boardGame.appendChild(balloonContainer);
    }, timeout);

  }

  start() {
    const waitTime = Math.floor(this.intervalTime / 3);

    this.intervalId = setInterval(() => {
      this.renderBalloon(waitTime);
      this.renderBalloon(waitTime * 2);
      this.renderBalloon(waitTime * 3);
    }, this.intervalTime)

  }

  getInterval(level) {
    if (level === 1) {
      return 1400
    } else if (level === 2) {
      return 1300
    } else if (level === 3) {
      return 1300
    }
  }
  updateClock() {
    document.getElementById('timer').innerHTML = `${this.timeLimit}s`;
    if (this.timeLimit == 0) {
      this.endGame();
    } else {
      this.timeLimit -= 1
      setTimeout(() => this.updateClock(), 1000);
    }
  }

  shootBalloon(point, container) {
    this.score += point;
    document.getElementById('score').innerHTML = this.score;
    container.remove();
  }

  balloonMissed(balloon) {
    this.lives -= 1;
    balloon.remove()
    document.querySelectorAll('.life')[0].remove();
    if (this.lives <= 0) {
      this.endGame()
    }
  }

  endGame() {
    localStorage.setItem("newScore", this.score);
    if (this.score >= this.targetScore) {
      window.location.href = "youwin.html";
    }
    else {
      window.location.href = "gameover.html";
    }
  }

}