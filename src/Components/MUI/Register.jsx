import React from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Register() {
  return (
    <div style={{backgroundColor:"aliceblue"}}> 
      <Paper elevation={20} style={{width:"500px",padding:"20px",marginTop:"50px",marginBottom:"50px",marginLeft:"370px"}}> 
      <Typography variant='h4' style={{fontFamily:"math",fontWeight:"bold", marginLeft:"100px"}}>REGISTER PAGE</Typography>
      <TextField variant='outlined' label=' Name' type='Text' fullWidth style={{marginBottom:"10px"}} />
      <TextField variant='outlined' label='Email' fullWidth  type='Email' style={{marginBottom:"10px"}}/>
      <TextField variant='outlined' label='Password' fullWidth  type='password' style={{marginBottom:"10px"}}/>
      <TextField variant='outlined' label='Phone ' fullWidth type='Number' style={{marginBottom:"10px"}}/>
       <TextField variant='outlined' label='Address ' multiline rows={4} fullWidth style={{marginBottom:"10px"}}/>
       <Button variant='contained' fullWidth>Register</Button>
      </Paper>
    </div>
  )
}
