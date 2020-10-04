import createElement from './utils/createElement';

export default function start() {
  const startContainer = createElement(
    'form',
    'startContainer',
    'Please choose a size for your board'
  );
  const sizeInput = createElement('input', 'sizeInput');
  const startButton = createElement('button', 'startButton', 'Start');

  sizeInput.type = 'number';
  document.body.appendChild(startContainer);
  startContainer.appendChild(sizeInput);
  startContainer.appendChild(startButton);
}
