import React from 'react'
import './login.css'

export default function login() {
  return (
    <div className="homepg bg-dark">
        <div className="here">
            <h1><strong>Login</strong></h1>
            <input type="text" placeholder='Name'/>
            <input type="password" placeholder='Password'/>
            <button>Submit</button>
        </div>
    </div>
  )
}
