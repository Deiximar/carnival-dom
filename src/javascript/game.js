import { Balloon } from './balloon.js'
export class Game {
  constructor(level) {
    this.level = level;
    this.score = 0;
    this.lives = 3;
    this.interval = this.getInterval(this.level);
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
      return 50;
    } else if (level === 2) {
      return 70;
    } else if (level === 3) {
      return 100;
    }
  }



  renderBalloon() {
    let balloon = new Balloon(this.level);
    console.log(balloon)
    const boardGame = document.getElementById('board-game');
    const balloonContainer = document.createElement('div');
    const positionX = Math.floor(Math.random() * (350 - 10)) + 10;

    balloonContainer.className = 'balloon-container';

    balloonContainer.style.animation = `balloon-ascent ${balloon.speed}s linear`

    balloonContainer.style.left = `${positionX}px`;
    balloonContainer.addEventListener('click', () => this.shootBalloon(balloon.point, balloonContainer));
    console.log(this.score)
    balloonContainer.appendChild(balloon.createBalloonElement());
    boardGame.appendChild(balloonContainer);


  }

  start() {
    setInterval(() => {
      this.renderBalloon();
      this.renderBalloon();
      this.renderBalloon();
    }, this.interval)
  }

  getInterval(level) {
    if (level === 1) {
      return 1500
    } else if (level === 2) {
      return 1300
    } else if (level === 3) {
      return 1100
    }
  }

  shootBalloon(point, container) {
    console.log(point + " this is my ballon")
    this.score += point;
    container.remove();
    console.log('score =' + this.score);
  }

  balloonMissed(balloon) {
    this.lives -= 1
    this.balloons.remove(balloon)
    if (this.lives <= 0) {
      end_game()
    }
  }

  endGame() {
    console.log(`Game Over! Your score: ${self.score}`);
  }

}