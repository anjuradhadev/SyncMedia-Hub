import React from 'react'
import { Box, Stack } from '@mui/material';
import Navbar from '../../Component/Navbar/Navbar';
import ContactUsForm from '../../Section/ContactUs/ContactUsForm'

function ContactUs() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#ABCDCD', overflow:'hidden'}}
>
     <Navbar/>
    <ContactUsForm />
    </Stack>
  )
}

export default ContactUs
