import Button from '@mui/material/Button'
import React from 'react'

export default function Arrowfunction() {
    // Normal function
    function MyFunction(){
        return(
        <h3>Normal Function</h3>
        )
    }

    // Arrow Function
    const Arrow=()=>{
        return(
            <>
            <h3>Arrow Function</h3>
            <h3>HELLO</h3>
            
            </>
        )
    }

    // Arrow Function with single statement
    const Singlearrow=()=> <h3>Single Arrow Function with single statement</h3>
    const Handleclick=()=>alert("Button Clicked")
    const Handlegreet=(Name)=>
            alert("Hello "+Name)
  return (
    <div>
      <MyFunction/>
      <Arrow/>
      <Singlearrow/>
      <Button variant='contained' onClick={Handleclick}>CLICK ME</Button>
      <Button variant='outlined'  style={{marginLeft:"10px"}} onClick={()=>console.log("Good Evening")}>GREET</Button>
      <Button onClick={()=>Handlegreet("Prakrithi")}>Passing Argument</Button>
    </div>
  )


}
