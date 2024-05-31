export class Balloon {
  constructor(level) {
    this.level = level;
    this.speed = this.getSpeed(this.level);
    this.point = this.calculatePoint();
    this.color = this.createColor();
    this.element = this.createBalloonElement();
  }

  createColor() {
    const colors = ['red', 'purple', 'deeppink', 'green', 'yellow', 'blue', 'orange', 'tomato', 'rebeccapurple', 'chocolate', 'cornflowerblue', 'crimson'];
    const randomNumber = Math.floor(Math.random() * (colors.length));
    return colors[randomNumber];
  }

  createBalloonElement() {
    const balloonElement = document.createElement('div');
    balloonElement.style.backgroundColor = this.color;
    balloonElement.style.color = this.color;
    balloonElement.className = "balloon";

    if (this.level == 1) {
      balloonElement.className += " balloon-easy"
    } else if (this.level == 2) {
      balloonElement.className += " balloon-medium"
    } else if (this.level == 3) {
      balloonElement.className += " balloon-hard"
    }
    return balloonElement;
  }

  getSpeed(level) {
    if (level == 1) {
      return 8
    } else if (level == 2) {
      return 7
    } else if (level == 3) {
      return 6
    }
  }

  calculatePoint() {
    if (this.level == 3) {
      return 10;
    } else if (this.level == 2) {
      return 5;
    } else if (this.level == 1) {
      return 2;
    }
  }
}