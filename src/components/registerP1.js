import React from 'react'
import './registerP1.css'
import google from '../pics/google.svg'
import github from '../pics/github.svg'
import linkedin from '../pics/linkedin.svg'

export default function registerP1() {
    return (
        <div className="regPage bg-dark">
            <div className="head">
                <h1 className='text-muted'><strong>Step 1 :</strong></h1>
                <h1 className='textaa'>Let's get to know you</h1>
            </div>
            <div className="block">
                <div className="s1">
                    <div className="form">
                        {/* <h1><strong></strong></h1> */}
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <input type="text" placeholder='Confirm Password' />
                        <button>Submit</button>
                    </div>
                </div>
                <div className="s2">
                    <h3>Or sign up using</h3>
                    <img src={google} alt="" />
                    <img src={github} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>
        </div>
    )
}
