import React from 'react'

export default function ArrayMethod() {

    const Student=[{
        name:"ABC",
        email:"abc@gmail.com",
        phone:9876543218 ,  
         Address:"Mangalore"
    },
    {
        name:"EFG",
        email:"def@gmail.com",
        phone:9876543218 ,  
         Address:"Mangalore"
    },
    {
        name:"HIJ",
        email:"hij@gmail.com",
        phone:9876543218,   
         Address:"Mangalore"
    },
    {
        name:"KLM",
        email:"lmn@gmail.com",
        phone:9876543218,   
         Address:"Mangalore"
    }
]
console.log(Student)
const num=[1,2,3,4,5]
  return (
    <>
      <div>
      {num.map((data)=>(
        <h3>{data}</h3>
      ))}
      </div>
        <>
          <table border={3}>
           <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
            </thead>
              <tbody>
                 {Student.map((STU)=>(
                <tr>
                <td>{STU.name}</td>
                <td>{STU.email}</td>
                <td>{STU.phone}</td>
                <td>{STU.Address}</td>
                </tr>
                 ))}
            </tbody>
            </table>
        </>
          <div>
      {Student.map((profile)=>(
      <>
      <h3>{profile.name}</h3>
      <h3>{profile.email}</h3>
      <h3>{profile.phone}</h3>
      <h3>{profile.Address}</h3>
      </>
      ))}
    </div>
      
    </>
  )
}
