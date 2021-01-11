import React from 'react';
import './index.css';
import Board from './components/board.js';
import initialiseChessBoard from './helpers/board-initializer.js';
//import _ from 'lodash';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: initialiseChessBoard(),
      player: 1,
      sourceSelection: -1,
      turn: 'white',
      status: ''
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    //let squares = _.cloneDeep(this.state.squares);

    if(this.state.sourceSelection === -1) {
      if(!squares[i] || squares[i].player !== this.state.player){
        this.setState({status: "Wrong selection. Choose " + this.state.turn + " pieces."});
      }
      else {
        //const item = this.state.squares[i];
        //console.log(item, i);
        //console.log(squares[i], i);
        //console.log(this.state.sourceSelection);

        // console.log(squares[i].player);
        // console.log(this.state.player);

        this.setState({
          sourceSelection: i,
          status: 'choose destination for selected piece'
        });
      }
    }
    
    else if(this.state.sourceSelection > -1) {
      // console.log(i);
      // console.log(this.state.squares[i]);
      // console.log(this.state.sourceSelection);
      // console.log(squares[this.state.sourceSelection]);
      //if(squares[i].player === this.state.player);

      if(squares[i] && squares[i].player === this.state.player){
        this.setState({
          status: "choose destination for selected piece",
          sourceSelection: i,
        });
      }

      else {
        //const squares = this.state.squares.slice();
        const isMovePossible = squares[this.state.sourceSelection].isMovePossible(this.state.sourceSelection, i);
        //const srcToDestPath = squares[this.state.sourceSelection].getSrcToDestPath(this.state.sourceSelection, i);

        //this.setState({sourceSelection: -1});
        if(isMovePossible) {
          squares[i] = squares[this.state.sourceSelection];
          squares[this.state.sourceSelection] = null;

          let turn = this.state.turn === 'white' ? 'black' : 'white';
          let player = this.state.player === 1 ? 2 : 1;

          this.setState({ 
            squares: squares,
            turn: turn,
            status: '',
            player: player,
            sourceSelection: -1
          });
        }

        else {
          this.setState({
            status: "Wrong selection. Choose valid source and destination again.",
            sourceSelection: -1,
          });
        }
        
        //console.log(squares);
        //console.log(turn);
      }

      // console.log(squares[i].player);
      // console.log(this.state.player);


      // const sourceIndex = 1;
      // const destinationIndex = 17;

      // squares[destinationIndex] = squares[sourceIndex];
      // squares[sourceIndex] = null;
      // this.setState({ squares: squares });
      // console.log(squares);
    }
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares = {this.state.squares}
            onClick = {(i) => this.handleClick(i)}
          />
        </div>

        <div className="game-info">
          <h3>Turn</h3>
          <div id="player-turn-box" style={{backgroundColor: this.state.turn}}></div>
          <div className="game-status">{this.state.status}</div>
        </div>
      </div>
    );
  }
}
