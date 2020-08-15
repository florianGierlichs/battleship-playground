export default function getBoardObjects(squarePositions) {
  const getPlayerDefBoardObject = (squarePositions) => {
    const playerDefBoardObject = {};
    squarePositions.forEach((square) => {
      playerDefBoardObject[square] = { gotHit: false, hasShip: false };
    });
    return playerDefBoardObject;
  };
  const playerDefBoardObject = getPlayerDefBoardObject(squarePositions);
  return { playerDefBoardObject };
}
