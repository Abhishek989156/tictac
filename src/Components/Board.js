import React, { useState } from 'react'
import Square from './Square'

const Board = () => {
    const[state,setState]=useState(Array(9).fill(null));

    const[isXTurn,setIsXTurn]=useState(true);

    const checkWinner =()=>{
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        for(let logic of winnerLogic)
        {
            const[a,b,c]=logic;
            if(state[a]!==null && state[a]===state[b] && state[a]===state[c])
            {return state[a];}
            
        }
        return false;
        
    };
    const isWinner=checkWinner();


    const handleClick=(index)=>{
        if(state[index]!==null){
            return;
        }
        const copyState=[...state];
        copyState[index]=isXTurn ? "X" : "0";
        setState(copyState);
        setIsXTurn(!isXTurn);
    }
    const handleReset=()=>{
        setState(Array(9).fill(null));
    }
    
  return (
    <div className='mainform'>

    <div className="board-container">
    { 
        isWinner ? (<>
               <h2>{isWinner} won the Game!</h2> <button className='btn' onClick={handleReset}>Play Again</button>
        </> ):
        
        ( <>  
           <h4 style={{textAlign:"center",fontSize:"40px"}}> {isXTurn ? "X" :"0"}'s Turn!</h4>   
            <div className='Board-row'> 
            <Square onTap={()=>handleClick(0)} value={state[0]}/>
            <Square onTap={()=>handleClick(1)} value={state[1]}/>
            <Square onTap={()=>handleClick(2)} value={state[2]}/>
        </div>

        <div className='Board-row'>
        <Square onTap={()=>handleClick(3)} value={state[3]}/>
        <Square onTap={()=>handleClick(4)} value={state[4]}/>
        <Square onTap={()=>handleClick(5)} value={state[5]}/>
        </div>

        <div className='Board-row'>
        <Square onTap={()=>handleClick(6)} value={state[6]}/>
        <Square onTap={()=>handleClick(7)} value={state[7]}/>
        <Square onTap={()=>handleClick(8)} value={state[8]}/>
        </div>
        
        <button className='btn' style={{marginTop:"20px",}} onClick={handleReset}>Reset</button>


        </>
        )
}
    </div>
    </div>
    
    
  )
}

export default Board
