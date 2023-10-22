import { useState } from "react"



 function square({value, onSquareClick}){

  return(
    <button onClick={onSquareClick}>{value}</button>
  )
 }

export default function board() {

  const[xIsNext, setXIsNext] = useState(true);
  const[squares, setSquares] = useState(Array(9).fill(null));

    function handlClick(i){

    }
  return (
    <div>
      <div className="board-row">
        <square value={squares[0]} onSquareClick={() => handlClick(0)}/>
        <square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <square value={square[2]} onSquareClick={() => handlClick(2)} />
      </div>
      <div className="board-row">
        <square value={squares[3]} onSquareClick={() => handlClick(0)}/>
        <square value={squares[4]} onSquareClick={() => handleClick(1)}/>
        <square value={square[5]} onSquareClick={() => handlClick(2)} />
      </div>
      <div className="board-row">
        <square value={squares[6]} onSquareClick={() => handlClick(0)}/>
        <square value={squares[7]} onSquareClick={() => handleClick(1)}/>
        <square value={square[8]} onSquareClick={() => handlClick(2)} />
      </div>
    </div>
  )
}
