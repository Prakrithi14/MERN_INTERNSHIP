import React, { useState } from 'react'

export default function Hookusestate() {

    //Syntax
    //const [state,setState]=useState()
    let favColor='Blue'
    const HandleChange=()=>{
       
            favColor="Red"
            console.log(favColor)
        
    }
    const HandleColor=()=>setColor("Green")
    const HandleStudent=()=>setCompany({
    name:"Krithi",
Place:"Mangalore",
Age:22})
    ///Using useState
    const[color,setColor]=useState("Red")

    //Multiple usestates
    const [Student,setCompany]=useState({
        name:"Prakrithi",
        Place:"Manjeshwar",
        Age:21
        
    })
  return (
    <div>

     <h3>My favourite colour is {favColor}</h3>
      <button onClick={HandleChange}>Change Color</button>
       <h3>Using useState</h3>
      <h3>My favourite colour is {color}</h3>
      <button onClick={HandleColor}>Change Color</button>

        <h3>Using Multiple useState</h3>
      <p>My name is {Student.name}.I am {Student.Age} years old.I am from {Student.Place}</p>
      <button onClick={HandleStudent}>Change</button>
    </div>
  )
}
