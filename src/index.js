import './index.scss';
import boardSize from './boardSize';
import buildBoard from './buildBoard';

const size = 12;
const board = boardSize(size);
const { latitude, longitude } = board;
console.log(latitude);
console.log(longitude);

buildBoard(longitude, latitude);
