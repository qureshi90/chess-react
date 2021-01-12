import Piece from './piece.js';

export default class Pawn extends Piece {
  constructor(player){
    super(player, (player === 1
      ? "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg"
      : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"
    ));

    this.initialPositions = {
      1: [48, 49, 50, 51, 52, 53, 54, 55],
      2: [8, 9, 10, 11, 12, 13, 14, 15]
    }
  }

  isMovePossible(src, dest) {
    if(this.player === 1){
      if ((dest === src - 8) || (dest === src - 16 && this.initialPositions[1].indexOf(src) !== -1)) {
        return true;
      }
      else {
        return false;
      }
    }
    else if(this.player === 2){
      if ((dest === src + 8) || (dest === src + 16 && this.initialPositions[2].indexOf(src) !== -1)) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  getSrcToDestPath(src, dest){
    if(dest === src - 16){
      return [src - 8];
    }
    else if(dest === src + 16){
      return [src + 8];
    }
    return [];
  }
}