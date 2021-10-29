import React,{useState} from "react";
import Board from "./Board";
//import { CalculateWinner } from "../helper"
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
function Game() {
    let [text, SetText] = useState([]);
    let [step, setStep] = useState(0);
    let [setX, setSetX]=useState(true);
    let winner = calculateWinner(text[step]);
    let xo = setX ? "X" : "O";
    const handleClick = (i) => {
        let history = text.slice(0, step + 1);
        let current = history[step];
        let square = [...current];
        if (winner || square) return;
        square[i] = xo;
        SetText([...history, square]);
        setStep(history.length)
        setSetX(!setX)
    }
    return (
        <div>
            <h1>Tic-tac</h1>
            <Board sq={text[step]} onClick={ handleClick}/>
        </div>
    )
}



export default Game