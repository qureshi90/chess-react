import Piece from './piece.js';

export default class Bishop extends Piece {
  constructor(player){
    super(player, (player === 1
      ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" 
      : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"
    ));
  }

  isMovePossible(src, dest){
    return (
      Math.abs(src - dest) % 9 === 0 || 
      Math.abs(src - dest) % 7 === 0
    );
  }
}