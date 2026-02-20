import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

export default function Task1() {
    const HandleIncrement=()=>{
        setCounter(counter+1)
    }
    const HandleDecrement=()=>{
        setCounter(counter-1)
    }
    const HandleReset=()=>{
        setCounter(0)
    }
    //usestate
    const[counter,setCounter]=useState(0)
  return (
    <div>
    <Paper  elevation={20} style={{backgroundColor:'aliceblue', margin:'100px 300px 100px 200px', padding:'20px'}}>
    <div style={{backgroundColor:'White', textAlign:'center', border:'2px solid black'}}> 
        <h2 style={{fontFamily:'cursive'}}>Counter</h2>
    </div>
      <h1 style={{ textAlign:'center'}}>{counter}</h1>
      <Button variant='contained' style={{margin:'50px', backgroundColor:'green'}} onClick={HandleIncrement}>Increment</Button>
      <Button variant='contained'style={{margin:'50px' ,backgroundColor:'Red'}} onClick={HandleDecrement}>Decrement</Button>
      <Button variant='contained'style={{margin:'50px'}} onClick={HandleReset}>Reset</Button>
      </Paper>
    </div>
  )
}
