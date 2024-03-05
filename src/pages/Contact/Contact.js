import React from 'react'
import { Box, Stack } from '@mui/material';
import ContactForm from '../../Section/Contact/ContactForm'

function Contact() {
  return (
    <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0}
  sx={{height:"100vh", backgroundColor: '#ABCDCD', overflow:'hidden'}}
>

      <ContactForm />
    </Stack>
  )
}

export default Contact
