import React from 'react';
import * as Minesweeper from './minesweeper';

export default class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        board: new Minesweeper.Board(9, 10)
      };

    }

}