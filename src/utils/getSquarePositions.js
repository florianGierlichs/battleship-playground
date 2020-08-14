export default function getSquarePositions(lat, lon) {
  const lonString = lon.join('');
  let i = 0;
  let j = 0;
  let squarePositions = [];
  let latPosPlusLonPos = [];

  for (; i < lat.length; i++) {
    for (; j < lon.length; j++) {
      latPosPlusLonPos = lat[j] + lonString[i];
      squarePositions.push(latPosPlusLonPos);
    }
    j = 0;
  }

  return squarePositions;
}
