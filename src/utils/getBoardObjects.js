export default function getBoardObjects(squarePositions) {
  const getPlayerDefenseObject = (squarePositions) => {
    const playerDefenseObject = {};
    squarePositions.forEach((square) => {
      playerDefenseObject[square] = { gotHit: false, hasShip: false };
    });
    return playerDefenseObject;
  };

  const getPlayerAttackObject = (squarePositions) => {
    const playerAttackObject = {};
    squarePositions.forEach((square) => {
      playerAttackObject[square] = { gotHit: false, hasShip: false };
    });
    return playerAttackObject;
  };

  const playerDefenseObject = getPlayerDefenseObject(squarePositions);
  const playerAttackObject = getPlayerAttackObject(squarePositions);
  return { playerDefenseObject, playerAttackObject };
}
