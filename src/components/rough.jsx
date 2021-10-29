import React, { useState } from "react";
function Rough() {
    let [status, setStatus] = useState('');
    let [arr, setArr] = useState([]);
    function ticTac(ip) {
console.log(ip);
        if (ip === 'x') {
            setStatus(`${ip}`);
             console.log("status:",status)
        } else if (arr.length = 0 && ip === 'o') {
            setStatus(ip)
        } else if (arr.length !== 0 && ip === 'o') {
            if (status === 'x') {
                setStatus(ip)
            } else {
                alert('not valid')
            }
        } else if(arr.length !== 0 && ip === 'x'){
            if (status === 'o') {
                 setStatus(ip);
            } else {
                alert('not valid')
            }
        }
        
    }
   
    return (
        
        <div>
            <input type="text" value={status} onChange={(e) => {  ticTac(`${e.target.value}`)}} placeholder="x/o"/>
        </div>
    )
}
export default Rough