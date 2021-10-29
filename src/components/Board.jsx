import React from "react";
import Square from "./Square";
function Board({ squares, onClick }) {
    <div>
        {squares.map((sq, i) => {
            <Square key={i} value={sq} onClick={()=>onClick(i)} />
        })}
    </div>
    
}
export default Board