import React from 'react';
import './index.css';
import Board from './components/board.js';
import initialiseChessBoard from './helpers/board-initializer.js';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      squares: initialiseChessBoard(),
      player: 1,
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    console.log(squares[i], i);
  }

  render() {
    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board 
            squares = {this.state.squares}
            onClick = {(i) => this.handleClick(i)}
            />
          </div>
        </div>
      </div>
    );
  }
}
