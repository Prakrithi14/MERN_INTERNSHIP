import React from 'react'

export default function TernaryOperator() {
    const score=10;
  return (
    // <div>
    //   {score>=80? <span style={{backgroundColor:'green'}}>Grade A</span>:
    //   score>=70?<span style={{backgroundColor:'yellow'}}>Grade B</span>:
    //   score>=60?<span style={{backgroundColor:'orange'}}>Grade C</span>:<span style={{backgroundColor:'red'}}>Grade D</span>}
    // </div>
    <div style={score>=80?{color:'white',backgroundColor:'green'}:score>=70?{backgroundColor:'yellow',color:'black'}:score>=60?{backgroundColor:'orange', color:'white'}:{backgroundColor:'red',color:'white'}}>
        {score>=80?'Grade A':
        score>=70?'Grade B':
        score>=60?'Grade C':'Grade D'}
    </div>
  )
}
