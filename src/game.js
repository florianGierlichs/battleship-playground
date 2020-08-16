import getBoardObjects from './utils/getBoardObjects';
import getSquarePositions from './utils/getSquarePositions';

export default function game(size, latitude, longitude) {
  const squarePositions = getSquarePositions(latitude, longitude);

  const {
    playerDefenseObject,
    playerAttackObject,
    computerDefenseObject,
    computerAttackObject,
  } = getBoardObjects(squarePositions);

  console.log('playerDefenseObject', playerDefenseObject);
  console.log('playerAttackObject', playerAttackObject);
  console.log('computerDefenseObject', computerDefenseObject);
  console.log('computerAttackObject', computerAttackObject);

  const squaresNodeList = document.querySelectorAll('.squareDefense');
  const squares = [...squaresNodeList];

  function handleClick(square) {
    console.log(square.attributes.position.value);

    square.classList.add('placedShip');
  }

  squares.forEach((square) =>
    square.addEventListener('click', () => handleClick(square))
  );
}

//todo: in den Objekten prüfen ob alle Schiffe gesetzt wurden

// element.classList.add("my-class");
// element.classList.remove("my-class");
