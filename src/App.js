import React from 'react';
import './App.css';
import Board from './components/board';
//import AppDragDropDemo from './test';

function App() {
  return (
    <div className="App">
      <Board />
      {/* <Board knightPosition={[0, 0]} /> */}
    </div>
  );
}

export default App;
