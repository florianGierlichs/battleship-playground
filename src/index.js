import './index.scss';
import './boardSize';
import boardSize from './boardSize';

const size = 6;
const board = boardSize(size);
const { latitude, longitude } = board;
console.log(latitude);
console.log(longitude);

const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);
container.innerText = 'Hallo Welt';

longitude.forEach(() => {
  const row = document.createElement('div');
  row.className = 'row';
  container.appendChild(row);
  latitude.forEach(() => {
    const square = document.createElement('div');
    square.className = 'square';
    row.appendChild(square);
  });
});
