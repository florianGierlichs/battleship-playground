export default function getBoardObjects() {
  const getPlayerDefBoard = (squarePositions) => {
    const playerDefBoard = {};
    squarePositions.forEach((square) => {
      playerDefBoard[square] = { gotHit: false, hasShip: false };
    });
    return playerDefBoard;
  };

  return { getPlayerDefBoard };
}
