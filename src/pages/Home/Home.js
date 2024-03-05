import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import { Box } from '@mui/material'
import Login from '../Auth/Login'
import SignUp from '../Auth/SignUp'
import Emailverification from '../Auth/Emailverification'
import FrontPage from '../FrontPage/FrontPage'
import Emailconfirm from '../Emailconfirm/Emailconfirm'
import ForgotPassword from '../Auth/ForgotPassword/ForgotPassword'
import Verifyemail from '../Auth/Verifyemail'
import ResetPassword from '../Auth/ResetPassword/ResetPassword'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'


function Home() {

  return (
    <Box>
        <Navbar />
        <Login />
        <SignUp/>
        <Emailverification/>
        <FrontPage/>
        <Emailconfirm/>
        <ForgotPassword/>
        <Verifyemail/>
        <ResetPassword/>
        <Services/>
        <Contact/>
    </Box> 
  )
}

export default Home
