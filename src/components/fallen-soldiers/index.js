import React from 'react';
import './style.scss';
import Square from '../square/index.js';

export default class FallenSoldiers extends React.Component {
  renderSquare(square, i) {
    return <Square 
      piece = {square} 
      style = {square.style}
    />
  }

  render() {
    return (
      <div className="fallen-soldiers">
        <div className="pieces">
          {this.props.whiteFallenSoldiers.map((ws, index) => this.renderSquare(ws, index))}
        </div>
        <div className="pieces">
          {this.props.blackFallenSoldiers.map((bs, index) => this.renderSquare(bs, index))}
        </div>
      </div>
    );
  }
}