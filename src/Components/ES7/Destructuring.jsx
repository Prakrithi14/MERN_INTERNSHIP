import React from 'react'

export default function Destructuring() {
    const number=[1,2,3,4,5,6]

    const [a,b,c,d,e,f]=number
    const num1=number[0]
    const obj=[{
    name:"ABC",
    phone:234567891
    },
    {name:"EFG",
    phone:9876543210
    }]
    const [{name,phone}]=obj
  



  return (
    <div>
      {d},
      {f},
      {num1},
      {name[2]},
      {phone}
    </div>
  )
}
