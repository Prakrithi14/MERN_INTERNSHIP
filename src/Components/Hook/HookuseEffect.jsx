import React, { useEffect, useState } from 'react'

export default function HookuseEffect() {
  //syntax
//   useEffect(CssBaseline,[])
//   cb=callback function
//   []=dependency
const [count,setCount]=useState(0)
useEffect(()=>{
    setTimeout(()=>{
        setCount((numCount)=>numCount+1)
    },5000);
    })
    
    return (
    <div>
      <h3>I have rendered {count} times</h3>
    </div>
  )
}
