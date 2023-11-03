import React from 'react'
import './css/style.css'
import Card from './Card'
const Priority = () => {
  return (
    <div className="row">
        <div className="col">
            <div className = "flex_decoration">
            <i class="fa-regular fa-square-full"></i>
                <span>No Priority</span>
                <div>
                <i class="fa-solid fa-plus together"></i>
                <i class="fa fa-ellipsis-v together" aria-hidden="true"></i>
                </div>
            </div>
            <Card/>
            <Card/> 
        </div>
        <div className="col">
            <div className = "flex_decoration">
            <i class="fa-solid fa-circle-radiation"></i>
                <span>Urgent</span>
                <div>
                <i class="fa-solid fa-plus together"></i>
                <i class="fa fa-ellipsis-v together" aria-hidden="true"></i>
                </div>
            </div>
            <Card/>
            <Card/> 
        </div>
        <div className="col">
            <div className = "flex_decoration">
            <i class="fa-solid fa-circle"></i>
                <span>High</span>
                <div>
                <i class="fa-solid fa-plus together"></i>
                <i class="fa fa-ellipsis-v together" aria-hidden="true"></i>
                </div>
            </div>
            <Card/>
            <Card/> 
        </div>
        <div className="col">
            <div className = "flex_decoration">
            <i class="fa-solid fa-circle-half-stroke"></i>
                <span>Medium</span>
                <div>
                <i class="fa-solid fa-plus together"></i>
                <i class="fa fa-ellipsis-v together" aria-hidden="true"></i>
                </div>
            </div>
            <Card/>
            <Card/> 
        </div>
        <div className="col">
            <div className = "flex_decoration">
            <i class="fa-regular fa-circle"></i>
                <span>Low</span>
                <div>
                <i class="fa-solid fa-plus together"></i>
                <i class="fa fa-ellipsis-v together" aria-hidden="true"></i>
                </div>
            </div>
            <Card/>
            <Card/> 
        </div>
    </div>
  )
}

export default Priority
