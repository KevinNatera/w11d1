import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  ReactDOM.render(<div>
    <Game />
  </div>, root)
})