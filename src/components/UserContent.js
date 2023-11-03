import React from 'react'
import Card from './Card'
import './css/style.css'
const UserContent = () => {
  return (
    <div className="row">
        <div className="col">
            <div className = "flex_decoration">
            <i class="fa-regular fa-circle-user"></i>
                <span>User1</span>
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
            <i class="fa-regular fa-circle-user"></i>
                <span>User2</span>
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
            <i class="fa-regular fa-circle-user"></i>
                <span>User3</span>
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
            <i class="fa-regular fa-circle-user"></i>
                <span>User4</span>
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
            <i class="fa-regular fa-circle-user"></i>
                <span>User5</span>
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

export default UserContent;
