import React from 'react';
import * as Minesweeper from './minesweeper';

export default class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        board: new Minesweeper.Board(9, 10)
      };
      
      this.updateGame = this.updateGame.bind(this);
    }
    
    updateGame() {

    }


    render() {
        return (
            <div>
                <h1>Minesweeper</h1>
                <h2>Click to explore a tile.</h2>
                <h2>Alt + click to flag a tile.</h2>
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>)
        
    }
}