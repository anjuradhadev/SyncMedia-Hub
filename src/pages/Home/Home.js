import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import { Box } from '@mui/material'
import Login from '../Auth/Login'





function Home() {

  return (
    <Box>
        <Navbar />
        <Login />
    </Box> 
  )
}

export default Home
