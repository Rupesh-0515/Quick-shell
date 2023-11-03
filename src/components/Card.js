import React from 'react';
import './css/card.css'
import img from './asset/Tom.jpg'
const Card = () => {
    const num = "X";
  return (
    <div className="card">
        <div className="head img">
        <p>CAM-{num}</p>
        <img src={img} alt="Avatar" style={{width:"30px", borderRadius: "50%"}}/>
        </div>
        <div className="containe">
            <h4><b>Enter Your Content</b></h4>
            <div className="base">
                <div className="item">
                <i class="fa-solid fa-triangle-exclamation" style={{margin:"5px"}}></i>
                </div>
                <div className="item" style={{margin:"0px 5px", padding: "0px 8px"}}>
                <i class="fa-regular fa-circle-dot"style={{margin:"5px"}}></i><p>Feature Request</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
