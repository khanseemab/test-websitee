 
 import React from 'react'
import "./CurrentQR.css"
const QR = ({src}) => {
  return (
<>
<div className="card CurrentQRcard">
    <div className="align">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
    </div>
    <img src={src} className='CurrentQRImage' alt='QR code for Current Account Upi Payments'/>
</div>
</>  )
}

export default QR;