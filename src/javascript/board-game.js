import { Balloon } from './balloon.js';



function render() {
  let balloon = new Balloon(3, 2);
  const boardGame = document.getElementById('board-game');
  const balloonContainer = document.createElement('div');
  const positionX = Math.floor(Math.random() * (350 - 10)) + 10;

  balloonContainer.className = 'balloon-container';


  balloonContainer.style.animation = `balloon-ascent ${balloon.speed}s linear`

  balloonContainer.style.left = `${positionX}px`;
  balloonContainer.addEventListener('click', () => balloonContainer.remove());

  balloonContainer.appendChild(balloon.element);
  boardGame.appendChild(balloonContainer);

}


setInterval(() =>
  render(), 2000)