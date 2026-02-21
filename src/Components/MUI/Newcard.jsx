import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import image1 from '../../assets/flower.jpg'
import image2 from '../../assets/rose.jpg'
import image3 from '../../assets/lavender.jpg'
import image4 from '../../assets/lily.jpg'
import image5 from '../../assets/marigold.jpg'
import image6 from '../../assets/sunflower.jpg'

import Button from '@mui/material/Button'
export default function Newcard() {
    const flowers=[{
        name:'Dahlia',
        profileimage:image1,
        description:'This is a  is a flower. It is a beautiful flower. It is a red flower. It is a dahlia.The Dahlia is a popular, bushy perennial plant belonging to the Asteraceae (daisy) family, originally native to Mexico and Central America.'
    } ,
    {
        name:'Rose',
        profileimage:image2,
        description:'This is a  is a flower. It is a beautiful flower. It is a red flower. It is a rose.The rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears.'
    },
    {
      name:'Lavender',
      profileimage:image3,
      description:'This is a  is a flower. It is a beautiful flower. It is a purple flower. It is a lavender.Lavender, (genus Lavandula), genus of about 30 species of aromatic shrubs in the mint family (Lamiaceae), native to the Old World.'
    },
    {
      name:'Lily',
      profileimage:image4,
      description:'This is a  is a flower. It is a beautiful flower. It is a white flower. It is a lily.Lily, (genus Lilium), genus of about 100 species of flowering plants in the family Liliaceae, native to the temperate regions of the Northern Hemisphere.'
    },
    {
      name:'marigold',
      profileimage:image5,
      description:'This is a  is a flower. It is a beautiful flower. It is a orange flower. It is a marigold.Marigold, (genus Tagetes), genus of about 50 species of annual and perennial herbs in the sunflower family (Asteraceae), native to the Americas.'
    },
    {
      name:'Sunflower',
      profileimage:image6,
      description:'This is flower.It is a beautiful flower.It is yellow in color with brown center.It is a sunflower.'
    }
  ]
  const Handlemore=()=>{
    window.open("https://en.wikipedia.org/wiki/Dahlia")

  }
return (
    <div style={{display:'flex', flexWrap:'wrap',margin:'30px',gap:'40px'}}>
      {flowers.map((info)=>(
    <Card style={{ width:345 }}>
        <CardMedia 
         style={{height:200}}
        image={info.profileimage}
        title={info.name}
        />
        <CardContent>
        <Typography variant="h5" style={{fontFamily:'cursive'}}>{info.name}</Typography>
        <Typography variant="body2">{info.description}</Typography>
        </CardContent>
        <CardActions>
            <Button  variant='contained' size='small'>Share</Button>
            <Button  variant='contained' size='small' onClick={Handlemore}>Know more</Button>
        </CardActions>
    </Card>
    ))}
    </div>
  )
}
