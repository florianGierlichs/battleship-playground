import createElement from './utils/createElement';
import getSquarePositions from './utils/getSquarePositions';

export default function buildBoard(longitude, latitude) {
  const container = createElement('div', 'container', 'Hallo Welt');
  document.body.appendChild(container);

  const reversedLongitude = longitude.reverse();

  const squarePositions = getSquarePositions(latitude, longitude);
  console.log('squarePositions', squarePositions);

  let j = 0;
  reversedLongitude.forEach((element) => {
    const row = createElement('div', 'row');
    container.appendChild(row);

    const latSquare = createElement('div', 'latSquare', element);
    row.appendChild(latSquare);

    for (let i = 0; i < latitude.length; i++) {
      const square = createElement('div', 'square');
      row.appendChild(square);
      let position = squarePositions[j];
      square.setAttribute('position', position);
      square.innerText = position;
      j++;
    }
  });

  const latRow = createElement('div', 'latRow');
  container.appendChild(latRow);

  const corner = createElement('div', 'corner');
  latRow.appendChild(corner);

  latitude.forEach((element) => {
    const lonSquare = createElement('div', 'lonSquare', element);
    latRow.appendChild(lonSquare);
  });
}
