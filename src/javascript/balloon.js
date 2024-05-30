export class Balloon {
  constructor(size, speed) {
    this.size = size;
    this.speed = speed;
    this.point = this.calculate_point(this.size);
    this.color = this.create_color()
    this.element = this.create_balloon_element()
  }

  create_color() {
    const colors = ['red', 'purple', 'deeppink', 'green', 'yellow', 'blue', 'orange', 'tomato', 'rebeccapurple', 'chocolate', 'cornflowerblue', 'crimson'];
    const randomNumber = Math.floor(Math.random() * (colors.length));
    return colors[randomNumber];
  }

  create_balloon_element() {
    const balloonElement = document.createElement('div');
    balloonElement.style.backgroundColor = this.color;
    balloonElement.style.color = this.color;
    balloonElement.className = "balloon";

    if (this.size == 3) {
      balloonElement.className += " balloon-easy"
    } else if (this.size == 2) {
      balloonElement.className += " balloon-medium"
    } else if (this.size == 1) {
      balloonElement.className += " balloon-hard"
    }

    return balloonElement;
  }

  calculate_point(size) {
    if (size == 1) {
      return 10;
    } else if (size == 2) {
      return 5;
    } else if (size == 3) {
      return 2;
    }
  }
}