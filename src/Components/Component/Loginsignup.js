import React, { useState } from 'react'
import './Loginsignup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons'

function Loginsignup() {
    
    const [action,setAction] =useState("Signup")

  return (
      <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underlin"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
            <FontAwesomeIcon icon={faUser} className='ic' />
                <input type="text" placeholder='Name'/>
            </div>}
           
            <div className="input">
            <FontAwesomeIcon icon={faEnvelope} className='ic'/>
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
            <FontAwesomeIcon icon={faLock} className='ic'/>
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Signup"?<div></div>:<div className="forgot-password">Lost password? <span>clickhere</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Signup")}}>Signup</div>  
            <div className={action==="Signup"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>  
        </div>
      </div>
  
  )
}

export default Loginsignup
