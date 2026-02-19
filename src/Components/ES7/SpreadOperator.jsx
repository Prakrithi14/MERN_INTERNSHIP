import React from 'react'

export default function SpreadOperator() {
    const Array1=[1,2,3,4]
    const Array2=[5,6,7,8]
    const combinedArray=[...Array1,...Array2]

    const obj1={
        name:"ABC",
        email:"abc@gmail", 
    }
    const obj2={
        phone:"9876543218",
        Address:"Mangalore"
    }
    const combinedObject={...obj1,...obj2}

    return (
    
    <div>
        {combinedArray}
        {combinedObject.name}
        {combinedObject.email}
        {combinedObject.phone}
        {combinedObject.Address}
    </div>
  )

}
