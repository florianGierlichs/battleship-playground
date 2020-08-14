import createElement from './utils/createElement';

export default function buildBoard(longitude, latitude) {
  const container = createElement('div', 'container', 'Hallo Welt');
  document.body.appendChild(container);

  const reversedLongitude = longitude.reverse();

  reversedLongitude.forEach((element) => {
    const row = createElement('div', 'row');
    container.appendChild(row);

    const latSquare = createElement('div', 'latSquare', element);
    row.appendChild(latSquare);

    latitude.forEach(() => {
      const square = createElement('div', 'square');
      row.appendChild(square);
    });
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
