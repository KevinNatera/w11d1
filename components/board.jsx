import React from 'react';
import Tile from './tile';


export default class Board extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='gameBoard'>
        {this.props.board.grid.map((row, i)=> {
          return <div key={i} className="row"> 
            {row.map((el, j)=>{
              return <Tile key = {[i, j]} position ={el} updateGame = {this.props.updateGame}/>
            }
          )}
          </div>
        })}
      </div>
    )
  }
}