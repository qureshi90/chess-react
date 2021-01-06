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
      sourceSelection: -1
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    //let squares = _.cloneDeep(this.state.squares);

    if(this.state.sourceSelection === -1) {
      //const item = this.state.squares[i];
      console.log(squares[i], i);
      //console.log(item, i);
      console.log(this.state.sourceSelection);
      this.setState({sourceSelection: i});
    }
    
    else if (this.state.sourceSelection > -1) {
      // console.log(i);
      // console.log(this.state.squares[i]);
      // console.log(this.state.sourceSelection);
      // console.log(squares[this.state.sourceSelection]);

      this.setState({sourceSelection: -1});
      squares[i] = squares[this.state.sourceSelection];
      squares[this.state.sourceSelection] = null;
      this.setState({ squares: squares });
      console.log(squares);


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
