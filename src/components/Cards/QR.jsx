import React from 'react'
import "./QR.css"
const QR = ({name,src,upi}) => {
  return (
<>
<div class="card QRcard">
    <div class="align">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
    </div>

    <h2>{name}</h2>
    <h6 style={{textAlign:"center",color:"#ffffff",padding:"5px",borderRadius:"3px "}}>{upi}</h6>
    <img src={src}  alt='QR code for Upi Payments'/>
</div>
</>  )
}

export default QR;