import React from 'react';
import '../style.scss';

function Square(props) {
  return (
    <button
      className={"square " + props.shade}
      style={props.style}
      onClick={props.onClick}
    />
  );
}

export default Square;

