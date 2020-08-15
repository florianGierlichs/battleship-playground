import createElement from './utils/createElement';
import getSquarePositions from './utils/getSquarePositions';

export default function buildBoard(latitude, longitude) {
  const container = createElement('div', 'container');
  document.body.appendChild(container);

  const playerDefBoard = createElement('div', 'Boards', 'playerDefBoard');
  const playerAttackBoard = createElement('div', 'Boards', 'playerAttackBoard');

  container.appendChild(playerDefBoard);
  container.appendChild(playerAttackBoard);

  const reversedLongitude = longitude.reverse();
  const squarePositions = getSquarePositions(latitude, longitude);

  let j = 0;
  reversedLongitude.forEach((element) => {
    const rowA = createElement('div', 'row');
    const rowB = createElement('div', 'row');

    playerDefBoard.appendChild(rowA);
    playerAttackBoard.appendChild(rowB);

    const latSquareA = createElement('div', 'latSquare', element);
    const latSquareB = createElement('div', 'latSquare', element);
    rowA.appendChild(latSquareA);
    rowB.appendChild(latSquareB);

    for (let i = 0; i < latitude.length; i++) {
      const squareA = createElement('div', 'square');
      const squareB = createElement('div', 'square');
      rowA.appendChild(squareA);
      rowB.appendChild(squareB);
      let position = squarePositions[j];
      squareA.setAttribute('position', position);
      squareA.innerText = position;
      squareB.setAttribute('position', position);
      squareB.innerText = position;
      j++;
    }
  });

  const latRowA = createElement('div', 'latRow');
  playerDefBoard.appendChild(latRowA);
  const latRowB = createElement('div', 'latRow');
  playerAttackBoard.appendChild(latRowB);

  const cornerA = createElement('div', 'corner');
  latRowA.appendChild(cornerA);
  const cornerB = createElement('div', 'corner');
  latRowB.appendChild(cornerB);

  latitude.forEach((element) => {
    const lonSquareA = createElement('div', 'lonSquare', element);
    latRowA.appendChild(lonSquareA);
    const lonSquareB = createElement('div', 'lonSquare', element);
    latRowB.appendChild(lonSquareB);
  });
}
