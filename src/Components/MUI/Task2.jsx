import Button from '@mui/material/Button'
import React, { useState } from 'react'

export default function Task2() {
  const [theme,setTheme]=useState("Light")
  const HandleMode=()=>{
    setTheme(theme=="Light"?"Dark":"Light")
  }
  return(
    <div style={{minHeight:500,backgroundColor:theme=="Light"?"white":"black"}}>
      <p style={{color:theme=="Light"?"black":"white"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis accusamus deserunt fuga? Perferendis est inventore eius iure hic voluptates commodi repellendus nobis molestiae officia dignissimos officiis reprehenderit saepe, animi necessitatibus nemo tempora ullam sunt! Repudiandae veniam alias, nobis cum ad tempora distinctio quidem. Placeat ipsum exercitationem provident impedit accusantium, vero sint voluptatibus! Sint dolores, repellat saepe eos reprehenderit sunt repudiandae illo corrupti nulla assumenda omnis porro consequuntur ratione commodi dolorem quo magnam esse, ab iure repellendus ducimus mollitia veniam animi. Atque ipsa, molestias accusamus minima quasi eveniet nemo unde maiores explicabo adipisci alias culpa, optio recusandae facere earum architecto aspernatur!
      </p>
      <Button variant='contained' style={{margin:50,color:theme=="Light"?"white":"black",backgroundColor:theme=="Light"?"black":"White"}} onClick={HandleMode}>{theme} Mode</Button>
    </div>
  )
}

