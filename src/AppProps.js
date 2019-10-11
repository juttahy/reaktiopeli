import React, { Component } from 'react';
import './App.css';
import GameCircle from './GameCircle/GameCircle';
import './GameCircle/GameCircle.css';


class App extends Component {
  render() {
    return (
    <div>
      <h1>Speed Game</h1>
      <div className="circleContainer">
        <GameCircle bg="purple" />
        <GameCircle bg="pink" />
        <GameCircle bg="blue" />
        <GameCircle bg="yellow" />
      </div>
      <button>Start Game</button><button>Stop Game</button>
    </div>
    
    );
  }
}

export default App;
