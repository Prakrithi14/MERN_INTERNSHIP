import React from 'react'
import './style.css'
export default function Firstapp() {
    const mystyle={
        color:"blue",
        backgroundColor:"yellow"
    }
  return (
    <div>
      <h1>Hello My App</h1>

      <h3 style={{color:"red",border:'2px dotted black'}}>INLINE CSS</h3>
    
        <h3 style={mystyle}>INTERNAL CSS using object</h3>

        <h5 className='myclass'>EXTERNAL CSS</h5>
    </div>
  )
}

