// import React, { useEffect ,useState} from 'react'
// import axios from 'axios'

// export default function Task3() {
//     const [data,setData]=useState([])
//     const handleFetch=()=>{
//         axios.get("https://dummyjson.com/products")
        
//         .then ((response)=>{
//             console.log(response)
//             setData(response.product)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//     }
//     useEffect(()=>{
//         handleFetch()
//     },[])
//   return (
    
//     <div>
//         <button onClick={handleFetch}>click</button>
//       {data.map((item)=>{
//             return(
                
//                 <>
//                 <h3>{item.id}</h3>
//                 <h3>{item.quote}</h3>
//                 <h3>{item.author}</h3>
//                 </>
//             )
//         })}
//     </div>
//   )
// }


// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Button from '@mui/material/Button'
// export default function ApiAxios() {
//     const [data,setData]=useState([])
//     const handleFetch=()=>{
//         axios.get("https://dummyjson.com/products")

//         .then((response)=>{
//             console.log(response.data.products)
//             setData(response.data.product)
//         })
//         .catch((error)=>{
//             console.log(error)
//         })
//     }
//     useEffect(()=>{
//         handleFetch()
//     },[])
//   return (
//     <div>
//         <button onClick={handleFetch}>click</button>
//         <Card>
//         {data.map((item)=>{
//             return(
//                 <>
//                 <h3>{item.id}</h3>
//                 <h3>{item.title}</h3>
//                 <h3>{item.description}</h3>
//                 </>
//             )
//         })}
//         </Card>
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

export default function ApiAxios() {

    const [data, setData] = useState([])

    const handleFetch = () => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                console.log(response.data.products)
                setData(response.data.products)   // ✅ correct
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <div style={{ 
            display: "flex", 
            flexWrap: "wrap", 
            gap: "20px",
            justifyContent: "center",
            marginTop: "20px"
        }}>
            
            {data.map((item) => (
                <Card key={item.id} style={{ width: 300 }}>
                    
                    <CardMedia
                        component="img"
                        height="200"
                        image={item.thumbnail}
                        alt={item.title}
                    />

                    <CardContent>
                        <Typography variant="h6">
                            {item.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button variant="contained" size="small">
                            Buy
                        </Button>
                        <Button variant="outlined" size="small">
                            Detail
                        </Button>
                    </CardActions>

                </Card>
            ))}

        </div>
    )
}