import React from 'react';
import '../style.scss';
import Square from '../square/square.js';

export default class FallenSoldiers extends React.Component {
  renderSquare(square, i) {
    return <Square 
      piece = {square} 
      style = {square.style}
    />
  }

  render() {
    return (
      <>
        <div className="board-row">
          {this.props.whiteFallenSoldiers.map((ws, index) => this.renderSquare(ws, index))}
        </div>
        <div className="board-row">
          {this.props.blackFallenSoldiers.map((bs, index) => this.renderSquare(bs, index))}
        </div>
      </>
    );
  }
}