import React from "react";
import arr from './pieces';

function Board() {
  return (
    <>
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
                  { ( arr[rowId][colId] !== undefined ) ? <img src={arr[rowId][colId]} alt="piece" /> : null }
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
