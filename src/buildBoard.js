export default function buildBoard(longitude, latitude) {
  const container = document.createElement('div');
  container.className = 'container';
  document.body.appendChild(container);
  container.innerText = 'Hallo Welt';

  const reversedLongitude = longitude.reverse();

  reversedLongitude.forEach((element) => {
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    const latSquare = document.createElement('div');
    latSquare.className = 'latSquare';
    latSquare.innerText = element;
    row.appendChild(latSquare);

    latitude.forEach(() => {
      const square = document.createElement('div');
      square.className = 'square';
      row.appendChild(square);
    });
  });

  const latRow = document.createElement('div');
  latRow.className = 'latRow';
  container.appendChild(latRow);

  const corner = document.createElement('div');
  corner.className = 'corner';
  latRow.appendChild(corner);

  latitude.forEach((element) => {
    const lonSquare = document.createElement('div');
    lonSquare.className = 'lonSquare';
    lonSquare.innerText = element;
    latRow.appendChild(lonSquare);
  });
}
