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

  const getComputerDefenseObject = (squarePositions) => {
    const computerAttackObject = {};
    squarePositions.forEach((square) => {
      computerAttackObject[square] = { gotHit: false, hasShip: false };
    });
    return computerAttackObject;
  };

  const getComputerAttackObject = (squarePositions) => {
    const computerAttackObject = {};
    squarePositions.forEach((square) => {
      computerAttackObject[square] = { gotHit: false, hasShip: false };
    });
    return computerAttackObject;
  };

  const playerDefenseObject = getPlayerDefenseObject(squarePositions);
  const playerAttackObject = getPlayerAttackObject(squarePositions);
  const computerDefenseObject = getComputerDefenseObject(squarePositions);
  const computerAttackObject = getComputerAttackObject(squarePositions);

  //todo: remove computer objects, because they are not needed

  return {
    playerDefenseObject,
    playerAttackObject,
    computerDefenseObject,
    computerAttackObject,
  };
}
