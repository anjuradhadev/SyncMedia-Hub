import React from 'react'
import {Box, Button, TextField, Typography} from '@mui/material'
import {Link} from "react-router-dom"

function Contactpage(){
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '55%', backgroundColor:'white', borderRadius:3 }}>
    <Typography variant="h6" sx={{ marginTop: 4, fontSize: 22, marginLeft:5 }}>
      Thanks for reaching out! Your inquiry is received. We'll get back to you soon!!
    </Typography>
    <Button variant="text" sx={{color:'black', marginTop:5, width:200, marginLeft:40}}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit'}}>ok</Link>
    </Button>
  </Box> 
  )
}

export default Contactpage
