import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
export default function ApiAxios() {
    const [data,setData]=useState([])
    const handleFetch=()=>{
        axios.get("https://dummyjson.com/quotes")

        .then((response)=>{
            console.log(response.data.quotes)
            setData(response.data.quotes)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        handleFetch()
    },[])
  return (
    <div>
        <button onClick={handleFetch}>click</button>
        {data.map((item)=>{
            return(
                <>
                <h3>{item.id}</h3>
                <h3>{item.quote}</h3>
                <h3>{item.author}</h3>
                </>
            )
        })}
    </div>
  )
}
