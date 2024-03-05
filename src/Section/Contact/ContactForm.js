import React from 'react'
import { Box, Button, Card, CardMedia, Paper, TextField, Typography, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ContactForm() {
  return (
    // <Box >

    <Box sx={{ display: 'flex',width:'100%',justifyContent:'center',gap: '1', backgroundColor: '#ABCDCD'}}>
    <Box
      component="img"
      sx={{ width: '40%',objectFit:'contain' }}
      src="/Assets/contact.png"
      alt=""
    />

    <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
      <Typography variant="h6" sx={{ marginBottom: 4,fontWeight: 'bold',fontSize: 20, marginTop:8, marginLeft:13 }}>
        CONTACT US
      </Typography>
      <TextField label="Name" fullWidth variant="outlined" sx={{ marginBottom: 3, width: 350}} />
      <TextField label="Email ID"  fullWidth variant="outlined" sx={{ marginBottom: 3, width: 350}}  />
      <TextField label="Phone Number"  fullWidth multline rows={4} variant="outlined" sx={{ marginBottom: 3, width: 350}}  />
      <TextField label="Message" id="outlined-multiline-static" multiline rows={4} sx={{ marginBottom: 3, width: 350}} />
      <Button variant="contained" color="primary" fullWidth sx={{ color: 'black', fontWeight: 'bold', borderRadius: 20, width: 200, height: 50, marginBottom: 2, marginLeft: 10, fontSize: 20 ,backgroundColor:'#ABCDCD', transition: 'none', '&:hover': {backgroundColor: 'White'},}}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> 
        Submit
      </Link>
      </Button>
    </Box>
  </Box>
// </Box>
  )
}

export default ContactForm
