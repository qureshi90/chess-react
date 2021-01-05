import React from 'react';
import '../index.css';
import Square from './square.js';

export default class Board extends React.Component {

  makeMove = () => {
    let square = this.state.squares;
    square[17] = square[1];
    square[1] = null;
    console.log('clicked');
  }

  renderSquare(i, squareShade) {
    return <Square 
    piece = {this.props.squares[i]} 
    style = {this.props.squares[i] ? this.props.squares[i].style : null}
    shade = {squareShade}
    onClick = {this.makeMove}
    />
  }

  render() {
    const board = [];
    for(let i = 0; i < 8; i++){
      const squareRows = [];
      for(let j = 0; j < 8; j++){
        const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "light-square" : "dark-square";
        squareRows.push(this.renderSquare((i*8) + j, squareShade));
      }
      board.push(<div className="board-row">{squareRows}</div>)
    }

    return (
      <div onClick = {this.makeMove}>
        {board }
      </div>
    );
  }
}

function isEven(num){
  return num % 2 === 0
}
