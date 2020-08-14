export default function getSquarePositions(lat, lon) {
  const lonString = lon.join('');
  let i = 0;
  let j = 0;
  let squarePositions = [];
  let latPosPlusLonPos = [];
  let column = [];

  for (; i < lat.length; i++) {
    for (; j < lon.length; j++) {
      latPosPlusLonPos = lat[j] + lonString[i];
      column.push(latPosPlusLonPos);
    }
    squarePositions = [...column];
    j = 0;
  }

  return squarePositions;
}
