import './index.scss';
import boardSize from './boardSize';
import buildBoard from './buildBoard';
import getBoardObjects from './utils/getBoardObjects';
import getSquarePositions from './utils/getSquarePositions';

const size = 5;
const board = boardSize(size);
const { latitude, longitude } = board;

const squarePositions = getSquarePositions(latitude, longitude);
buildBoard(latitude, longitude);

const { playerDefenseObject, playerAttackObject } = getBoardObjects(
  squarePositions
);
console.log('playerDefenseObject', playerDefenseObject);
console.log('playerAttackObject', playerAttackObject);
