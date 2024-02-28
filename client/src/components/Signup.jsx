import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function Signup() {
  const navigate=useNavigate()

  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"" 
  })

//   const handleData=(e)=>{
//     const newData ={...formData}
//     newData[e.target.name] = e.target.value;
//     setFormData(newData)
//     console.log(newData)
//    }

const handleChange=(e)=>{
  setFormData((prev)=>({
    ...prev,
    [e.target.name]:e.target.value
  }))
}

const senderFunction=async()=>{
  const res=await axios.post("http://localhost:5500/api/auth/signup",{
    name:formData.name,
    email:formData.email,
    password:formData.password,
  })
  .then((res)=>{
    console.log(res.data)
    navigate("/login")
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
        <Typography variant='h3'>Sign Up</Typography>
        <TextField
        name='name'
        type='text'
        variant='outlined'
        placeholder='Name'
        margin='normal'
        sx={{
            width:"50vh"
        }}
        onChange={handleChange}
        />

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

        <Button variant='contained' type='submit'>Signup</Button>
      </Box>

    </form>
    </div>
  )
}

export default Signup