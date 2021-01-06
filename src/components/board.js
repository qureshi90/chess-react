import React from 'react';
import '../index.css';
import Square from './square.js';
//import _ from 'lodash';

export default class Board extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { squares: props.squares };
  // }

  // makeMove = () => {
  //   let squares = _.cloneDeep(this.state.squares);
  //   //const sourceIndex = 1;
  //   //const destinationIndex = 17;

  //   //squares[destinationIndex] = squares[sourceIndex];
  //   //squares[sourceIndex] = null;
  //   this.setState({ squares: squares });
  //   console.log(squares);
  // }

  renderSquare(i, squareShade) {
    //const { squares } = this.state;

    return <Square
      key={i}
      piece={this.props.squares[i]}
      style={this.props.squares[i] ? this.props.squares[i].style : null}
      shade={squareShade}
      // onClick = {(i) => this.makeMove(i)}
      // clickHandler={this.makeMove}
      onClick={() => this.props.onClick(i)}
      
    />
  }

  render() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const squareRows = [];
      for (let j = 0; j < 8; j++) {
        const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j)) ? "light-square" : "dark-square";
        squareRows.push(this.renderSquare((i * 8) + j, squareShade));
      }
      board.push(<div className="board-row" key={i}>{squareRows}</div>)
    }

    return (
      <div>
        {board}
      </div>
    );
  }
}

function isEven(num) {
  return num % 2 === 0
}
