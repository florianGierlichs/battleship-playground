const _ = require('lodash');
import getBoardObjects from './utils/getBoardObjects';
import getSquarePositions from './utils/getSquarePositions';

let gamemode = 'positioning';

export default function game(size, latitude, longitude) {
  const squarePositions = getSquarePositions(latitude, longitude);

  const {
    playerDefenseObject,
    playerAttackObject,
    // computerDefenseObject,
    // computerAttackObject,
  } = getBoardObjects(squarePositions);

  console.log('playerDefenseObject', playerDefenseObject);
  console.log('playerAttackObject', playerAttackObject);
  // console.log('computerDefenseObject', computerDefenseObject);
  // console.log('computerAttackObject', computerAttackObject);

  const squaresNodeList = document.querySelectorAll('.squareDefense');
  const squares = [...squaresNodeList];

  let ships = 0;

  const handleAttack = (square) => {
    //player attack
    if (playerAttackObject[square.getAttribute('position')].hasShip === true) {
      square.classList.add('shipHit');
    } else if (
      playerAttackObject[square.getAttribute('position')].hasShip === false
    ) {
      square.classList.add('emptySquareHit');
    }

    //computer attack
    const computerAttack = () => {
      const computerAttackSquare = _.sample(playerDefenseObject);
      if (computerAttackSquare.gotHit === true) {
        console.log('was true');
        computerAttack();
      } else {
        computerAttackSquare.gotHit = true;
        console.log('test', Object.getOwnPropertyNames(computerAttackSquare));

        //
        //--------- hier weiter arbeiten. sample ist evtl nicht das richtige hier
        //
      }
    };

    computerAttack();
  };

  const handleClick = (square) => {
    console.log('clicked');
    const clickedSqaure = square.attributes.position.value;
    const playerDefenseObjectSquare = playerDefenseObject[clickedSqaure];

    if (gamemode === 'positioning' && !playerDefenseObjectSquare.hasShip) {
      playerDefenseObjectSquare.hasShip = true;
      square.classList.add('placedShip');

      ships++;
    }

    if (ships >= 6) {
      gamemode = 'fighting';
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
