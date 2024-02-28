import React,{ useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function Login() {
  const navigate=useNavigate()
  const [formData,setFormData]=useState({
    
    email:"",
    password:"" 
  })


  const handleChange=(e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }



  const senderFunction=async()=>{
    const res=await axios.post("http://localhost:5500/api/auth/login",{
     
      email:formData.email,
      password:formData.password,
    })
    .then((res)=>{
        const user=res.data;
        if(user.role=="user"){
            navigate("/home")
        }
    })
    .catch((error)=>{
      console.log(error);
      alert("Invalid Credentials")
    });
  
}
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    senderFunction()
  }


  return (
    <div style={{marginTop:"100px"}}>
    

    <form onSubmit={handleSubmit}>
      <Box 
      display="flex"
      flexDirection="column"
      marginLeft="auto"
      width="300px"
      marginRight="auto"
      justifyContent="center"
      alignItems="center">
        <Typography variant='h2'>Login</Typography>
       

<TextField
        name='email'
        type='email'
        variant='outlined'
        placeholder='Email'
        margin='normal'
        sx={{
            width:"50vh"
        }}
        onChange={handleChange}
    
        />

<TextField
        name='password'
        type='password'
        variant='outlined'
        placeholder='Password'
        margin='normal'
        sx={{
            width:"50vh"
        }}
        onChange={handleChange}
        />

        <Button variant='contained' type='submit'>Login</Button>
      </Box>

    </form>
    
    
    
    
    </div>

  )
}

export default Login