import React from "react";
function Square({val,onClick}) {
    return (
        <button onClick={onClick}>{ val}</button>
  )  
}
export default Square