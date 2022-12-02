import React from 'react'
import './registerP3.css'
import ControlledExample from './CarouselFadeExample.js'

export default function registerP3() {
  return (
    <div className='regPage bg-dark'>
      <div className="head">
        <h1 className='text-muted'><strong>Step 3 :</strong></h1>
        <h1 className='textaa'>Let's start learning!</h1>
      </div>
      <div className="cardBox text-white">
        <ControlledExample />
      </div>
      <button>Submit</button>
    </div>
  )
}
