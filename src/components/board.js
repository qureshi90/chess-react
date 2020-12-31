import React from "react";
import pieces from './pieces';

function Board() {
  return (
    <>
      <img src={pieces.rb} alt="rook black" />
      <table border="1" cellSpacing="0">
        <tbody className="board">
          {Array.from({ length: 8 }).map((_, rowId) => (
            <tr key={rowId}>
              {Array.from({ length: 8 }).map((_, colId) => (
                <td
                  key={colId}
                  className={rowId % 2 === 1
                    ? colId % 2 === 0
                      ? "cell-color table-cell"
                      : "table-cell"
                    : colId % 2 === 1
                      ? "cell-color table-cell"
                      : "table-cell"
                  }
                >
                  <img src={pieces.pw} alt="piece" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Board;
