let timer = 0;

const colors = ['red', 'purple', 'deeppink', 'green', 'yellow', 'blue', 'orange', 'tomato', 'rebeccapurple', 'chocolate', 'cornflowerblue', 'crimson'];

function createColor() {
  const randomNumber = Math.floor(Math.random() * (colors.length));
  return colors[randomNumber];
}

function createBallon() {
  const ballon = document.createElement('div');
  const color = createColor();

  ballon.className = "ballon";
  ballon.style.backgroundColor = color;
  ballon.style.color = color;

  return ballon;
}

function render() {
  const boardGame = document.getElementById('board-game');
  const ballonContainer = document.createElement('div');
  const positionX = Math.floor(Math.random() * (350 - 10)) + 10;

  ballonContainer.className = 'ballon-container';
  ballonContainer.style.left = `${positionX}px`
  ballonContainer.addEventListener('click', () => ballonContainer.remove());

  ballonContainer.appendChild(createBallon());
  boardGame.appendChild(ballonContainer);

}



setInterval(() =>
  render(), 2000)

