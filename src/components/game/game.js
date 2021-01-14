import React from 'react';
import '../style.scss';
import Board from '../board/board.js';
import FallenSoldiers from '../fallen-soldiers/fallen-soldiers.js';
import initialiseChessBoard from '../../helpers/board-initializer.js';

export default class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: initialiseChessBoard(),
      player: 1,
      sourceSelection: -1,
      turn: 'white',
      status: '',
      whiteFallenSoldiers: [],
      blackFallenSoldiers: []
    }
  }

  handleClick = (i) => {
    const squares = this.state.squares.slice();

    if(this.state.sourceSelection === -1) {
      if(!squares[i] || squares[i].player !== this.state.player){
        this.setState({status: "Wrong selection. Choose " + this.state.turn + " pieces."});
      }
      else {
        this.setState({
          sourceSelection: i,
          status: 'choose destination for selected piece'
        });
      }
    }
    
    else if(this.state.sourceSelection > -1) {
      if(squares[i] && squares[i].player === this.state.player){
        this.setState({
          status: "choose destination for selected piece",
          sourceSelection: i
        });
      }
      else {
        const isDestOccupied = squares[i] ? true : false;
        const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i, isDestOccupied);
        const srcToDestPath = squares[this.state.sourceSelection].getSrcToDestPath(this.state.sourceSelection, i);
        const isMoveLegal = this.isMoveLegal(srcToDestPath);
        const whiteFallenSoldiers = this.state.whiteFallenSoldiers.slice();
        const blackFallenSoldiers = this.state.blackFallenSoldiers.slice();

        if(isMovePossible && isMoveLegal) {
          if( squares[i] && squares[i].constructor.name === 'King' ) {
            squares[i] = squares[this.state.sourceSelection];
            squares[this.state.sourceSelection] = null;
            window.confirm(this.state.turn + ' won the game');
            this.setState({
              squares: initialiseChessBoard(),
              player: 1,
              sourceSelection: -1,
              turn: 'white',
              whiteFallenSoldiers: [],
              blackFallenSoldiers: [],
              status: this.state.turn + " won the game"
            })
            console.log('king captured and ' + this.state.turn + ' won the game');
          }
          else {
            if(squares[i] !== null){
              if(squares[i].player === 1){
                whiteFallenSoldiers.unshift(squares[i]);
              }
              else{
                blackFallenSoldiers.unshift(squares[i]);
              }
            }
            squares[i] = squares[this.state.sourceSelection];
            squares[this.state.sourceSelection] = null;
            let turn = this.state.turn === 'white' ? 'black' : 'white';
            let player = this.state.player === 1 ? 2 : 1;
            this.setState({
              squares: squares,
              turn: turn,
              status: '',
              player: player,
              sourceSelection: -1,
              whiteFallenSoldiers: whiteFallenSoldiers,
              blackFallenSoldiers: blackFallenSoldiers
            });
          }
        }
        else {
          this.setState({
            status: "Wrong selection. Choose valid source and destination again.",
            sourceSelection: -1
          });
        }
      }
    }
  }

  isMoveLegal(srcToDestPath){
    let isLegal = true;
    for(let i = 0; i < srcToDestPath.length; i++){
      if(this.state.squares[srcToDestPath[i]] !== null){
        isLegal = false;
      }
    }
    return isLegal;
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares = {this.state.squares}
            onClick = {this.handleClick}
          />
        </div>
        <div className="game-info">
          <h3>Turn:</h3>
          <div id="player-turn-box" style={{backgroundColor: this.state.turn}}></div>
          <h3>Status:</h3>
          <div className="game-status">{this.state.status}</div>
          <h3>Fallen Soldiers:</h3>
          <div className="fallen-soldiers">
            <FallenSoldiers
              whiteFallenSoldiers = {this.state.whiteFallenSoldiers}
              blackFallenSoldiers = {this.state.blackFallenSoldiers}
            />
          </div>
        </div>
      </div>
    );
  }
}
