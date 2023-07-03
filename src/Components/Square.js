import React from 'react'
import './Square.css'
const Square = (props) => {

  return (
    <div 
    onClick={props.onTap}
    
    className='square'>
        <h5 style={{fontSize:"20px"}}>{props.value}</h5>
      
    </div>
  )
}

export default Square
