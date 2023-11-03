import React from 'react'
import './css/style.css'
import Card from './Card'
const Status = () => {
  return (
    <div className="row">
        <div className="col">
            <div className = "flex_decoration">
            <i class="fa-regular fa-circle-question"></i>
                <span>Errored</span>
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
                <span>Todo</span>
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
                <span>In Progress</span>
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
                <i class="fa-regular fa-circle-check"></i>
                <span>Done</span>
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
            <i class="fa-regular fa-circle-xmark"></i>
                <span>Canceled</span>
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

export default Status
