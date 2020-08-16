import './index.scss';
import boardSize from './boardSize';
import buildBoard from './buildBoard';
import game from './game';

const size = 5;
const board = boardSize(size);
const { latitude, longitude } = board;

buildBoard(latitude, longitude);

game(size, latitude, longitude);
