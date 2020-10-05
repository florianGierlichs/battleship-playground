import './index.scss';
import boardSize from './boardSize';
import buildBoard from './buildBoard';
import game from './game';
import start from './start';
import shipAnimation from './shipAnimation';

start();
shipAnimation();

const handleCreateBoard = (sizeParam) => {
  const size = sizeParam;
  const board = boardSize(size);
  const { latitude, longitude } = board;

  buildBoard(latitude, longitude);

  game(size, latitude, longitude);
};

document.querySelector('.startContainer').onsubmit = (event) => {
  event.preventDefault();
  const inputValue = document.querySelector('.sizeInput').value;

  const size = Number(inputValue);

  if (size <= 10 && size >= 4) {
    document.querySelector('.startContainer').remove();
    return handleCreateBoard(size);
  }

  return alert('Please choose a number between 4 and 10 - Thank you very much');
};
