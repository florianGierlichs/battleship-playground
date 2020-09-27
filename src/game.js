const _ = require('lodash');
import getBoardObjects from './utils/getBoardObjects';
import getSquarePositions from './utils/getSquarePositions';

let gamemode = 'positioning';

export default function game(size, latitude, longitude) {
  setTimeout(() => alert(`Place ${size} ships on you defense board`), 100);

  const squarePositions = getSquarePositions(latitude, longitude);

  const { playerDefenseObject, playerAttackObject } = getBoardObjects(
    squarePositions
  );

  const squaresNodeList = document.querySelectorAll('.squareDefense');
  const squares = [...squaresNodeList];

  let ships = 0;
  let playerSuccessfulHits = 0;
  let computerSuccessfulHits = 0;

  const handleAttack = (square) => {
    //player attack
    if (
      square.classList.contains('shipHit') ||
      square.classList.contains('emptySquareHit')
    ) {
      return;
    } else {
      if (
        playerAttackObject[square.getAttribute('position')].hasShip === true
      ) {
        square.classList.add('shipHit');
        playerSuccessfulHits++;
        if (playerSuccessfulHits === size) {
          setTimeout(() => alert('Player won!'), 100);
        }
      } else if (
        playerAttackObject[square.getAttribute('position')].hasShip === false
      ) {
        square.classList.add('emptySquareHit');
      }
    }

    //computer attack
    const computerAttack = () => {
      const randomKey = Math.round(
        Object.keys(playerDefenseObject).length * Math.random()
      );
      if (!(randomKey >= Object.keys(playerDefenseObject).length)) {
        const randomComputerAttack = Object.keys(playerDefenseObject)[
          randomKey
        ];

        const computerAttackSquareElement = _.filter(squares, function (ele) {
          return ele.attributes[1].value === randomComputerAttack;
        });

        if (playerDefenseObject[randomComputerAttack].gotHit === true) {
          computerAttack();
        } else {
          playerDefenseObject[randomComputerAttack].gotHit = true;
          if (playerDefenseObject[randomComputerAttack].hasShip === true) {
            computerAttackSquareElement[0].classList.add('playShipGotHit');
            computerSuccessfulHits++;
            if (computerSuccessfulHits === size) {
              setTimeout(() => alert('computer won!'), 100);
            }
          } else {
            computerAttackSquareElement[0].classList.add('emptySquareHit');
          }
        }
      } else {
        computerAttack();
      }
    };

    computerAttack();
  };

  const handleClick = (square) => {
    const clickedSqaure = square.attributes.position.value;
    const playerDefenseObjectSquare = playerDefenseObject[clickedSqaure];

    //set player ships
    if (gamemode === 'positioning' && !playerDefenseObjectSquare.hasShip) {
      playerDefenseObjectSquare.hasShip = true;
      square.classList.add('placedShip');

      ships++;
    }

    if (ships >= size) {
      gamemode = 'fighting';
      setTimeout(() => alert('Start attacking on your attack board'), 100);
      squares.forEach((square) => {
        square.onclick = undefined;
      });
    }

    if (gamemode === 'fighting') {
      //set computer ships
      const playerAttackObjectKeys = Object.keys(playerAttackObject);
      const playerAttackObjectShipsPosition = _.sampleSize(
        playerAttackObjectKeys,
        size
      );
      playerAttackObjectShipsPosition.forEach(
        (ship) => (playerAttackObject[ship].hasShip = true)
      );

      //
      const attackSquaresNodeList = document.querySelectorAll('.squareAttack');
      const attackSquares = [...attackSquaresNodeList];
      attackSquares.forEach(
        (square) => (square.onclick = () => handleAttack(square))
      );
    }
  };

  if (gamemode === 'positioning') {
    squares.forEach((square) => (square.onclick = () => handleClick(square)));
  }
}
