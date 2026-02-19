import React from 'react'
import image1 from '../assets/flower.jpg'

const Testing = () => {
    const mystyle={
        color:'red',
        backgroundColor:'yellow',
        border:'2px solid black'

    }
  return (
    <div>
        <h2 style={{color:'blue',border:"2px red solid"}}>Inline css</h2>
        <h4 style={mystyle}>INTERNAL CSS</h4>
        <img src={image1} height={400} width={400}></img>
    </div>
  )
}

export default Testing