import createElement from './utils/createElement';

export default function start() {
  const headline = createElement('h1', 'headline', 'Battleship-Playground');
  const startContainer = createElement(
    'form',
    'startContainer',
    'Please choose a size between 4 and 10 for your board'
  );
  const sizeInput = createElement('input', 'sizeInput');
  const startButton = createElement('button', 'startButton', 'Start');

  sizeInput.type = 'number';
  document.body.appendChild(headline);
  document.body.appendChild(startContainer);
  startContainer.appendChild(sizeInput);
  startContainer.appendChild(startButton);
}
