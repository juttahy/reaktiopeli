import React, { Component } from 'react';
import './App.css';
import GameCircle from './GameCircle/GameCircle';
import GameOver from './GameOver/GameOver';


const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

 // state pitää olla eka juttu class-sisällä!
 // rounds tarkoittaa sitä kuinka monta kertaa pallo syttyy
 // ja pelaaja ei osu palloon ennen kuin tulee game over

class App extends Component {
  state = {
    score: 0,
    current: 0,
    rounds: 0,
    showGameOver: false
  };

  // näissä ei ole let/const etuliitettä, koska on class-based 
  // ja suoraan sen juuressa
  pace = 1500;
  timer = undefined;

  next = () => {
    
    if (this.state.rounds >= 5) {
      this.endHandler();
      return;
    }
    
    // tässä pitää olla let, koska on funktion sisällä
    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1,4);
    } while (nextActive === this.state.current);

    this.setState({
      current:nextActive
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.next, this.pace);

    this.setState({
      rounds: this.state.rounds + 1
    });

    console.log(this.state.rounds);

  }

  clickHandler = (btnId) => {
    console.log('wow', btnId);

    if (this.state.current !== btnId) {
      this.endHandler();
      return;
    }

    this.setState({
        score: this.state.score + 1,
        rounds: 0
    })
  }
  
  startHandler = () => {
    this.next();
  }

  endHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      showGameOver: true
    })
  }

  render() {
    return (
    <div className="main">
      <h1>Speed Game</h1>
      <p>Your score is: {this.state.score}</p>
      <div className="circleContainer">
        <GameCircle 
          buttonColor="purple" 
          active={this.state.current === 1}
          click={() => this.clickHandler(1)} 
        />
        <GameCircle  
          buttonColor="pink"
          active={this.state.current === 2}
          click={() => this.clickHandler(2)} 
        />
        <GameCircle 
          buttonColor="blue"
          active={this.state.current === 3} 
          click={() => this.clickHandler(3)} 
        />
        <GameCircle 
          buttonColor="yellow"
          active={this.state.current === 4}  
          click={() => this.clickHandler(4)} 
        />
      </div>
      <button onClick={this.startHandler}>Start Game</button><button onClick={this.endHandler}>Stop Game</button>
      
      { this.state.showGameOver && <GameOver score={this.state.score} /> }
    
    </div>
    
    );
  }
}

export default App;
