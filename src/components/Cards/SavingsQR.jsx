import React from 'react'
import "./SavingsQR.css"
const QR = ({name,src,upi}) => {
  return (
<>
<div className="card SavingsQRcard ">
    <div className="align">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
    </div>

    <h3>{name}</h3>
    <h6 style={{textAlign:"center",color:"#fff",padding:"5px",borderRadius:"3px "}}>{upi}</h6>
    <img src={src}  alt='QR code for Upi Payments'/>
</div>
</>  )
}

export default QR;