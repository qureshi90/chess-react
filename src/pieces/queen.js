import Piece from './piece.js';

export default class Queen extends Piece {
  constructor(player){
    super(player, (player === 1 
      ? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"
      : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"
    ));
  }

  isMovePossible(src, dest){
    let mod = src % 8;
    let diff = 8 - mod;
    
    return (
      Math.abs(src - dest) % 9 === 0 || 
      Math.abs(src - dest) % 7 === 0 ||
      Math.abs(src - dest) % 8 === 0 || 
      (dest >= (src - mod) && dest < (src + diff))
    );
  }
}