import './index.scss';
import boardSize from './boardSize';
import buildBoard from './buildBoard';
import getBoardObjects from './utils/getBoardObjects';
import getSquarePositions from './utils/getSquarePositions';

const size = 6;
const board = boardSize(size);
const { latitude, longitude } = board;
console.log(latitude);
console.log(longitude);

const squarePositions = getSquarePositions(latitude, longitude);
buildBoard(latitude, longitude);

const { playerDefBoardObject } = getBoardObjects(squarePositions);
console.log('playerDefBoardObject', playerDefBoardObject);
